---
meta:
  title: Sizing
  description: Sizing classes help to easily size any element to the size of their parent.
  keywords: custom height, custom sizing, height, width, size
related:
  - /styles/display/
  - /styles/flex/
  - /styles/spacing/
---

# Sizing

Use sizing classes to easily size any element to the size of their parent with helper classes.

<entry-ad />

## How it works

To specify the width or height of an element, use `w-{n}` or `h-{n}`, where `n` is either `25`, `50`, `75` or `100`. Using these classes, the available space from the parent element will be filled up by the value provided. For example, `h-25` will have 25% of 100px, resulting in 25px. 

## Examples

Adjust the `width` of the element to the parent width.

<example file="sizing/width" />

Adjust the `height` of the element to the parent height.

<example file="sizing/height" />

<backmatter />
