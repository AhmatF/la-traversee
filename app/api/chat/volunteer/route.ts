import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { VOLUNTEER_SYSTEM_PROMPT } from "@/lib/prompts";

export const maxDuration = 60;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawMessages: ChatMessage[] = body.messages || [];

    if (!rawMessages || rawMessages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = streamText({
      model: google("gemini-3-flash-preview"),
      system: VOLUNTEER_SYSTEM_PROMPT,
      messages: rawMessages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Volunteer chat error:", error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
