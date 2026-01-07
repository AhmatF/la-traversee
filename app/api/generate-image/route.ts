import Replicate from "replicate";

export const maxDuration = 120;

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  try {
    const { prompt, aspectRatio = "1:1" } = await req.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!process.env.REPLICATE_API_TOKEN) {
      return new Response(JSON.stringify({ error: "Replicate API token not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Use google/nano-banana model for fast, high-quality image generation
    const output = await replicate.run(
      "google/nano-banana",
      {
        input: {
          prompt: prompt,
          aspect_ratio: aspectRatio,
          num_inference_steps: 4,
          guidance_scale: 2.5,
        }
      }
    );

    // The output is typically an array of image URLs
    const imageUrl = Array.isArray(output) ? output[0] : output;

    return new Response(JSON.stringify({
      success: true,
      imageUrl
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Image generation error:", error);
    return new Response(JSON.stringify({
      error: "Failed to generate image",
      details: String(error)
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
