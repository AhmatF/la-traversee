#!/usr/bin/env python3
"""
Image Generator for La Traversée
Generates artistic illustrations using nano-banana via Replicate API.
Style: Militant/combat artistic style, NO TEXT whatsoever.
"""

import os
import time
import json
from datetime import datetime
from pathlib import Path

import requests
from dotenv import load_dotenv

# Load environment variables from perfectlunettes (shared API key)
load_dotenv(Path("/Users/ahmat/Desktop/python_scripts/perfectlunettes/.env.local"))

REPLICATE_API_TOKEN = os.getenv("REPLICATE_API_TOKEN")

# Paths
BASE_DIR = Path(__file__).parent.parent
IMAGES_DIR = BASE_DIR / "public" / "images"
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

# ============================================
# STYLE TEMPLATE - MILITANT ARTISTIC (NO TEXT!)
# ============================================

IMAGE_STYLE_TEMPLATE = '''Artistic illustration for a French civic resistance movement.

Subject: {subject}

CRITICAL REQUIREMENTS:
- ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO NUMBERS, NO LOGOS, NO TYPOGRAPHY
- This is a PURE VISUAL ILLUSTRATION only
- No signs, banners with writing, or any readable elements

Style requirements:
- MILITANT ARTISTIC STYLE: bold, powerful, evocative
- Inspired by: revolutionary art, woodcut prints, linocut, political poster aesthetics (but WITHOUT text)
- Strong graphic compositions with clear silhouettes
- Color palette: warm cream (#FFFBF5) background, charcoal black (#1c1917), amber/gold (#f59e0b) accents
- High contrast, bold shapes, dramatic compositions
- Can include: people silhouettes, symbolic objects, abstract shapes, nature elements
- Mood: hope, resistance, collective action, determination, solidarity

DO NOT include any text, letters, numbers, words, or typography of any kind.
The image should communicate through VISUALS ONLY.

Format: {aspect_ratio}
'''

# ============================================
# IMAGES TO GENERATE (NO TEXT VERSIONS)
# ============================================

IMAGES_TO_GENERATE = [
    # Logo - simple geometric symbol
    {
        "id": "logo",
        "filename": "logo.png",
        "aspect_ratio": "1:1",
        "subject": """A bold geometric logo symbol for a civic movement called 'La Traversée' (The Crossing).

Design: Abstract symbol suggesting crossing/journey together.
Ideas:
- Two or three diagonal parallel lines crossing a horizontal bar
- Abstract arrow pointing forward/upward
- Stylized horizon with rising sun element
- Compass-like directional symbol

Colors: Charcoal black (#1c1917) main shape, amber (#f59e0b) accent element.
Style: Bold, minimal, could work as a stamp or brand mark.
ABSOLUTELY NO LETTERS OR TEXT - just a pure geometric symbol."""
    },

    # Hero - people facing horizon
    {
        "id": "hero",
        "filename": "hero-traversee.png",
        "aspect_ratio": "16:9",
        "subject": """A diverse group of people (silhouettes) standing together, facing a bright horizon with rising sun.

Scene: Dawn breaking, golden light on the horizon. People of different heights and shapes standing shoulder to shoulder, seen from behind, looking toward the light.

Style: Woodcut/linocut aesthetic, strong black silhouettes against warm amber/gold sunrise.
Mood: Hope, collective journey, new beginning, solidarity.
NO TEXT - pure visual storytelling."""
    },

    # Manifeste - hands building together
    {
        "id": "manifeste",
        "filename": "manifeste.png",
        "aspect_ratio": "16:9",
        "subject": """Multiple hands working together to build or construct something.

Scene: Abstract composition of diverse hands (different skin tones suggested by shading) assembling geometric blocks or shapes, suggesting collaborative construction.

Style: Bold graphic illustration, hands as central element.
Mood: Collective action, agency, building together, meaningful work.
NO TEXT - visual metaphor of cooperation."""
    },

    # Constat - pressure/constraint visualization
    {
        "id": "constat",
        "filename": "constat.png",
        "aspect_ratio": "16:9",
        "subject": """Abstract visualization of pressure or constraint on civil society.

Scene: Geometric shapes being compressed from multiple directions, or a figure/group standing firm against pressing forces. Could show arrows pointing inward, walls closing in, but with a central element that resists.

Style: Dramatic, tension-filled composition.
Colors: More charcoal/grey tones with touches of amber as hope.
Mood: Pressure exists but resistance is possible.
NO TEXT - express tension through shapes and composition."""
    },

    # Histoires - connected resistance points
    {
        "id": "histoires",
        "filename": "histoires-resistance.png",
        "aspect_ratio": "16:9",
        "subject": """Abstract representation of connected resistance movements across different places.

Scene: Multiple fists raised (or symbolic flames/torches) connected by lines or threads, suggesting a network of solidarity. Different nodes connected across the composition.

Style: Network/constellation aesthetic, bold graphic shapes.
Mood: International solidarity, shared struggle, connected hope.
NO TEXT - visual metaphor of global connection."""
    },

    # Espoir - crowd with highlighted minority
    {
        "id": "espoir",
        "filename": "espoir-35.png",
        "aspect_ratio": "16:9",
        "subject": """A crowd of people represented as dots or small figures, with a small percentage (about 3-4%) highlighted in amber/gold color while the rest are in grey/black.

Scene: Visual representation of critical mass - showing that only a small portion of a large group needs to act to create change.

Style: Abstract crowd visualization, data-art inspired.
Mood: Achievable goal, power of the few, hope through numbers.
NO TEXT - the visual ratio tells the story."""
    },

    # Trois Piliers - three symbolic elements
    {
        "id": "piliers",
        "filename": "trois-piliers.png",
        "aspect_ratio": "16:9",
        "subject": """Three distinct symbolic elements representing PROTECT (red), CONTAIN (amber), PREPARE (green).

Scene: Three bold symbols or abstract shapes:
- Left (red): Shield or protective barrier shape
- Center (amber): Wall or containment structure
- Right (green): Seed/sprout or growing plant

Style: Bold iconic symbols, clean separation but unified composition.
Mood: Strategic pillars of action, organized resistance.
NO TEXT - pure symbolic representation."""
    },

    # Types de Missions - 6 symbolic icons
    {
        "id": "missions",
        "filename": "types-missions.png",
        "aspect_ratio": "16:9",
        "subject": """Six abstract icons representing different types of volunteer missions arranged in a grid.

Icons (simple, bold shapes):
- Legal/scales of justice symbol
- Megaphone/communication symbol
- Chess piece or lightbulb for strategy
- Data/graph bars symbol
- Hands helping/field support symbol
- Open book for training/formation

Style: Icon set aesthetic, consistent weight and style across all six.
Mood: Diversity of roles, everyone has skills to contribute.
NO TEXT - pure iconographic representation."""
    },

    # CTA - invitation/open door
    {
        "id": "cta",
        "filename": "cta-final.png",
        "aspect_ratio": "16:9",
        "subject": """An open door or gateway with warm light streaming through, inviting entry.

Scene: Dark space with a doorway opening to bright amber/golden light. Could show silhouettes of people walking through or hands reaching toward the light.

Style: Dramatic light contrast, invitation imagery.
Mood: Welcome, belonging, the moment of joining.
NO TEXT - visual invitation."""
    },

    # Comprendre - France under pressure
    {
        "id": "comprendre",
        "filename": "comprendre-situation.png",
        "aspect_ratio": "16:9",
        "subject": """Abstract representation of civic space narrowing in France.

Scene: Hexagonal shape (France) with pressure indicators - arrows pointing inward, or the shape being squeezed. But with cracks of light/resistance showing through.

Style: Graphic, symbolic, informative without being alarmist.
Mood: Understanding the situation, reality check.
NO TEXT - visual metaphor of compression."""
    },

    # Exemples internationaux - world map with nodes
    {
        "id": "exemples",
        "filename": "exemples-internationaux.png",
        "aspect_ratio": "16:9",
        "subject": """Abstract world map or globe with highlighted nodes representing different countries' civic struggles.

Scene: Stylized map with 4-5 glowing points (Russia, Hungary, Poland, USA, Brazil areas) connected by thin lines. Some nodes brighter than others.

Style: Abstract cartography, network visualization.
Mood: Learning from others, global perspective.
NO TEXT - geographic visual."""
    },

    # Plan d'action - timeline/roadmap
    {
        "id": "plan",
        "filename": "plan-action.png",
        "aspect_ratio": "16:9",
        "subject": """Abstract timeline or roadmap showing progression through phases.

Scene: A path or road starting from left (darker) moving toward right (brighter), with markers or milestones along the way. Could show phases as stepping stones or ascending steps.

Style: Journey visualization, progression metaphor.
Mood: Organized approach, strategic planning, moving forward.
NO TEXT - visual pathway."""
    },

    # Ressources - toolkit
    {
        "id": "ressources",
        "filename": "ressources-outils.png",
        "aspect_ratio": "16:9",
        "subject": """Collection of tools and resources arranged as a toolkit.

Scene: Abstract tools (wrench, hammer, pen, book, shield, magnifying glass) arranged in an organized grid or toolbox composition.

Style: Technical illustration meets artistic composition.
Mood: Empowerment through preparation, practical tools.
NO TEXT - visual toolkit."""
    },
]

# ============================================
# IMAGE GENERATION FUNCTION
# ============================================

def generate_image(prompt: str, filename: str, aspect_ratio: str = "16:9") -> bool:
    """Generate image using Replicate nano-banana."""

    if not REPLICATE_API_TOKEN:
        print("ERROR: REPLICATE_API_TOKEN not found in environment")
        return False

    headers = {
        "Authorization": f"Token {REPLICATE_API_TOKEN}",
        "Content-Type": "application/json"
    }

    body = {
        "input": {
            "prompt": prompt,
            "aspect_ratio": aspect_ratio,
            "output_format": "png"
        }
    }

    print(f"  Starting generation for {filename}...")

    # Start prediction
    response = requests.post(
        "https://api.replicate.com/v1/models/google/nano-banana/predictions",
        headers=headers,
        json=body
    )

    if response.status_code != 201:
        print(f"  ERROR starting prediction: {response.status_code}")
        print(f"  {response.text}")
        return False

    prediction = response.json()
    get_url = prediction['urls']['get']

    # Poll for result
    max_attempts = 60
    for attempt in range(max_attempts):
        time.sleep(2)
        status_response = requests.get(get_url, headers=headers)
        status_data = status_response.json()

        if status_data['status'] == 'succeeded':
            image_url = status_data['output']
            if isinstance(image_url, list):
                image_url = image_url[0]

            # Download image
            img_data = requests.get(image_url).content
            output_path = IMAGES_DIR / filename
            with open(output_path, 'wb') as f:
                f.write(img_data)
            print(f"  ✓ Image saved: {filename}")
            return True

        elif status_data['status'] == 'failed':
            print(f"  ✗ Generation failed: {status_data.get('error', 'Unknown error')}")
            return False

        print(f"    Waiting... ({attempt + 1}/{max_attempts})")

    print("  ✗ Generation timed out")
    return False


def generate_all_images(ids: list = None, dry_run: bool = False):
    """Generate all images or specific ones by ID."""

    images = IMAGES_TO_GENERATE
    if ids:
        images = [img for img in images if img['id'] in ids]

    if not images:
        print("No images to generate")
        return

    print(f"\n{'='*60}")
    print(f"La Traversée - Image Generator")
    print(f"Style: Militant Artistic - NO TEXT")
    print(f"{'='*60}")
    print(f"\nGenerating {len(images)} images...\n")

    results = {"success": [], "failed": []}

    for img in images:
        print(f"\n[{img['id']}] {img['filename']}")
        print(f"  Aspect ratio: {img['aspect_ratio']}")

        # Build full prompt
        full_prompt = IMAGE_STYLE_TEMPLATE.format(
            subject=img['subject'],
            aspect_ratio=img['aspect_ratio']
        )

        if dry_run:
            print(f"  [DRY RUN] Would generate with prompt:")
            print(f"  {img['subject'][:100]}...")
            results["success"].append(img['id'])
            continue

        success = generate_image(full_prompt, img['filename'], img['aspect_ratio'])

        if success:
            results["success"].append(img['id'])
        else:
            results["failed"].append(img['id'])

        # Rate limiting
        time.sleep(3)

    # Summary
    print(f"\n{'='*60}")
    print(f"Generation Complete!")
    print(f"  Success: {len(results['success'])}")
    print(f"  Failed: {len(results['failed'])}")
    if results['failed']:
        print(f"  Failed IDs: {', '.join(results['failed'])}")
    print(f"{'='*60}\n")


def main():
    """Main function."""
    import argparse

    parser = argparse.ArgumentParser(description='Generate images for La Traversée')
    parser.add_argument('--dry-run', action='store_true', help='Preview without generating')
    parser.add_argument('--id', type=str, nargs='+', help='Generate specific image(s) by ID')
    parser.add_argument('--list', action='store_true', help='List all available images')
    parser.add_argument('--logo-only', action='store_true', help='Generate only the logo')
    args = parser.parse_args()

    if args.list:
        print("\nAvailable images:")
        print("-" * 60)
        for img in IMAGES_TO_GENERATE:
            print(f"  {img['id']:15s} | {img['aspect_ratio']:5s} | {img['filename']}")
        return

    if args.logo_only:
        generate_all_images(ids=['logo'], dry_run=args.dry_run)
        return

    generate_all_images(ids=args.id, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
