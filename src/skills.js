// src/skills.js
const SKILLS = {
  tailwind: {
    id: "tailwind",
    name: "Tailwind design system",
    source: "skills.sh/wshobson/agents/tailwind-design-system",
    badge: "Design",
    description:
      "Provides structured guidance for building consistent, scalable UI using Tailwind CSS. Includes token definitions, component patterns, responsive grid rules, and dark mode conventions.",
    systemPrompt: `You are a UI engineer expert in Tailwind CSS design systems.
Apply consistent tokens, spacing, typography, and component patterns.
Always use Tailwind utility classes. Avoid inline styles.
Produce clean, readable, well-structured code.`,
  },
  frontend: {
    id: "frontend",
    name: "Frontend design (Claude Code)",
    source: "skills.sh/anthropics/claude-code/frontend-design",
    badge: "Official",
    description:
      "Anthropic's official frontend design skill. Focuses on production-grade, distinctive UI — enforces bold aesthetic choices, avoiding generic AI-style output. Covers typography, motion, layout, and color systems.",
    systemPrompt: `You create distinctive, production-grade frontend interfaces.
Avoid generic AI aesthetics. Make bold, intentional design choices.
Pick a clear aesthetic direction and execute it with precision.
Prefer React + Tailwind. Be concise and practical.`,
  },
  both: {
    id: "both",
    name: "Both skills combined",
    source: "tailwind + frontend-design",
    badge: "Combined",
    description:
      "Combines the Tailwind design system structure with the frontend design aesthetic principles for maximum output quality.",
    systemPrompt: `You are a UI engineer expert in Tailwind CSS AND distinctive frontend design.
Apply Tailwind utility classes with bold, intentional aesthetic choices.
Avoid generic AI aesthetics. Follow design system tokens and spacing rules.
Be concise, practical, and produce production-ready React components.`,
  },
};

export default SKILLS;