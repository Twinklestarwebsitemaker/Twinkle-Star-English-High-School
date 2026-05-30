# Design Brief

## Direction

Bold Institutional Blue + Red — deep royal blue primary for trust and authority, vivid red accent for energy and action. Modern school branding clarity.

## Tone

Professional, energetic, approachable; blue conveys institutional confidence and trust, red conveys urgency and call-to-action energy.

## Differentiation

Deep royal blue primary (0.42 0.18 250) paired with vivid red accent (0.50 0.22 25) creates distinctive school identity without generic clichés; clean Space Grotesk + Figtree reinforces modern institutional voice.

## Color Palette

| Token      | OKLCH             | Role                                 |
| ---------- | ----------------- | ------------------------------------ |
| background | 0.98 0.008 230    | Clean off-white, primary surface     |
| foreground | 0.18 0.015 230    | Deep cool text                       |
| card       | 1.0 0.004 230     | Elevated surfaces, headers, footers  |
| primary    | 0.42 0.18 250     | Deep royal blue (trust/navigation)   |
| secondary  | 0.95 0.01 230     | Subtle backgrounds                   |
| accent     | 0.50 0.22 25      | Vivid red (CTAs/highlights)          |
| muted      | 0.94 0.01 230     | Disabled/faded elements              |

## Typography

- Display: Space Grotesk — hero, section headings, prominent labels
- Body: Figtree — paragraphs, UI labels, navigation
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base`

## Elevation & Depth

Subtle shadow hierarchy: cards use `shadow-subtle`, interactive elements on hover use `shadow-elevated`; no borders except section dividers and footer top.

## Structural Zones

| Zone    | Background                    | Border              | Notes                                              |
| ------- | ----------------------------- | ------------------- | -------------------------------------------------- |
| Header  | primary (0.42 0.18 250)       | —                   | Blue background, white nav text, red highlights   |
| Hero    | card + blue tinted overlay    | —                   | White/light background with blue text overlay     |
| Content | background (0.98)             | —                   | Alternating card sections every other block       |
| Section | secondary (0.95 0.01 230)     | —                   | Subtle background for visual rhythm               |
| Footer  | primary (0.42 0.18 250)       | border-t primary    | Blue background, white text, red accent highlights |

## Spacing & Rhythm

Spacious 4–6 rem gaps between sections; 1.5 rem card padding; 2 rem hero text margins; micro-spacing via 0.75–1.5 rem for content grouping.

## Component Patterns

- Buttons: primary blue (bg-primary text-primary-foreground), accent red on CTAs (bg-accent text-accent-foreground), secondary muted; rounded-md (8px), 2.5 rem height
- Cards: rounded-md, shadow-subtle, white (card), hover:shadow-elevated transition-smooth
- Badges: pill (rounded-full), primary/accent/muted backgrounds, uppercase text-xs
- Links: blue text, red underline on hover

## Motion

- Entrance: fade-in 300ms on page load for hero + cards
- Hover: transition-smooth (300ms) on buttons/cards, shadow elevation, text color shift to red on accent actions
- Decorative: subtle floating animation on hero image (10px, 3s loop)

## Constraints

- No gradients; use layered elevation and solid color blocks
- Maintain AA+ contrast across light/dark modes
- Use semantic tokens exclusively; no arbitrary hex colors
- Red accent used sparingly for maximum impact on CTAs

## Signature Detail

Deep royal blue primary + vivid red accent on clean white foundation creates distinctive school identity with professional authority; blue conveys trust and institutional confidence while red energizes calls to action.
