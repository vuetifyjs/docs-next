---
meta:
  title: Month picker component
  description: The month picker component is a stand-alone interface that allows the selection of month or both month and year.
  keywords: month pickers, vuetify month picker component, vue month picker component
related:
  - /components/date-pickers/
  - /components/menus/
  - /components/time-pickers/
---

# Date pickers - month

`v-date-picker` can be used as a standalone month picker component.

<entry-ad />

## Usage

Month pickers come in two orientation variations, portrait **(default)** and landscape.

`<usage name="v-date-picker" />`

## API

- [v-date-picker](../../api/v-date-picker)

## Caveats

<alert type="warning">
  `v-date-picker` accepts ISO 8601 **date** strings (*YYYY-MM-DD*). For more information regarding ISO 8601 and other standards, visit the official ISO (International Organization for Standardization) [International Standards](https://www.iso.org/standards.html) page.
</alert>

## Examples

Below is a collection of simple to complex examples.

### Props

#### Allowed months

You can specify allowed months using arrays, objects or functions.

<example file="v-date-picker/prop-month-allowed-months" />

#### Colors

Month picker colors can be set using the `color` and `header-color` props. If `header-color` prop is not provided header will use the `color` prop value.

<example file="v-date-picker/prop-month-colorable" />

#### Current month indicator

By default the current month is displayed using outlined button - **show-current** prop allows you to remove the border or select different month to be displayed as the current one.

<example file="v-date-picker/prop-month-current" />

#### Icons

You can override the default icons used in the picker.

<example file="v-date-picker/prop-month-icons" />

#### Orientation

<example file="v-date-picker/misc-month-light" />

#### Multiple

Month pickers can now select multiple months with the `multiple` prop. If using `multiple` then the month picker expects its model to be an array.

<example file="v-date-picker/prop-month-multiple" />

#### Readonly

Selecting new date could be disabled by adding **readonly** prop.

<example file="v-date-picker/prop-month-readonly" />

#### Width

You can specify allowed the picker's width or make it full width.

<example file="v-date-picker/prop-month-width" />

#### Internationalization

The month picker supports internationalization through the JavaScript Date object. Specify a BCP 47 language tag using the `locale` prop, and then set the first day of the week with the `first-day-of-week` prop.

<example file="v-date-picker/misc-month-internationalization" />

<backmatter />
