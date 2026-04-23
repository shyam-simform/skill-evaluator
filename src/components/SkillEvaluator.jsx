// src/components/SkillEvaluator.jsx
import { useState } from "react";
import SKILLS from "../skills";

export default function SkillEvaluator() {
  const [selectedSkill, setSelectedSkill] = useState("tailwind");
  const [userPrompt, setUserPrompt] = useState("");
  const [copied, setCopied] = useState(false);

  const skill = SKILLS[selectedSkill];

  // Builds the full message the user will paste into Copilot Chat
  const buildCopilotMessage = () => {
    return `## Skill: ${skill.name}
## Source: ${skill.source}

### System context (apply this to your response):
${skill.systemPrompt}

---

### My request:
${userPrompt}`;
  };

  const handleCopy = () => {
    if (!userPrompt.trim()) return;
    navigator.clipboard.writeText(buildCopilotMessage()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleOpenCopilot = () => {
    // Copies first, then user opens Copilot Chat manually
    handleCopy();
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: "0 20px" }}>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 4 }}>
          Skill evaluator — Copilot edition
        </h1>
        <p style={{ fontSize: 14, color: "#666" }}>
          Pick a skill, write your prompt, copy the combined message → paste into Copilot Chat
        </p>
      </div>

      {/* Skill selector cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 24 }}>
        {Object.values(SKILLS).map((s) => (
          <div
            key={s.id}
            onClick={() => setSelectedSkill(s.id)}
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              border: selectedSkill === s.id ? "2px solid #000" : "1px solid #e0e0e0",
              background: selectedSkill === s.id ? "#000" : "#fff",
              color: selectedSkill === s.id ? "#fff" : "#1a1a1a",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.6, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {s.badge}
            </div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>{s.name}</div>
          </div>
        ))}
      </div>

      {/* Skill detail card */}
      <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
        <div style={{ fontSize: 12, color: "#999", marginBottom: 6, fontFamily: "monospace" }}>
          {skill.source}
        </div>
        <p style={{ fontSize: 14, color: "#444", lineHeight: 1.6, marginBottom: 14 }}>
          {skill.description}
        </p>
        <div style={{ background: "#f5f5f3", borderRadius: 8, padding: "12px 14px" }}>
          <div style={{ fontSize: 11, color: "#999", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            System prompt preview
          </div>
          <pre style={{ fontSize: 12, color: "#333", lineHeight: 1.6, whiteSpace: "pre-wrap", margin: 0 }}>
            {skill.systemPrompt}
          </pre>
        </div>
      </div>

      {/* Prompt input */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 13, fontWeight: 500, display: "block", marginBottom: 8 }}>
          Your prompt
        </label>
        <textarea
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          placeholder="e.g. Build a pricing card component with 3 tiers using Tailwind..."
          style={{
            width: "100%",
            minHeight: 100,
            padding: "10px 12px",
            fontSize: 13,
            borderRadius: 8,
            border: "1px solid #ddd",
            resize: "vertical",
            lineHeight: 1.6,
            background: "#fff",
          }}
        />
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        <button
          onClick={handleCopy}
          disabled={!userPrompt.trim()}
          style={{
            padding: "10px 20px",
            background: copied ? "#22c55e" : "#000",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            cursor: userPrompt.trim() ? "pointer" : "not-allowed",
            opacity: userPrompt.trim() ? 1 : 0.4,
            transition: "all 0.15s",
          }}
        >
          {copied ? "Copied!" : "Copy Copilot message"}
        </button>
        <button
          onClick={() => setUserPrompt("")}
          style={{
            padding: "10px 16px",
            background: "transparent",
            color: "#666",
            border: "1px solid #ddd",
            borderRadius: 8,
            fontSize: 13,
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      </div>

      {/* Instructions panel */}
      <div style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: 12, padding: "16px 20px" }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14 }}>
          How to use with Copilot Chat
        </div>
        {[
          { step: "1", text: 'Pick a skill above and write your prompt' },
          { step: "2", text: 'Click "Copy Copilot message" — it copies the skill + your prompt together' },
          { step: "3", text: 'Open Copilot Chat in VS Code sidebar (Ctrl+Shift+I)' },
          { step: "4", text: 'Paste (Ctrl+V) into the Copilot Chat input and press Enter' },
          { step: "5", text: 'Copilot responds with skill-aware, context-rich output' },
        ].map(({ step, text }) => (
          <div key={step} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%", background: "#000", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 600, flexShrink: 0, marginTop: 1
            }}>
              {step}
            </div>
            <span style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>{text}</span>
          </div>
        ))}
      </div>

    </div>
  );
}