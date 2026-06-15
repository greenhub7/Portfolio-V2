# Requirements Document

## Introduction

Redesign the Experience page (`src/pages/ExperiencePage.tsx`) into a rich, game-like interactive experience. The page currently shows 4 companies on a horizontal timeline with logo cards and a detail panel. The redesign transforms it into a deep-space themed, gamified career journey with animated company tabs, 3D flip cards, per-company project panels, a career progress bar, milestone achievement animations, and parallax depth effects — all built with React, TypeScript, Framer Motion, and Tailwind CSS.

## Glossary

- **ExperiencePage**: The React page component at `src/pages/ExperiencePage.tsx`
- **CompanyTab**: A clickable horizontal tab representing one employer, displaying the company logo and name
- **ActiveTab**: The currently selected CompanyTab
- **FlipCard**: A card that performs a 3D Y-axis rotation to reveal its back face on click
- **ProjectCard**: A card showing a project's title, description, tech tags, and a key metric
- **ProgressBar**: A horizontal bar at the top of the page that fills proportionally as the user selects companies
- **MilestoneToast**: A temporary overlay notification shown when a significant career moment is first unlocked
- **ParallaxLayer**: A scrollable container whose child elements translate at different rates relative to scroll position
- **TimelinePath**: An animated SVG path connecting the CompanyTabs horizontally
- **GlowEffect**: A CSS box-shadow or drop-shadow using the company's accent color
- **TooltipPreview**: A small floating popup shown on project card hover containing a short summary
- **LockIcon**: A padlock SVG icon shown on CompanyTabs that have not yet been visited
- **UnlockAnimation**: A particle burst or glow flash played when a locked CompanyTab is first clicked
- **AccentColor**: A per-company color used for glows, borders, and highlights
- **DeepSpaceBackground**: The dark background using `/experience.png` with ambient radial gradient overlays

---

## Requirements

### Requirement 1: Career Progress Bar

**User Story:** As a visitor, I want to see a progress bar that fills as I explore each company, so that I feel a sense of progression through the career journey.

#### Acceptance Criteria

1. THE ExperiencePage SHALL render a ProgressBar at the top of the content area, above the company tabs.
2. THE ProgressBar SHALL display fill percentage as `(number of unique companies visited / total companies) * 100`.
3. WHEN the ExperiencePage first renders, THE ProgressBar SHALL display at 25% fill, reflecting the default active company.
4. WHEN a CompanyTab is clicked for the first time, THE ProgressBar SHALL animate its fill width to the new percentage using a smooth transition of 600ms or less.
5. THE ProgressBar SHALL display a numeric percentage label that updates in sync with the fill animation.
6. THE ProgressBar fill SHALL use a gradient from the AccentColor of the first visited company to the AccentColor of the most recently visited company.

---

### Requirement 2: Horizontal Company Tab Navigation

**User Story:** As a visitor, I want to click company tabs in a horizontal row to switch between employers, so that I can navigate the career timeline intuitively.

#### Acceptance Criteria

1. THE ExperiencePage SHALL render exactly four CompanyTabs in a horizontal row, one per employer, in chronological order.
2. THE CompanyTab SHALL display the company logo SVG and company name.
3. WHEN a CompanyTab is hovered, THE CompanyTab SHALL apply a GlowEffect using the company's AccentColor.
4. WHEN a CompanyTab is clicked, THE ExperiencePage SHALL set that tab as the ActiveTab.
5. THE ActiveTab SHALL be visually distinguished with a highlighted border and GlowEffect using its AccentColor.
6. WHEN a CompanyTab has not been previously clicked, THE CompanyTab SHALL display a LockIcon overlay.
7. WHEN a locked CompanyTab is clicked, THE ExperiencePage SHALL play the UnlockAnimation before revealing the company content.

---

### Requirement 3: Animated Timeline Path

**User Story:** As a visitor, I want to see an animated connecting line between company tabs, so that the page feels like a living career journey map.

#### Acceptance Criteria

1. THE ExperiencePage SHALL render a TimelinePath as an SVG element positioned behind the CompanyTabs.
2. THE TimelinePath SHALL connect the center-bottom of each CompanyTab in sequence from left to right.
3. WHEN the ExperiencePage mounts, THE TimelinePath SHALL animate its stroke from 0% to 100% path length over 1200ms using a Framer Motion `pathLength` animation.
4. THE TimelinePath SHALL use a gradient stroke blending from `#38bdf8` (blue) to `#fb923c` (orange).
5. WHEN the ActiveTab changes, THE TimelinePath SHALL pulse a glow along the segment leading to the ActiveTab.

---

### Requirement 4: 3D Flip Card for Company Detail

**User Story:** As a visitor, I want clicking a company tab to trigger a 3D flip card animation, so that the reveal of company details feels dynamic and engaging.

#### Acceptance Criteria

1. THE ExperiencePage SHALL render a FlipCard below the CompanyTab row for the ActiveTab's company.
2. THE FlipCard front face SHALL display the company logo, company name, role title, and date range.
3. THE FlipCard back face SHALL display the role description and a list of achievement bullet points with icons.
4. WHEN a CompanyTab is clicked, THE FlipCard SHALL animate a 180-degree Y-axis rotation from front to back over 500ms.
5. WHEN the FlipCard is displaying the back face, THE ExperiencePage SHALL render the ProjectCard list below the FlipCard.
6. THE FlipCard SHALL use `perspective: 1000px` CSS to produce a realistic 3D depth effect.
7. IF the same CompanyTab is clicked while the FlipCard is already showing the back face, THEN THE FlipCard SHALL rotate back to the front face.

---

### Requirement 5: Project Cards with Bounce Animation

**User Story:** As a visitor, I want project cards to slide in with a bounce animation when I select a company, so that the content feels lively and responsive.

#### Acceptance Criteria

1. THE ExperiencePage SHALL render a ProjectCard for each project associated with the ActiveTab's company.
2. WHEN the ActiveTab changes, THE ProjectCard list SHALL animate in using a staggered slide-up with a spring bounce (stiffness ≥ 200, damping ≤ 15).
3. THE ProjectCard SHALL display the project title, description, tech tags, and a key metric stat.
4. THE ProjectCard SHALL apply a top accent bar using the company's AccentColor.
5. WHEN a ProjectCard is hovered, THE ProjectCard SHALL display a TooltipPreview containing the project description.
6. WHEN a ProjectCard is hovered, THE ProjectCard SHALL elevate with a `translateY(-6px)` and scale to `1.03`.

---

### Requirement 6: Parallax Scrolling Depth Effect

**User Story:** As a visitor, I want the project cards to have a parallax depth effect as I scroll, so that the page feels immersive and three-dimensional.

#### Acceptance Criteria

1. THE ExperiencePage SHALL apply a ParallaxLayer to the ProjectCard grid section.
2. WHEN the user scrolls, THE ParallaxLayer SHALL translate ProjectCards at 60% of the scroll delta relative to the viewport, creating a depth offset.
3. THE ParallaxLayer SHALL use `useScroll` and `useTransform` from Framer Motion to derive the translation value.
4. THE parallax translation SHALL be bounded so ProjectCards do not translate more than 80px from their natural position.

---

### Requirement 7: Milestone Unlocked Achievement Animation

**User Story:** As a visitor, I want a "Milestone Unlocked" notification to appear when I click a significant career moment for the first time, so that the experience feels rewarding and game-like.

#### Acceptance Criteria

1. THE ExperiencePage SHALL define at least two companies as milestone companies (Accenture and Self-employed).
2. WHEN a milestone company's CompanyTab is clicked for the first time, THE ExperiencePage SHALL display a MilestoneToast.
3. THE MilestoneToast SHALL display the text "Milestone Unlocked", the company name, and the role title.
4. THE MilestoneToast SHALL animate in from the top of the viewport with a slide-down and fade-in over 400ms.
5. THE MilestoneToast SHALL automatically dismiss after 3000ms with a fade-out animation.
6. THE MilestoneToast SHALL only appear once per company per page session; revisiting the same company SHALL NOT trigger it again.

---

### Requirement 8: Deep Space Visual Theme

**User Story:** As a visitor, I want the page to have a deep space dark theme with neon glows, so that the game-like aesthetic is consistent and immersive.

#### Acceptance Criteria

1. THE ExperiencePage SHALL use `/experience.png` as the background image with `backgroundSize: cover` and `backgroundPosition: center top`.
2. THE ExperiencePage SHALL render ambient radial gradient overlays in blue (`#38bdf8`) and orange (`#fb923c`) at fixed positions behind all content.
3. THE ExperiencePage SHALL apply `backdropFilter: blur(12px)` to all card surfaces.
4. THE ExperiencePage SHALL use AccentColors per company: University of Málaga `#38bdf8`, Accenture `#a78bfa`, ARHS Group `#34d399`, Self-employed `#fb923c`.
5. THE ExperiencePage SHALL render energy particle effects (small animated dots) around the ActiveTab using a canvas or CSS animation.

---

### Requirement 9: Locked / Unlocked State Persistence Within Session

**User Story:** As a visitor, I want the page to remember which companies I have already visited during my session, so that previously unlocked companies remain unlocked as I navigate.

#### Acceptance Criteria

1. THE ExperiencePage SHALL maintain a `visitedCompanies` state set that persists for the lifetime of the component.
2. WHEN a CompanyTab is clicked, THE ExperiencePage SHALL add that company's index to `visitedCompanies`.
3. THE LockIcon SHALL only be shown on CompanyTabs whose index is not present in `visitedCompanies`.
4. THE ProgressBar fill percentage SHALL be derived from the size of `visitedCompanies` relative to the total number of companies.
5. WHEN the ExperiencePage first renders, THE ExperiencePage SHALL add the default active company index to `visitedCompanies`.

---

### Requirement 10: Responsive Layout

**User Story:** As a visitor on a smaller screen, I want the experience page to remain usable, so that I can explore the career journey on any device.

#### Acceptance Criteria

1. THE ExperiencePage SHALL render the CompanyTab row as a 2×2 grid on viewports narrower than 768px.
2. THE ExperiencePage SHALL render the ProjectCard grid as a single column on viewports narrower than 768px.
3. THE FlipCard SHALL maintain its 3D flip animation on all supported viewport sizes.
4. THE ProgressBar SHALL span the full width of the content container on all viewport sizes.
