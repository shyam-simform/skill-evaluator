---
mode: 'agent'
description: 'Build a Tailwind v4 component using the design system skill'
---

Read the skill file at `.github/skills/tailwind-design-system/SKILL.md` first,
then apply all its patterns to this request:

{{{ input }}}
---
mode: 'agent'
description: 'Build a Tailwind v4 component with the design system skill patterns'
---

## Context
You are using the **Tailwind Design System v4** skill. Follow these patterns:

### Rules
- Use `@theme` CSS-first configuration with OKLCH colors
- Use CVA (class-variance-authority) for variant-driven components
- Use `cn()` from clsx + tailwind-merge for class merging
- Follow design token hierarchy: Brand → Semantic → Component
- Build accessible components with ARIA attributes and focus rings
- Use React 19 patterns (ref as prop, no forwardRef)

### Component Structure
```
Base styles → Variants → Sizes → States → Overrides
```

### Example
```jsx
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-border bg-background hover:bg-accent',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)
```

{{{ input }}}
