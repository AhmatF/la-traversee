"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AIMessage } from "./AIMessage";
import { UserMessage } from "./UserMessage";
import { ChatInput } from "./ChatInput";
import { TypingIndicator } from "./TypingIndicator";
import { cn, generateId } from "@/lib/utils";
import type { VolunteerProfile, StructureNeed } from "@/lib/types";

type ChatType = "volunteer" | "structure";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatContainerProps {
  type: ChatType;
  onProfileComplete?: (profile: VolunteerProfile) => void;
  onNeedComplete?: (need: StructureNeed) => void;
  className?: string;
}

// Parse AI response for profile/need completion
function parseAIResponse(content: string): {
  text: string;
  profile?: VolunteerProfile;
  need?: StructureNeed;
} {
  // Look for JSON blocks
  const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/);

  if (jsonMatch) {
    try {
      const parsed = JSON.parse(jsonMatch[1]);

      if (parsed.action === "profile_complete" && parsed.profile) {
        const textWithoutJson = content.replace(jsonMatch[0], "").trim();
        return { text: textWithoutJson, profile: parsed.profile };
      }

      if (parsed.action === "need_complete" && parsed.need) {
        const textWithoutJson = content.replace(jsonMatch[0], "").trim();
        return { text: textWithoutJson, need: parsed.need };
      }
    } catch {
      // JSON parse failed, return original
    }
  }

  return { text: content };
}

export function ChatContainer({
  type,
  onProfileComplete,
  onNeedComplete,
  className,
}: ChatContainerProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCompletedProfile, setHasCompletedProfile] = useState(false);

  // API endpoint based on type
  const apiEndpoint = type === "structure" ? "/api/chat/structure" : "/api/chat/volunteer";

  // Check for profile/need completion in messages
  useEffect(() => {
    if (hasCompletedProfile) return;

    const lastAssistantMessage = [...messages].reverse().find(m => m.role === "assistant");
    if (!lastAssistantMessage) return;

    const { profile, need } = parseAIResponse(lastAssistantMessage.content);

    if (profile && onProfileComplete) {
      setHasCompletedProfile(true);
      onProfileComplete({
        ...profile,
        id: crypto.randomUUID(),
        createdAt: Date.now(),
      } as VolunteerProfile);
    }

    if (need && onNeedComplete) {
      setHasCompletedProfile(true);
      onNeedComplete({
        ...need,
        id: crypto.randomUUID(),
        createdAt: Date.now(),
      } as StructureNeed);
    }
  }, [messages, onProfileComplete, onNeedComplete, hasCompletedProfile]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = useCallback(async (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: generateId(),
      role: "user",
      content: text,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API error:", response.status, errorText);
        throw new Error(`API request failed: ${response.status}`);
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";
      const assistantId = generateId();

      // Add empty assistant message
      setMessages(prev => [...prev, { id: assistantId, role: "assistant", content: "" }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });

          // Parse SSE format: "data: {...}"
          const lines = chunk.split("\n");
          for (const line of lines) {
            if (!line.trim() || !line.startsWith("data: ")) continue;

            const jsonStr = line.slice(6); // Remove "data: " prefix
            if (jsonStr === "[DONE]") continue;

            try {
              const data = JSON.parse(jsonStr);

              // Handle text-delta events
              if (data.type === "text-delta" && data.delta) {
                assistantContent += data.delta;
                setMessages(prev =>
                  prev.map(m =>
                    m.id === assistantId ? { ...m, content: assistantContent } : m
                  )
                );
              }
            } catch {
              // Ignore parse errors
            }
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      // Add error message
      setMessages(prev => [
        ...prev,
        {
          id: generateId(),
          role: "assistant",
          content: "Désolé, une erreur s'est produite. Veuillez réessayer.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, apiEndpoint]);

  const agentName = type === "volunteer" ? "Conseiller Engagement" : "Conseiller ESS";
  const welcomeIcon = type === "volunteer" ? "🤝" : "🏢";
  const welcomeTitle = type === "volunteer"
    ? "Je suis là pour t'aider"
    : "Bienvenue sur Résilience Connect";
  const welcomeText = type === "volunteer"
    ? "Dis-moi en plus sur toi et tes envies d'engagement. Ensemble, on va trouver la mission qui te correspond !"
    : "Décrivez-nous votre structure et vos besoins. Nous allons vous mettre en relation avec les bons volontaires.";

  return (
    <div className={cn("flex flex-col h-full", className)}>
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Welcome message if no messages */}
        {messages.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <span className="text-3xl">{welcomeIcon}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {welcomeTitle}
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {welcomeText}
            </p>
          </div>
        )}

        {/* Messages */}
        <AnimatePresence mode="popLayout">
          {messages.map((message) => {
            const isUser = message.role === "user";

            // Parse content for display (remove JSON)
            const { text } = parseAIResponse(message.content);

            return isUser ? (
              <UserMessage key={message.id} content={message.content} />
            ) : (
              <AIMessage key={message.id} content={text} agentName={agentName} />
            );
          })}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {isLoading && <TypingIndicator />}
        </AnimatePresence>

        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="flex-shrink-0 px-4 sm:px-6 pb-6 pt-2 bg-gradient-to-t from-white via-white to-transparent">
        <ChatInput
          onSend={handleSend}
          disabled={isLoading || hasCompletedProfile}
          isLoading={isLoading}
          placeholder={
            hasCompletedProfile
              ? "Profil complété ! Redirection..."
              : type === "volunteer"
                ? "Parle-moi de toi..."
                : "Décrivez votre besoin..."
          }
        />
      </div>
    </div>
  );
}

export default ChatContainer;
