import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { VOLUNTEER_SYSTEM_PROMPT, STRUCTURE_SYSTEM_PROMPT } from "@/lib/prompts";

export const maxDuration = 60;

export async function POST(req: Request) {
  const body = await req.json();
  const { messages, chatType = "volunteer" }: { messages: UIMessage[]; chatType?: string } = body;

  // Select appropriate system prompt
  const systemPrompt = chatType === "structure"
    ? STRUCTURE_SYSTEM_PROMPT
    : VOLUNTEER_SYSTEM_PROMPT;

  const result = streamText({
    model: google("gemini-2.0-flash"),
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
