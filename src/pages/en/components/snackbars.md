---
meta:
  title: Snackbar component
  description: The snackbar component informs user of a process that your application has performed is will perform. It can be temporary and often contains actions.
  keywords: snackbars, vuetify snackbar component, vue snackbar component
related:
  - /components/buttons/
  - /styles/colors/
  - /components/forms/
---

# Snackbars

The `v-snackbar` component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.

<entry-ad />

## Usage

<usage name="v-snackbar" />

## API

- [v-snackbar](../../api/v-snackbar)

## Examples

### Props

#### Multi Line

The `multi-line` property extends the height of the `v-snackbar` to give you a little more room for content.

<example file="v-asnackbar/prop-multi-line" />

#### Timeout

The `timeout` property lets you customize the delay before the `v-snackbar` is hidden.

<example file="v-asnackbar/prop-timeout" />

#### Vertical

The `vertical` property allows you to stack the content of your `v-snackbar`.

<example file="v-asnackbar/prop-vertical" />

### Misc

#### Variants

Apply different styles to the snackbar using props such as `text`, `shaped`, `outlined`, and more.

<example file="v-asnackbar/misc-variants" />

<backmatter />
