---
product: base
title: React Toggle Button component and hook
components: ToggleButton
hooks: useToggleButton
githubLabel: 'component: ToggleButton'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/button/
---

# Toggle Button

<p class="description">A Toggle button is a two-state button that can be either off (not pressed) or on (pressed).</p>

{{"component": "modules/components/ComponentLinkHeader.js", "design": false}}

{{"component": "modules/components/ComponentPageTabs.js"}}

## Introduction

The Button component replaces the native HTML `<button>` element, and offers expanded options for styling and accessibility.

{{"demo": "UnstyledToggleButtonIntroduction.js", "defaultCodeOpen": false, "bg": "gradient"}}

<!-- Will want to make:
toggle button
toggle button group

think about:
- where should the context go? definitely in the toggle button group, but not sure about toggle button (think single toggle)
- I think you'll use the toggle button group context in the single toggle button.
 -->

<!-- simple single button from MUI docs -->
<!-- <ToggleButton
  value="check"
  selected={selected}
  onChange={() => {
    setSelected(!selected);
  }}
>
  <CheckIcon />
</ToggleButton> -->

{{"demo": "UseToggleButton.js", "defaultCodeOpen": true}}
