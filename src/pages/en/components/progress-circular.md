---
meta:
  title: Progress circular component
  description: The progress circular component is useful for displaying a visual indicator of numerical data in a circle.
  keywords: progress circular, vuetify progress circular component, vue progress circular component, circular progress
related:
  - /components/cards/
  - /components/progress-linear/
  - /components/lists/
---

# Progress circular

The `v-progress-circular` component is used to convey data circularly to users. It also can be put into an indeterminate state to portray loading.

<entry-ad />

## Usage

By default, progress circular uses the applications secondary color.

<usage name="v-progress-circular" />

## API

- [v-progress-circular](../../api/v-progress-circular)

## Examples

### Props

#### Colored

Alternate colors can be applied to `v-progress-circular` using the `color` prop.

<example file="v-progress-circular/prop-circular-colored" />

#### Indeterminate

Using the `indeterminate` prop, a `v-progress-circular` continues to animate indefinitely.

<example file="v-progress-circular/prop-circular-indeterminate" />

#### Rotate

The `rotate` prop gives you the ability to customize the `v-progress-circular`'s origin.

<example file="v-progress-circular/prop-circular-rotate" />

#### Size & Width

The `size` and `width` props allow you to easily alter the size and width of the `v-progress-circular` component.

<example file="v-progress-circular/prop-circular-size-and-width" />

<backmatter />
