---
meta:
  title: Date picker component
  description: The date picker component is a stand-alone interface that allows the selection of a date, month and year.
  keywords: date pickers, vuetify date picker component, vue date picker component
related:
  - components/buttons,
  - components/text-fields,
  - components/time-pickers
---

# Date pickers

The date picker component is a stand-alone interface that allows the selection of a date, month and year.

<entry-ad />

## Usage

Date pickers come in two orientation variations, portrait **(default)** and landscape. By default they are emitting `input` event when the day (for date picker) or month (for month picker), but with **reactive** prop they can update the model even after clicking year/month.

`<usage name="v-date-picker" />`

## API

- [v-date-picker](../../api/v-date-picker)

## Sub-Components

Omit if none

### Sub Component 1

Sub component text

### Sub Component 2

Sub component text

## Caveats

<alert type="warning">
  `v-date-picker` accepts ISO 8601 **date** strings (*YYYY-MM-DD*). For more information regarding ISO 8601 and other standards, visit the official ISO (International Organization for Standardization) [International Standards](https://www.iso.org/standards.html) page.
</alert>

## Examples

Example text.

### Props

#### Date pickers - Allowed dates

You can specify allowed dates using arrays, objects, and functions.

<example file="v-date-picker/prop-date-allowed-dates" />

#### Date pickers - birthday picker

Starting with year picker by default, restricting dates range and closing the picker menu after selecting the day make the perfect birthday picker.

<example file="v-date-picker/prop-date-birthday" />

#### Date pickers - Colors

Date picker colors can be set using the `color` and `header-color` props. If `header-color` prop is not provided header will use the `color` prop value.

<example file="v-date-picker/prop-date-colorable" />

#### Date pickers - current date indicator

By default the current date is displayed using outlined button - **show-current** prop allows you to remove the border or select different date to be displayed as the current one.

<example file="v-date-picker/prop-date-current" />

#### Date pickers - icons

You can override the default icons used in the picker.

<example file="v-date-picker/prop-date-icons" />

#### Date pickers - Multiple

Date picker can now select multiple dates with the `multiple` prop. If using `multiple` then date picker expects its model to be an array.

<example file="v-date-picker/prop-date-multiple" />

#### Date pickers - react to displayed month/year change

You can watch the `pickerDate` which is the displayed month/year (depending on the picker type and active view) to perform some action when it changes.

<example file="v-date-picker/prop-date-picker-date" />

#### Date pickers - Range

Date picker can select date range with the `range` prop. When using `range` prop date picker expects its model to be an array of length 2 or empty.

<example file="v-date-picker/prop-date-range" />

#### Date pickers - read only

Selecting new date could be disabled by adding **readonly** prop.

<example file="v-date-picker/prop-date-readonly" />

#### Date pickers - Setting picker width

You can specify allowed the picker's width or make it full width.

<example file="v-date-picker/prop-date-width" />

#### Picker's elevation

The `v-date-picker` component supports elevation up to a maximum value of 24. For more information on elevations, visit the official [Material Design elevations](https://material.io/design/environment/elevation.html) page.

<example file="v-date-picker/prop-elevation" />

#### Month pickers - Allowed months

You can specify allowed months using arrays, objects or functions.

<example file="v-date-picker/prop-month-allowed-months" />

#### Month pickers - Colors

Month picker colors can be set using the `color` and `header-color` props. If `header-color` prop is not provided header will use the `color` prop value.

<example file="v-date-picker/prop-month-colorable" />

#### Month pickers - current month indicator

By default the current month is displayed using outlined button - **show-current** prop allows you to remove the border or select different month to be displayed as the current one.

<example file="v-date-picker/prop-month-current" />

#### Month pickers - icons

You can override the default icons used in the picker.

<example file="v-date-picker/prop-month-icons" />

#### Month pickers - Multiple

Month pickers can now select multiple months with the `multiple` prop. If using `multiple` then the month picker expects its model to be an array.

<example file="v-date-picker/prop-month-multiple" />

#### Month pickers - read only

Selecting new date could be disabled by adding **readonly** prop.

<example file="v-date-picker/prop-month-readonly" />

#### Month pickers - Setting picker width

You can specify allowed the picker's width or make it full width.

<example file="v-date-picker/prop-month-width" />

### Events

#### Date pickers - DOM events for year/month/date buttons

Handle events such as `@click`, `@dblclick`, `@mouseenter`, and more when interacting with *date, month, and year* buttons.

<example file="v-date-picker/event-date-button-events" />

#### Date pickers - Events

You can specify events using arrays, objects or functions. To change the default color of the event use **event-color** prop. Your **events** function or object can return an array of colors (material or css) in case you want to display multiple event indicators.

<example file="v-date-picker/event-date-events" />

### Slots

### Misc

#### Date pickers - In dialog and menu

When integrating a picker into a `v-text-field`, it is recommended to use the **readonly** prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.

Pickers expose a slot that allow you to hook into save and cancel functionality. This will maintain an old value which can be replaced if the user cancels.

<example file="v-date-picker/misc-date-dialog-and-menu" />

#### Date pickers - formatting date

If you need to display date in the custom format (different than YYYY-MM-DD) you need to use the formatting function.

<example file="v-date-picker/misc-date-formatting" />

#### Date pickers - formatting date using external libs

Formatting dates is possible also with external libs such as Moment.js or date-fns

<example file="v-date-picker/misc-date-formatting-moment-datefns" />

#### Date pickers - Internationalization

The date picker supports internationalization through the JavaScript Date object. Specify a BCP 47 language tag using the `locale` prop, and then set the first day of the week with the `first-day-of-week` prop.

<example file="v-date-picker/misc-date-internationalization" />

#### Month pickers - In dialog and menu

When integrating a picker into a `v-text-field`, it is recommended to use the **readonly** prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.

 Pickers expose a slot that allow you to hook into save and cancel functionality. This will maintain an old value which can be replaced if the user cancels.

<example file="v-date-picker/misc-month-dialog-and-menu" />

#### Month pickers - Internationalization

The month picker supports internationalization through the JavaScript Date object. Specify a BCP 47 language tag using the `locale` prop, and then set the first day of the week with the `first-day-of-week` prop.

<example file="v-date-picker/misc-month-internationalization" />

#### Month pickers

Month pickers come in two orientation variations, portrait **(default)** and landscape.

<example file="v-date-picker/misc-month-light" />

## Accessibility

Accessibility text - omit if none

<backmatter />
