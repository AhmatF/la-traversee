#!/usr/bin/env python3
"""
Generate the PERFECT hero illustration for La Traversée.
This is the most crucial image - it must capture the essence of the movement.
"""

import os
import time
from pathlib import Path
import requests
from dotenv import load_dotenv

load_dotenv(Path("/Users/ahmat/Desktop/python_scripts/perfectlunettes/.env.local"))
REPLICATE_API_TOKEN = os.getenv("REPLICATE_API_TOKEN")

IMAGES_DIR = Path("/Users/ahmat/Desktop/alteractions-match/public/images")

# THE CRUCIAL HERO PROMPT
# Concept: Human chain crossing together from darkness to light
HERO_PROMPT = """
A powerful editorial illustration of collective resilience and hope.

SCENE: A diverse group of people (8-12 silhouettes) forming a human chain, helping each other cross from left to right. They are holding hands, arms linked, some reaching back to help others forward. The leftmost figures emerge from darker tones, while the rightmost figures step into warm amber/golden light.

COMPOSITION:
- Horizontal movement from left (dark) to right (light/hope)
- Figures in silhouette but with distinct diverse body shapes (different heights, one in wheelchair, children, elderly)
- A clear sense of forward momentum - they are MOVING, not standing
- The golden light on the right suggests dawn/hope/destination
- Some figures look back to help others catch up

STYLE:
- Bold woodcut/linocut aesthetic with strong graphic impact
- High contrast between dark charcoal silhouettes and warm amber/gold light
- Cream background (#FFFDF8)
- NO gradients, NO photorealism - flat graphic style
- Inspired by revolutionary poster art but without text
- Clean, powerful, timeless

MOOD:
- Solidarity - no one left behind
- Determination - forward movement despite difficulty
- Hope - the light ahead is real and achievable
- Urgency - they are in motion, not waiting

CRITICAL:
- ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS
- NO faces visible (silhouettes only)
- The concept of "crossing together" must be immediately clear
- Must work at small sizes (recognizable composition)

This image must instantly communicate: "Together, we can make it through."

Format: 16:9 aspect ratio, high resolution
"""

def generate_image(prompt: str, filename: str) -> bool:
    """Generate image using Replicate nano-banana."""

    if not REPLICATE_API_TOKEN:
        print("ERROR: REPLICATE_API_TOKEN not found")
        return False

    headers = {
        "Authorization": f"Token {REPLICATE_API_TOKEN}",
        "Content-Type": "application/json"
    }

    body = {
        "input": {
            "prompt": prompt,
            "aspect_ratio": "16:9",
            "output_format": "png"
        }
    }

    print(f"Generating {filename}...")
    print("This is the crucial hero image - taking time to get it right...")

    response = requests.post(
        "https://api.replicate.com/v1/models/google/nano-banana/predictions",
        headers=headers,
        json=body
    )

    if response.status_code != 201:
        print(f"ERROR: {response.status_code}")
        return False

    prediction = response.json()
    get_url = prediction['urls']['get']

    for attempt in range(60):
        time.sleep(2)
        status_response = requests.get(get_url, headers=headers)
        status_data = status_response.json()

        if status_data['status'] == 'succeeded':
            image_url = status_data['output']
            if isinstance(image_url, list):
                image_url = image_url[0]

            img_data = requests.get(image_url).content
            output_path = IMAGES_DIR / filename
            with open(output_path, 'wb') as f:
                f.write(img_data)
            print(f"✓ Saved: {filename}")
            return True

        elif status_data['status'] == 'failed':
            print(f"✗ Failed: {status_data.get('error')}")
            return False

        print(f"  Waiting... ({attempt + 1}/60)")

    return False


if __name__ == "__main__":
    print("="*60)
    print("LA TRAVERSÉE - Hero Image Generator")
    print("="*60)
    print("\nConcept: Human chain crossing from darkness to light")
    print("Style: Woodcut/linocut, militant artistic")
    print("Mood: Hope + Action + Solidarity\n")

    success = generate_image(HERO_PROMPT, "hero-traversee.png")

    if success:
        print("\n✓ Hero image generated successfully!")
        print("  Check: /public/images/hero-traversee.png")
    else:
        print("\n✗ Generation failed")
