import { useState } from "react";
import SkillShowcase from "./components/SkillShowcase";
import SkillEvaluator from "./components/SkillEvaluator";

export default function App() {
  const [view, setView] = useState("showcase");

  return (
    <div>
      <nav className="sticky top-0 z-40 flex items-center gap-4 border-b border-border bg-background/80 px-6 py-3 backdrop-blur-sm">
        <span className="mr-auto text-sm font-semibold tracking-tight">
          Skill Evaluator
        </span>
        <button
          onClick={() => setView("showcase")}
          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            view === "showcase"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          POC Showcase
        </button>
        <button
          onClick={() => setView("evaluator")}
          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            view === "evaluator"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Prompt Builder
        </button>
      </nav>
      {view === "showcase" ? <SkillShowcase /> : <SkillEvaluator />}
    </div>
  );
}