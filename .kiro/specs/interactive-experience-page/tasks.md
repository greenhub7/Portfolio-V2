# Implementation Plan: Interactive Experience Page

## Overview

Incrementally rebuild `src/pages/ExperiencePage.tsx` into a gamified deep-space career journey. Each task builds on the previous, wiring all pieces together at the end.

## Tasks

- [x] 1. Define data models and static COMPANIES data
  - Replace the existing `experiences` and `projects` arrays with typed `CompanyData` and `ProjectData` interfaces
  - Populate the `COMPANIES` constant with all four companies, their `accentColor`, `logoSrc`, `achievements`, nested `projects`, and `isMilestone` flag
  - _Requirements: 2.1, 8.4, 7.1_

  - [ ]* 1.1 Write property test for accent color specification (Property 18)
    - **Property 18: AccentColors match specification exactly**
    - **Validates: Requirements 8.4**

- [x] 2. Implement state management and ProgressBar component
  - Add `activeIndex`, `visitedCompanies`, `isFlipped`, `milestoneShown`, and `toastData` state to `ExperiencePage`
  - Initialize `visitedCompanies` with `new Set([0])` so the first company is pre-visited on mount
  - Implement the `ProgressBar` component with Framer Motion `animate={{ width }}` fill and numeric `{pct}%` label
  - Apply gradient fill using the first and most recently visited company accent colors
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 9.1, 9.4, 9.5_

  - [ ]* 2.1 Write property test for progress percentage formula (Property 1)
    - **Property 1: Progress pct formula holds for all visited counts**
    - **Validates: Requirements 1.2, 1.5**

  - [ ]* 2.2 Write property test for progress bar gradient colors (Property 2)
    - **Property 2: Gradient includes first and last visited accent colors**
    - **Validates: Requirements 1.6**

- [x] 3. Implement CompanyTab and TimelinePath components
  - Implement `CompanyTab` rendering company logo `<img>` and company name, with `LockIcon` overlay when `isLocked`
  - Apply `GlowEffect` (box-shadow using `accentColor`) on hover and when active
  - Implement `TimelinePath` as an SVG with Framer Motion `pathLength` animation (0 → 1 over 1200ms) and gradient stroke `#38bdf8` → `#fb923c`
  - Render the tab row as `grid-cols-4` (desktop) and `grid-cols-2` (mobile, `< 768px`)
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 3.1, 3.2, 3.3, 3.4, 10.1_

  - [ ]* 3.1 Write property test for CompanyTab logo and name rendering (Property 3)
    - **Property 3: All company tabs render logo src and name**
    - **Validates: Requirements 2.2**

  - [ ]* 3.2 Write property test for clicking any tab sets it active (Property 4)
    - **Property 4: Clicking any tab index sets it active**
    - **Validates: Requirements 2.4**

  - [ ]* 3.3 Write property test for active tab visual distinction (Property 5)
    - **Property 5: Active tab has distinct border from inactive tabs**
    - **Validates: Requirements 2.5**

  - [ ]* 3.4 Write property test for LockIcon presence (Property 6)
    - **Property 6: LockIcon present iff index not in visitedCompanies**
    - **Validates: Requirements 2.6, 9.3**

- [ ] 4. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Implement FlipCard component
  - Implement `FlipCard` with CSS `perspective: 1000px` on the wrapper and Framer Motion `rotateY` (0 → 180) on the inner container over 500ms
  - Front face: company logo, company name, role title, date range
  - Back face: role description and achievement bullet points with icons
  - Wire `onFlip` so clicking the same active tab while flipped rotates back to front
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.6, 4.7, 10.3_

  - [ ]* 5.1 Write property test for FlipCard data completeness (Property 7)
    - **Property 7: FlipCard front+back contain all company data fields**
    - **Validates: Requirements 4.2, 4.3**

  - [ ]* 5.2 Write property test for flip toggle round trip (Property 9)
    - **Property 9: Double flip returns to original state**
    - **Validates: Requirements 4.7**

- [x] 6. Implement ProjectCard and ProjectGrid components
  - Implement `ProjectCard` with top accent bar (`accentColor`), title, description, tech tags, stat badge, `whileHover={{ y: -6, scale: 1.03 }}`, and `TooltipPreview` on hover
  - Implement `ProjectGrid` wrapping cards in a `motion.div` with staggered spring entrance (stiffness ≥ 200, damping ≤ 15)
  - Conditionally render `ProjectGrid` only when `isFlipped === true`
  - Apply `useScroll` + `useTransform` for parallax `y` clamped to `[0, 80]`
  - Render as `grid-cols-2` (desktop) and `grid-cols-1` (mobile)
  - _Requirements: 4.5, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 6.1, 6.2, 6.3, 6.4, 10.2_

  - [ ]* 6.1 Write property test for ProjectCard visibility tied to isFlipped (Property 8)
    - **Property 8: ProjectCards visible iff isFlipped=true**
    - **Validates: Requirements 4.5**

  - [ ]* 6.2 Write property test for ProjectCard count equals company projects length (Property 10)
    - **Property 10: ProjectCard count equals company.projects.length**
    - **Validates: Requirements 5.1**

  - [ ]* 6.3 Write property test for ProjectCard required data fields (Property 11)
    - **Property 11: ProjectCard contains title, desc, tags, stat**
    - **Validates: Requirements 5.3**

  - [ ]* 6.4 Write property test for ProjectCard accent bar color (Property 12)
    - **Property 12: ProjectCard accent bar color matches company accentColor**
    - **Validates: Requirements 5.4**

  - [ ]* 6.5 Write property test for parallax translation bounds (Property 13)
    - **Property 13: Parallax y = clamp(scrollY * 0.6, 0, 80)**
    - **Validates: Requirements 6.2, 6.4**

- [ ] 7. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Implement MilestoneToast component and unlock logic
  - Implement `MilestoneToast` fixed at top-center, animating in with `y: -60 → 0` + `opacity: 0 → 1` over 400ms, auto-dismissing after 3000ms via `useEffect` with cleanup
  - In the tab click handler, check `isMilestone && !milestoneShown.has(index)` to set `toastData` and add to `milestoneShown`
  - Implement `UnlockAnimation` (glow flash / particle burst) triggered when a locked tab is first clicked
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 2.7_

  - [ ]* 8.1 Write property test for milestone toast content on first visit (Property 14)
    - **Property 14: Milestone toast content correct on first visit**
    - **Validates: Requirements 7.2, 7.3**

  - [ ]* 8.2 Write property test for milestone toast shown at most once (Property 15)
    - **Property 15: Milestone toast not shown on repeat visit**
    - **Validates: Requirements 7.6**

- [x] 9. Wire visitedCompanies state and session persistence
  - Ensure the tab click handler adds the clicked index to `visitedCompanies` (idempotent — `Set` handles deduplication)
  - Confirm `LockIcon` visibility derives from `!visitedCompanies.has(index)` across all tabs
  - Confirm `ProgressBar` fill derives from `visitedCompanies.size`
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

  - [ ]* 9.1 Write property test for visitedCompanies idempotent update (Property 16)
    - **Property 16: Clicking tab adds index to visitedCompanies idempotently**
    - **Validates: Requirements 9.2**

- [x] 10. Apply deep space visual theme and backdrop blur
  - Set root element `backgroundImage: url(/experience.png)`, `backgroundSize: cover`, `backgroundPosition: center top`
  - Render ambient radial gradient overlays (blue `#38bdf8`, orange `#fb923c`) at fixed positions
  - Apply `backdropFilter: blur(12px)` to all card surfaces (FlipCard, ProjectCard, detail panel)
  - Add energy particle effects (CSS animated dots) around the ActiveTab
  - _Requirements: 8.1, 8.2, 8.3, 8.5_

  - [ ]* 10.1 Write property test for backdrop blur on card surfaces (Property 17)
    - **Property 17: Card surfaces have backdropFilter blur(12px)**
    - **Validates: Requirements 8.3**

- [ ] 11. Write unit tests for ExperiencePage
  - Render smoke test: ExperiencePage mounts without errors
  - Initial state: `visitedCompanies` contains index 0, ProgressBar shows "25%"
  - Timeline SVG: gradient stops `#38bdf8` and `#fb923c` present
  - FlipCard perspective: wrapper has `perspective: 1000px`
  - Background style: root has `backgroundImage: url(/experience.png)` and `backgroundSize: cover`
  - Milestone companies: at least two entries in COMPANIES have `isMilestone: true`
  - Toast auto-dismiss: using `vi.useFakeTimers()`, MilestoneToast removed after 3000ms
  - ParallaxLayer: ProjectGrid wrapper is a `motion.div` with a `y` motion value
  - _Requirements: 1.3, 3.3, 4.6, 7.1, 7.5, 8.1_

- [ ] 12. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Property tests use `fast-check` with a minimum of 100 iterations per property
- Tag each property test with: `// Feature: interactive-experience-page, Property {N}: {property_text}`
- Unit tests use Vitest + `@testing-library/react` + `@testing-library/user-event`
- All sub-components can be co-located in `ExperiencePage.tsx` unless they exceed ~80 lines
