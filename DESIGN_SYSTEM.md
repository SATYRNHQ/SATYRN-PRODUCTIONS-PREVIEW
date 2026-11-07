# SATYRN HQ — Global Page Design System

This design system is mandatory for every existing page and every page added in the future.

## Reference
The Homepage Executive Overview is the reference for the overall scale, spacing, and visual rhythm. Other pages may use different content structures, but they must feel like parts of the same workspace.

## Shared dimensions
- Maximum content width: 1500px.
- Page content remains inside the global navigation safe zone.
- Page headings use the shared responsive scale: approximately 38–64px on desktop and 36–54px on mobile.
- Shared desktop grid gaps scale from 12–16px; mobile gaps use 10px.
- Standard cards and panels use a consistent 14px corner radius.
- Standard panel padding uses the shared responsive token, approximately 18–26px.
- Section spacing and page-intro spacing use responsive clamp-based values, not fixed one-off values.

## Responsive behavior
- Desktop: use the full available safe content area, up to the shared maximum width.
- Tablet: grids may reduce columns while preserving card proportions and spacing.
- Mobile: stack complex grids where needed, reduce gaps and padding, and prevent horizontal overflow.
- Keep text hierarchy and card proportions consistent across breakpoints.

## Implementation rules
- Use the shared CSS tokens and global selectors in `styles.css`.
- New pages should use the existing shared page structure and reusable panel/grid classes.
- Do not add arbitrary page-specific max-widths, heading scales, card radii, or spacing if a shared token already applies.
- Page-specific components may have their own internal layout, but should inherit the same overall content scale and visual rhythm.
- When the global design system changes, update the shared layer once so the rule applies to every page.
- Preserve the global headbar/sidebar dimensions and behavior; this document governs page content sizing, not navigation.


## Typography readability
- The minimum text size inside every page is 14px.
- Micro-copy that previously appeared at 7px is therefore doubled to 14px.
- This minimum applies consistently to all current and future pages; larger text remains at its existing size.
