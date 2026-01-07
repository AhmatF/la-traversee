"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIMessageProps {
  content: string;
  className?: string;
  agentName?: string;
}

export function AIMessage({
  content,
  className,
  agentName = "Conseiller Résilience"
}: AIMessageProps) {
  // Remove JSON blocks from displayed content
  const displayContent = content.replace(/```json[\s\S]*?```/g, "").trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={cn("w-full", className)}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-blue-600" />
        </div>
        <span className="text-sm font-medium text-blue-600">{agentName}</span>
      </div>

      {/* Content card */}
      <div
        className={cn(
          "bg-gray-50 rounded-2xl p-6",
          "border border-gray-200"
        )}
      >
        {/* Text content with markdown styling */}
        <div className="prose prose-gray max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-3 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold text-gray-900 mt-5 mb-2">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="space-y-2 mb-4 last:mb-0">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="space-y-2 mb-4 last:mb-0 list-decimal list-inside">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600 mt-1.5">•</span>
                  <span>{children}</span>
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-blue-700">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="italic text-gray-600">{children}</em>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-blue-500 pl-4 my-4 italic text-gray-600">
                  {children}
                </blockquote>
              ),
            }}
          >
            {displayContent}
          </ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
}

export default AIMessage;
