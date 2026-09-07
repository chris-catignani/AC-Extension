# AGENTS.md

- **Keep it simple / prefer CSS**: The current implementation simply injects `content.css` to unhide existing DOM elements. Prefer lightweight CSS solutions when possible, but JavaScript can be introduced if new features or Air Canada frontend changes require it.
- **Firefox Gecko ID**: Do not change `browser_specific_settings.gecko.id` in `manifest.json`; it is required for AMO store updates.
- **Testing**: Load unpacked in `chrome://extensions` or as a temporary add-on in Firefox (`about:debugging`), then verify on an Air Canada Aeroplan award search.
