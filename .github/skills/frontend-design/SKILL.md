# Frontend Design

Create distinctive, production-grade frontend interfaces that avoid generic "AI slop"
aesthetics. Implement real working code with exceptional attention to aesthetic details
and creative choices.

## When to Use This Skill

- Building any user-facing interface or component
- Creating landing pages, dashboards, or marketing sites
- When output needs to look hand-crafted, not AI-generated
- Designing with distinctive visual identity requirements

## Design Thinking

**BEFORE writing any code**, establish these four pillars:

1. **Purpose**: What problem does this interface solve? Who uses it?
2. **Tone**: Pick a BOLD aesthetic direction:
   - Brutally minimal
   - Maximalist chaos
   - Retro-futuristic
   - Organic / natural
   - Luxury / refined
   - Playful / toy-like
   - Editorial / magazine
   - Brutalist / raw
   - Art deco / geometric
   - Soft / pastel
   - Industrial / utilitarian
3. **Constraints**: Technical requirements (framework, performance, accessibility)
4. **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone
   will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold
maximalism and refined minimalism both work — the key is **intentionality**, not intensity.

## Typography

- Choose fonts that are **beautiful, unique, and interesting**
- NEVER use generic fonts: Inter, Arial, Roboto, system fonts
- Pair a **distinctive display font** with a **refined body font**
- Use unexpected, characterful font choices that elevate the design
- Consider font weight contrast, letter-spacing, and line-height as design tools

### Good Font Examples (vary these — never converge on one)
- Display: Clash Display, Cabinet Grotesk, Satoshi, General Sans, Switzer
- Body: DM Sans, Plus Jakarta Sans, Outfit, Manrope
- Mono: JetBrains Mono, Space Mono, IBM Plex Mono
- Serif: Playfair Display, Fraunces, Lora

## Color & Theme

- Commit to a **cohesive aesthetic** with CSS variables for consistency
- Use **dominant colors with sharp accents** — not timid, evenly-distributed palettes
- Define color intent: what does each color *mean* in this interface?
- Use OKLCH for perceptually uniform color scales
- Consider: monochromatic with one accent? Complementary? Analogous?

### Anti-Patterns (NEVER do these)
- Purple gradients on white backgrounds (the #1 AI cliché)
- Generic blue-to-purple hero sections
- Identical color weight across all elements
- Default Tailwind color palette without customization

## Motion & Animation

- **Prioritize high-impact moments**: one well-orchestrated page load with staggered
  reveals (`animation-delay`) creates more delight than scattered micro-interactions
- Focus areas:
  - Page load: staggered fade-in/slide-up for content blocks
  - Scroll triggers: elements animating in as they enter viewport
  - Hover states: surprising, satisfying feedback
  - State transitions: smooth morphing between states
- Use CSS-only solutions when possible
- Use Motion library (framer-motion) for React when available

## Spatial Composition & Layout

- **Unexpected layouts**: asymmetry, overlap, diagonal flow, grid-breaking elements
- Choose between **generous negative space** OR **controlled density** — commit to one
- Use overlap and z-index layering for depth
- Break the grid intentionally for visual hierarchy
- Consider: what draws the eye first? Second? Third?

## Backgrounds & Visual Details

Create **atmosphere and depth** rather than defaulting to solid colors:
- Gradient meshes (multi-stop gradients at various angles)
- Noise/grain textures (SVG filters or CSS)
- Geometric patterns (dots, lines, grids)
- Layered transparencies
- Dramatic shadows (large, colored, offset)
- Decorative borders and dividers
- Custom cursors where appropriate

## Absolute Rules

**NEVER produce:**
- Overused fonts (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (especially purple gradients on white)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character
- Generic card-grid layouts without visual hierarchy
- Default border-radius and shadow values everywhere

**ALWAYS produce:**
- Visually striking and memorable interfaces
- Cohesive design with a clear aesthetic point-of-view
- Meticulous refinement in every detail
- Production-grade, functional code
- Designs that look **intentionally crafted**, not generated

## Implementation Guidance

**Match code complexity to aesthetic vision:**
- Maximalist designs → elaborate code, extensive animations, layered effects
- Minimalist designs → restraint, precision, careful spacing/typography/subtle details
- Elegance comes from executing the vision well, not from adding more

**Interpret creatively:**
- No two designs should look the same
- Vary between light and dark themes
- Vary fonts, aesthetics, color approaches
- NEVER converge on common choices across generations
