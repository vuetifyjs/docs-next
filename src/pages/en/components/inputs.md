---
meta:
  title: Input component
  description: The input component is the baseline functionality for all of Vuetify's form components and provides a baseline for custom implementations.
  keywords: inputs, vuetify input component, vue input component
related:
  - /components/forms/
  - /components/selects/
  - /components/text-fields/
---

# Inputs

The `v-input` component gives you a baseline to create your own custom inputs. It consists of a prepend/append slot, messages, and a default slot. It is _recommended_ that you extend this component, but it can be used as a standalone.

<entry-ad />

## Usage

`v-input` has 4 main areas. The prepended slot, the appended slot, the default slot, and messages. These make up the core logic shared between all form components.

<example file="v-input/usage" />

## API

- [v-input](../../api/v-input)

## Sub-Components

Omit if none

### Sub Component 1

Sub component text

### Sub Component 2

Sub component text

## Caveats

<alert type="warning">
  The `v-input` component is used as a wrapper for all of the Vuetify form controls. It does **NOT** inherit attributes as they are expected to be passed down to inner inputs.
</alert>

## Examples

Example text.

### Props

#### Error

As any validatable Vuetify component, `v-input` can be set to error state using `error` prop, messages can be added using `error-messages` prop. You can determine error messages count to show using `error-count` property.

<example file="v-input/prop-error" />

#### Auto hiding details

When `hide-details` is set to `auto` messages will be rendered only if there's a message (hint, error message etc) to display.

<example file="v-input/prop-hide-details" />

#### Hint

`v-input` can have `hint` which can tell user how to use the input. `persistent-hint` prop makes the hint visible always if no messages are displayed.

<example file="v-input/prop-hint" />

#### Loading

`v-input` has `loading` state which can be used, e.g. for data loading indication. Note: `v-text-field` is used just for example.

<example file="v-input/prop-loading" />

#### Multiple errors

You can add multiple errors to `v-input` using `error-count` property.

<example file="v-input/prop-multi-error" />

#### Rules

You can add custom validation rules to `v-input`, add them as functions returning `true`/error message. Note: `v-text-field` is used just for example.

<example file="v-input/prop-rules" />

#### Success

As any validatable Vuetify component, `v-input` can be set to success state using `success` prop, you can add message to it using `success-messages` prop.

<example file="v-input/prop-success" />

### Slots

#### Slot events

`v-input` can have `click:append` and `click:prepend` events for its slots. Note: `v-text-field` is used just for example.

<example file="v-input/slot-events" />

#### Slots

`v-input` has `append` and `prepend` slots. You can place custom icons in them.

<example file="v-input/slot-slots" />

<backmatter />
