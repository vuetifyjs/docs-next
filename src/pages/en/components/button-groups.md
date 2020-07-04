---
meta:
  title: Button group component
  description: The button group component allows you to combine a series of selectable buttons together in a single-line.
  keywords: button groups, vuetify button group component, vue button group component
related:
  - /components/buttons/
  - /components/icons/
  - /components/selection-controls/
---

# Button groups

The `v-btn-toggle` component is a simple wrapper for `v-item-group` built specifically to work with `v-btn`.

<entry-ad />

## Usage

Toggle buttons allow you to create a styled group of buttons that can selected or toggled under a single `v-model`

<example file="v-btn-toggle/usage" />

## API

- [v-btn-toggle](../../api/v-btn-toggle)
- [v-btn](../../api/v-btn)

## Examples

### Props

#### Mandatory

`mandatory` `VBtnToggle` always has value.

<example file="v-btn-toggle/prop-mandatory" />

#### Multiple

`multiple` `VBtnToggle` allows user to select multiple variants and returns value as an array.

<example file="v-btn-toggle/prop-multiple" />

#### Rounded

You can make `VBtnToggle` rounded using the `rounded` prop.

<example file="v-btn-toggle/prop-rounded" />

### Misc

#### Selected action

Group similar actions and design your own WYSIWYG component.

<example file="v-btn-toggle/misc-qwerty" />

#### Toolbar

Easily integrate customized button solutions with a `v-toolbar`

<example file="v-btn-toggle/misc-toolbar" />

<backmatter />
