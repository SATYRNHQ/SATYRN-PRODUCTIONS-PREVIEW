# SATYRN HQ — Global Navigation Rules

These rules are mandatory for every existing page and every page added in the future.

## One shared navigation shell
- The headbar (`.hq-top-nav`) and both sidebars (`.hq-side-nav`) are global app-shell elements.
- Keep all three navigation elements inside `.app-shell` and **outside** `.main-area` and every `.page` section.
- Never duplicate, recreate, hide, reposition, or locally restyle a headbar or sidebar for an individual page.
- All pages use the same shared navigation elements and the same global CSS and JavaScript behavior.

## Page structure
- Add every page as a `.page` section inside `.main-area`.
- Give each page a unique ID in the form `page-<name>`.
- Navigation controls use `data-page="<name>"`, matching the page ID suffix.
- Use the existing global `showPage()` flow. Do not create page-specific navigation handlers or alternate hover/collapse logic.
- Navigation is delegated, so controls added later are handled without separate listeners.

## Behavior that must not drift
- Headbar and sidebars keep their existing dimensions, positions, icon sizing, spacing, hitboxes, active states, hover/focus expansion, collapse timing, and mobile behavior.
- A page change must not change the navigation's layout or interaction model.
- Only the currently selected navigation item receives the existing active state.
- Any requested navigation change must be implemented once in the shared shell styles/logic and apply consistently everywhere.

## Before committing a new page
1. Confirm its section is inside `.main-area`, not inside either navigation element.
2. Confirm its `id` matches its navigation control's `data-page` value.
3. Confirm there are no page-specific copies or overrides of the headbar/sidebar.
4. Check desktop, mobile, pointer hover, keyboard focus, and page switching against the shared navigation behavior.
