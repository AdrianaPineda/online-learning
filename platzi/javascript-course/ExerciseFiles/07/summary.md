Everything that happens in the browser is registered as an event.

https://developer.mozilla.org/en-US/docs/Web/Events

Typical events:
- Browser-level events: browser behavior (load, window size, etc)
-- Load: resource and dependents have finished loading
-- Error: resource failed to load
-- Online/Offline
-- Resize: viewport is resized
-- Scroll: viewport is scrolled up/down/left/right

- DOM-level events: content interaction (click, focus, submit, etc)
-- Focus: when an event receives focus (clicked, tabbed to, etc)
-- Blur: event loses focus (leaving from field, etc)
-- Reset/Submit: form-specific events
-- Mouse events: click, mouseover, drag, drop, etc

- Other events:
-- Media events: relates to audio/video playback
-- Progress events: monitor ongoing browser progress
-- CSS transition events: transition start/run/end

Event handler: connect event to function
