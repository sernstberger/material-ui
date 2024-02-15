---
productId: base-ui
title: React Checkbox component
githubLabel: 'component: checkbox'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
---

# Checkbox 🚧

<p class="description">Checkboxes give users binary choices when presented with multiple options in a series.</p>

:::warning
The Base UI Checkbox component isn't available yet, but you can upvote [this GitHub issue](https://github.com/mui/material-ui/issues/38036) to see it arrive sooner.
:::

## Component

```jsx
import { Checkbox } from '@mui/base/Checkbox';
```

Input behaves similarly to the native HTML `<input>`, except that it's nested inside of a root `<div>`—see [Anatomy](#anatomy) for details.

The following demo shows how to create and style an input component, including `placeholder` text:

{{"demo": "UnstyledCheckboxBasic", "defaultCodeOpen": false}}

## Hook

```js
import { useCheckbox } from '@mui/base/useCheckbox';
```

The `useCheckbox` hook lets you apply the functionality of an Input to a fully custom component.
It returns props to be placed on the custom component, along with fields representing the component's internal state.

Hooks _do not_ support [slot props](#custom-structure), but they do support [customization props](#customization).

:::info
Hooks give you the most room for customization, but require more work to implement.
With hooks, you can take full control over how your component is rendered, and define all the custom props and CSS classes you need.

You may not need to use hooks unless you find that you're limited by the customization options of their component counterparts—for instance, if your component requires significantly different [structure](#anatomy).
:::

The demo below shows how to use the `useCheckbox` hook to create a custom input component that receives all the necessary props:

{{"demo": "UseCheckbox.js", "defaultCodeOpen": false}}
