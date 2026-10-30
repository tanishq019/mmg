# Machine Magnet site architecture

This is a dependency-free static site. Open `index.html` through a local web server for the most reliable browser behavior.

## File map

- `index.html` — semantic application shell: header, navigation containers, main mount point, footer, dialog, toast, and chat shell.
- `assets/css/styles.css` — design tokens, responsive layout, components, form states, and animation styles.
- `assets/js/data.js` — all editable club content and navigation metadata: programs, events, projects, achievements, journal posts, quiz questions, and status labels.
- `assets/js/templates.js` — reusable markup helpers and page templates.
- `assets/js/app.js` — hash routing, filtering, dialogs, form validation, theme preference, menu, reveal behavior, bot, and canvas animation.

## Editing guide

1. Change club facts, links, events, and project details in `assets/js/data.js`.
2. Change a page layout in `assets/js/templates.js`.
3. Change interaction behavior in `assets/js/app.js`.
4. Change visual design in `assets/css/styles.css`.

The script tags in `index.html` must stay in their current order because the latter files use declarations from the earlier ones.
