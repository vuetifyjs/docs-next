---
meta:
  title: Radio Group component
  description: The radio group component combines numerous radio buttons into a single group.
  keywords: radio groups, vuetify radio group component, vue radio group component
related:
  - /components/button-groups/
  - /components/forms/
  - /components/radio-buttons/
---

# Radio groups

The `v-radio-group` component supercharges the `v-radio` component by providing groupable functionality. It is used for creating groups of radio buttons.

<entry-ad />

## Usage

<example file="v-radio-group/usage" />

## API

- [v-radio-group](../../api/v-radio-group)
- [v-radio](../../api/v-radio)

## Examples

### Props

#### Colors

Radios can be colored by using any of the builtin colors and contextual names using the **color** prop.

<example file="v-radio-group/prop-colors" />

#### Direction

Radio-groups can be presented either as a row or a column, using their respective props. The default is as a column.

<example file="v-radio-group/prop-direction" />

#### Mandatory

Radio-groups are by default mandatory. This can be changed with the **mandatory** prop.

<example file="v-radio-group/prop-mandatory" />

### Slots

#### Label

Radio Group labels can be defined in `label` slot - that will allow to use HTML content.

<example file="v-radio-group/slot-label" />

<backmatter />
