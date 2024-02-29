---
productId: base-ui
title: React Checkbox component and hook
components: Checkbox
hooks: useCheckbox
githubLabel: 'component: checkbox'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
---

# Checkbox

<p class="description">Checkboxes are UI elements that let users choose between two states—most commonly on/off.</p>

{{"component": "modules/components/ComponentLinkHeader.js", "design": false}}

{{"component": "modules/components/ComponentPageTabs.js"}}

## Introduction

The Checkbox component provides users with a checkbox for toggling between two mutually exclusive states.

{{"demo": "UnstyledCheckboxIntroduction", "defaultCodeOpen": false, "bg": "gradient"}}

## Component

```jsx
import { Checkbox } from '@mui/base/Checkbox';
```

### Anatomy

The Checkbox component is composed of a root `<span>` that houses an input slot:

```html
<span class="base-Checkbox-root">
  <input type="checkbox" class="base-Checkbox-input" />
</span>
```

### Custom structure

Use the `slots` prop to override the root or any other interior slot:

```jsx
<Checkbox slots={{ root: 'span', input: CustomInput }} />
```

:::info
The `slots` prop is available on all non-utility Base components.
See [Overriding component structure](/base-ui/guides/overriding-component-structure/) for full details.
:::

Use the `slotProps` prop to pass custom props to internal slots.
The following code snippet applies a CSS class called my-checkbox to the input slot:

```jsx
<Checkbox slotProps={{ input: { className: 'my-checkbox' } }} />
```
