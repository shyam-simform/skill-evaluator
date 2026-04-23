# Copilot Custom Instructions

## Skills

This project uses two skills from skills.sh. Their full SKILL.md files are in `.github/skills/`.
Read the relevant SKILL.md before generating code for that domain.

| Skill                    | Path                                                  | When to use                                    |
| ------------------------ | ----------------------------------------------------- | ---------------------------------------------- |
| Tailwind Design System   | `.github/skills/tailwind-design-system/SKILL.md`      | Building components, tokens, theming, dark mode |
| Frontend Design          | `.github/skills/frontend-design/SKILL.md`             | Any user-facing UI — aesthetics, layout, motion |

## Quick Rules (always apply)

### Tailwind Design System (v4)
- Use `@theme` in CSS for configuration instead of `tailwind.config.ts`
- Use `@import "tailwindcss"` instead of `@tailwind` directives
- Use `@custom-variant dark (&:where(.dark, .dark *))` for dark mode
- Define colors using OKLCH color space for better perception
- Use CVA (class-variance-authority) for component variants
- Use the `cn()` utility (clsx + tailwind-merge) for class merging
- Follow token hierarchy: Brand → Semantic → Component
- No forwardRef needed in React 19 — ref is a regular prop

### Frontend Design Aesthetics
- Before coding, establish: Purpose, Tone, Constraints, Differentiation
- Typography: Use distinctive fonts, avoid generic ones (Inter, Arial, Roboto)
- Color: Commit to a cohesive palette with CSS variables; dominant colors with sharp accents
- Motion: Prioritize high-impact moments — staggered reveals, scroll triggers, hover surprises
- Layout: Use asymmetry, overlap, diagonal flow, grid-breaking elements, generous whitespace
- NEVER use: overused fonts, cliché purple gradients, predictable component patterns
- Match implementation complexity to aesthetic vision
