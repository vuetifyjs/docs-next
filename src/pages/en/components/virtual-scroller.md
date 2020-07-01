---
meta:
  title: Virtual scroller component,
  description: The Virtual scroll component is a container that renders only visible elements. It is useful when in need to display large amount of uniform data.,
  keywords: virtual scroll, vuetify virtual scroll component, vue virtual scroll component, v-virtual-scroll component
---

# Virtual scroller

The `v-virtual-scroll` component displays a virtual, *infinite* list. It supports dynamic height and scrolling vertically.

<entry-ad />

## Usage

The virtual scroller displays just enough records to fill the viewport and uses the existing component, rehydrating it with new data.

<usage name="v-virtual-scroller" />

## API

- [v-virtual-scroller](../../api/v-virtual-scroller)

## Caveats

<alert type="info">We are in the *process* of integrating the `v-virtual-scroll` component into existing features and components. If you are interested in helping, please reach out to **John Leider** in the [Discord Community](https://community.vuetifyjs.com).</alert>

## Examples

### Props

#### Pre-rendering items

By default the `v-virtual-scroll` does not pre-render additional items outside of the viewport. Increasing this value causes the scroller to render additional items as **padding**. It is **recommended** to keep this number as low as possible for the best possible `performance`.

<example file="v-virtual-scroller/prop-benching" />

### Misc

#### User directory

The `v-virtual-scroll` component can render an __unlimited__ amount of items by rendering **only** what it needs to fill the scroller's viewport.

<example file="v-virtual-scroller/misc-user-directory" />

<backmatter />
