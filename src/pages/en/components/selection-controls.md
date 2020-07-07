---
meta:
  title: Selection control components
  description: Selection control components allows users to complete tasks that require the selection of various options, such as settings.
  keywords: selection controls, vuetify selection controls, vuetify checkbox component, vuetify radio component, vuetify switch component
related:
  - /components/button-groups/
  - /components/forms/
  - /components/text-fields/
---

# Selection controls

Selection control components allow a user to select options. These components **must** be used with the `v-model` prop as they do not maintain their own state.

<entry-ad />

## Usage

<example file="selection-controls/usage" />

## API

- [v-checkbox](../../api/v-checkbox)
- [v-radio](../../api/v-radio)
- [v-radio-group](../../api/v-radio-group)
- [v-simple-checkbox](../../api/v-simple-checkbox)
- [v-switch](../../api/v-switch)

## Examples

### Props

#### Checkboxes - Boolean

<example file="v-checkbox/misc-checkboxes-boolean" />

#### Checkboxes - Array

<example file="v-checkbox/misc-checkboxes-array" />

#### Checkboxes - States

<example file="v-checkbox/prop-checkboxes-states" />

#### Checkboxes - Colors

Checkboxes can be colored by using any of the builtin colors and contextual names using the `color` prop.

<example file="v-checkbox/prop-checkboxes-colors" />

#### Checkboxes - Inline with a textfield

<example file="v-checkbox/misc-checkboxes-inline-textfield" />

#### Radios - Default

Radio-groups are by default mandatory. This can be changed with the `mandatory` prop.

<example file="v-radio/prop-radios-default" />

#### Radios - Direction

Radio-groups can be presented either as a row or a column, using their respective props. The default is as a column.

<example file="v-radio-group/prop-radios-direction" />

#### Radios - Colors

Radios can be colored by using any of the builtin colors and contextual names using the `color` prop.

<example file="v-radio/prop-radios-colors" />

#### Switches - Boolean

<example file="v-switch/misc-switches-boolean" />

#### Switches - Array

<example file="v-switch/misc-switches-array" />

#### Switches - States

<example file="v-switch/prop-switches-states" />

#### Switches - Colors

Switches can be colored by using any of the builtin colors and contextual names using the `color` prop.

<example file="v-switch/prop-switches-colors" />

#### Switches - Flat

You can make switch render without elevation of thumb using `flat` property.

<example file="v-switch/prop-switches-flat" />

#### Switches - Inset

You can make switch render in inset mode.

<example file="v-switch/prop-switches-inset" />

### Slots

#### Label slot

Selection controls' labels can be defined in `label` slot - that will allow to use HTML content.

<example file="selection-controls/slot-label" />

<backmatter />
