# Design System Strategy: Nocturnal Engineering

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Architect"**

This design system is not a template; it is a high-fidelity environment. It rejects the "boxy" nature of standard web layouts in favor of an immersive, atmospheric experience that mimics a sophisticated terminal interface seen through a lens of luxury. 

To break the "standard" feel, the system utilizes **Intentional Asymmetry**. Large-scale typography (Display-LG) should often be offset or partially overlapped by glass containers. By using generous negative space and a "void-first" philosophy, we ensure that every line of code and every project tile feels like a curated artifact floating in deep space.

---

## 2. Colors & Surface Philosophy

The palette is anchored in the transition from absolute void to technical luminosity.

*   **Background & Surface:** We utilize `surface` (#131313) and `surface_container_lowest` (#0E0E0E) to establish the base. 
*   **The "No-Line" Rule:** Direct borders are strictly prohibited for sectioning. To separate the Hero section from a Project Grid, transition the background from `surface` to `surface_container_low`. Use tonal shifts to define boundaries.
*   **Surface Hierarchy & Nesting:** 
    *   **Level 0 (The Void):** `surface_container_lowest` for the main background.
    *   **Level 1 (The Canvas):** `surface` for main content areas.
    *   **Level 2 (The Artifact):** `surface_container_high` for cards or code blocks.
*   **The Glass & Gradient Rule:** Interactive elements should utilize a "Dark Glass" effect. Use `surface_variant` at 40% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** Apply a subtle linear gradient to primary actions, moving from `primary_container` (#00F0FF) to `secondary_container` (#3626CE) at a 135-degree angle. This "Electric Indigo-Cyan" bleed provides the "buttery smooth" high-tech soul requested.

---

## 3. Typography: Editorial Technicality

The typography strategy pits the brutalist geometry of Space Grotesk against the utilitarian precision of Monospace.

*   **Display & Headlines (Space Grotesk):** These are your "Editorial" voices. Use `display-lg` for project titles, employing `letter-spacing: -0.04em` to create a dense, premium feel.
*   **Technical Details & Tags (JetBrains Mono/Monospace):** All metadata—labels, timestamps, and git hashes—must use the monospace scale. This reinforces the "Software Engineer" identity.
*   **Body (Inter):** Reserved for readability. Use `body-lg` with a line-height of 1.6 to ensure the "generous negative space" extends into the text blocks themselves.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too heavy for this aesthetic. We use light and transparency to simulate depth.

*   **The Layering Principle:** A `surface_container_highest` (#353534) card placed on a `surface` (#131313) background creates a natural lift. No shadow is required.
*   **Ambient Glows:** For floating elements (like a navigation bar or a featured "Live" tag), use a "Neon Shadow." Instead of black, use `primary` (#DBFCFF) at 8% opacity with a `40px` blur. This simulates a subtle glow from a high-tech console.
*   **The "Ghost Border" Fallback:** If a container requires a edge (e.g., inside a busy image background), use a 1px border of `outline_variant` (#3B494B) at 15% opacity. It should be felt, not seen.
*   **Glassmorphism:** Apply to any element that "hovers" over content. It must use `surface_bright` at 10% opacity with a heavy blur.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary_container` to `secondary_container`), white text (`on_primary_fixed`), `xl` (0.75rem) roundedness.
*   **Secondary:** Ghost style. Transparent background, `outline` (#849495) ghost border at 20% opacity. On hover, increase opacity to 100%.
*   **Tertiary:** Monospace text only, with a `secondary` underline that expands on hover.

### Artifact Cards (Projects)
*   No borders. Background: `surface_container_low`. 
*   Transition: On hover, the background shifts to `surface_container_high` and the `primary` glow shadow activates.
*   Padding: Extra wide (32px or 40px) to maintain the "minimal" luxury feel.

### Code Fragments
*   Background: `surface_container_lowest`.
*   Font: Monospace Scale.
*   Detail: A 2px vertical accent line of `primary` on the left edge to denote "active" code.

### Navigation (The Float)
*   A "floating" pill shape using `full` roundedness.
*   Material: Glassmorphism (`surface_variant` @ 20% + blur).
*   Shadow: Ambient Indigo glow (`secondary_container` @ 10% opacity).

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetric Grids:** Align a heading to the far left (Col 1) but start the body text at Col 5.
*   **Embrace the Dark:** Let 80% of the screen be `surface_container_lowest`. The void is your friend.
*   **Micro-interactions:** Use "buttery" transitions (Ease-in-out, 400ms) for all hover states.

### Don't:
*   **Don't use Dividers:** Never use a `<hr>` or a 1px solid line to separate content. Use a 120px margin or a background color shift.
*   **Don't use Pure White:** Avoid #FFFFFF. Use `on_surface` (#E5E2E1) or `primary` (#DBFCFF) for text to prevent eye strain against the deep black.
*   **Don't Over-glow:** One glowing element per viewport. If everything glows, nothing is important.