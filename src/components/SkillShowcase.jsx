/*
  POC: Demonstrates BOTH skills in action
  ────────────────────────────────────────
  ✦ tailwind-design-system → CVA variants, design tokens, cn(), Card compounds
  ✦ frontend-design        → Bold aesthetic, distinctive typography, motion, atmosphere
*/

import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
} from "./ui";

const SKILLS_DATA = [
  {
    name: "Tailwind Design System",
    author: "wshobson/agents",
    badge: "Design Tokens",
    badgeVariant: "default",
    installs: "35.6K",
    features: [
      "CSS-first @theme configuration",
      "OKLCH color tokens",
      "CVA component variants",
      "Dark mode @custom-variant",
    ],
    what: "Structures how you build — tokens, patterns, consistency",
  },
  {
    name: "Frontend Design",
    author: "anthropics/claude-code",
    badge: "Official",
    badgeVariant: "accent",
    installs: "31.6K",
    features: [
      "Design-thinking-first workflow",
      "Anti-AI-slop aesthetics",
      "Bold typography & color",
      "Motion & spatial composition",
    ],
    what: "Guides how things look — bold, distinctive, memorable",
  },
];

export default function SkillShowcase() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Atmospheric grain overlay — from frontend-design skill */}
        <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

        <div className="relative mx-auto max-w-4xl px-6 py-16">
          {/* ── Header ── */}
          <header className="mb-16">
            <div className="flex items-start justify-between">
              <div>
                <p
                  className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Copilot Skills POC
                </p>
                <h1 className="text-5xl font-bold tracking-tight leading-[1.1]">
                  Skills make AI output{" "}
                  <span className="text-primary">actually good.</span>
                </h1>
                <p className="mt-4 max-w-xl text-lg text-muted-foreground leading-relaxed">
                  Two open-source skill files that transform generic AI code into
                  production-grade, design-system-aware, aesthetically bold
                  interfaces.
                </p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="mt-2 rounded-lg border border-border px-3 py-2 text-sm transition-colors hover:bg-secondary"
                aria-label="Toggle dark mode"
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>
          </header>

          {/* ── Skill cards grid ── */}
          <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SKILLS_DATA.map((skill, i) => (
              <Card
                key={skill.name}
                className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />

                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge variant={skill.badgeVariant}>{skill.badge}</Badge>
                    <span
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {skill.installs} installs
                    </span>
                  </div>
                  <CardTitle className="text-xl">{skill.name}</CardTitle>
                  <CardDescription>{skill.author}</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="mb-4 text-sm font-medium text-foreground/80">
                    {skill.what}
                  </p>
                  <ul className="space-y-2">
                    {skill.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 block size-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View on skills.sh
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* ── How integration works ── */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              How it works with Copilot
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Add skill instructions",
                  desc: "Place SKILL.md content into .github/copilot-instructions.md or prompt files",
                },
                {
                  step: "02",
                  title: "Write your prompt",
                  desc: "Ask Copilot to build a component — it now follows the skill's patterns automatically",
                },
                {
                  step: "03",
                  title: "Get better output",
                  desc: "Copilot produces design-system-aware, aesthetically bold code instead of generic slop",
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:bg-secondary/50"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="mb-3 text-3xl font-bold text-primary/20"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {item.step}
                  </div>
                  <h3 className="mb-1 text-sm font-semibold">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Component demo ── */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              Component demo{" "}
              <span className="text-muted-foreground font-normal text-base">
                — built with both skills
              </span>
            </h2>
            <Card className="p-8">
              <div className="flex flex-wrap gap-3 mb-6">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </Card>
          </section>

          {/* ── Files created ── */}
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight">
              What was set up
            </h2>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              {[
                {
                  file: ".github/copilot-instructions.md",
                  role: "Auto-loaded by Copilot — contains both skill rules",
                },
                {
                  file: ".github/prompts/tailwind-component.prompt.md",
                  role: "Reusable prompt file for Tailwind component generation",
                },
                {
                  file: ".github/prompts/frontend-design.prompt.md",
                  role: "Reusable prompt file for bold frontend design",
                },
                {
                  file: "src/index.css",
                  role: "@theme tokens, OKLCH colors, dark mode, animations",
                },
                {
                  file: "src/components/ui.jsx",
                  role: "CVA Button, Card compounds, Badge — skill patterns",
                },
                {
                  file: "src/lib/utils.js",
                  role: "cn() utility — clsx + tailwind-merge",
                },
              ].map((item, i) => (
                <div
                  key={item.file}
                  className={`flex items-start gap-4 px-5 py-3.5 ${
                    i > 0 ? "border-t border-border" : ""
                  }`}
                >
                  <code
                    className="flex-shrink-0 text-xs text-primary"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {item.file}
                  </code>
                  <span className="text-xs text-muted-foreground">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
