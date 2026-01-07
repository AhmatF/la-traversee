import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { VOLUNTEER_SYSTEM_PROMPT, STRUCTURE_SYSTEM_PROMPT } from "@/lib/prompts";

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: UIMessage[] = body.messages || [];
    const chatType: string = body.chatType || "volunteer";

    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Select appropriate system prompt
    const systemPrompt = chatType === "structure"
      ? STRUCTURE_SYSTEM_PROMPT
      : VOLUNTEER_SYSTEM_PROMPT;

    const result = streamText({
      model: google("gemini-3-flash-preview"),
      system: systemPrompt,
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
