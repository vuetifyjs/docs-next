---
meta:
  title: Radio Group component
  description: TODO
  keywords: TODO
related:
  - /components/button-groups/
  - /components/forms/
  - /components/text-fields/
---

# Radio Groups

TODO

<entry-ad />

## Usage

<example file="v-radio-group/usage" />

## API

- [v-radio-group](../../api/v-radio-group)
- [v-radio](../../api/v-radio)

## Sub-components

### v-radio

v-radio description

## Examples

### Props

#### Default

Radio-groups are by default mandatory. This can be changed with the `mandatory` prop.

<example file="v-radio-group/prop-default" />

#### Direction

Radio-groups can be presented either as a row or a column, using their respective props. The default is as a column.

<example file="v-radio-group/prop-direction" />

#### Colors

Radios can be colored by using any of the builtin colors and contextual names using the `color` prop.

<example file="v-radio-group/prop-colors" />

### Slots

#### Label slot

Selection controls' labels can be defined in `label` slot - that will allow to use HTML content.

<example file="v-radio-group/slot-label" />

<backmatter />
