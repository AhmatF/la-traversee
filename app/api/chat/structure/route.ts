import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { STRUCTURE_SYSTEM_PROMPT } from "@/lib/prompts";

export const maxDuration = 60;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawMessages: UIMessage[] = body.messages || [];

    if (!rawMessages || rawMessages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = streamText({
      model: google("gemini-3-flash-preview"),
      system: STRUCTURE_SYSTEM_PROMPT,
      messages: await convertToModelMessages(rawMessages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Structure chat error:", error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
