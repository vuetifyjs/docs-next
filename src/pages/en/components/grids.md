---
meta:
  title: Grid system
  description: Vuetify supports the 12 point Material Design grid for laying out and controlling breakpoints for your application.
  keywords: grids, vuetify grid component, layout component, flex component
related:
  - /styles/flex/
  - /customization/breakpoints/
  - /styles/display/
---

# Grid system

Component description

<promoted-ad slug="vuemastery-grids" />

## Usage

The Vuetify grid is heavily inspired by the [Bootstrap grid](https://getbootstrap.com/docs/4.0/layout/grid/). It is integrated by using a series of containers, rows, and columns to layout and align content. **If you are new to flexbox**, [Read the CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and code snippets.

<example file="v-grid/usage" />

## API

- ['v-container'](../../api/'v-container')
- ['v-row'](../../api/'v-row')
- ['v-col'](../../api/'v-col')
- ['v-spacer'](../../api/'v-spacer')

## Caveats

<alert type="info">
  1.x grid system has been deprecated in favor of the 2.x grid system. Documentation for 1.x grids can be found in the [v1.5 docs](https://v15.vuetifyjs.com/framework/grid)
</alert>

<alert type="info">
  When using the grid system with IE11 you will need to set an explicit `height` as `min-height` will not suffice and cause undesired results.
</alert>

## Examples

### Misc

#### Auto sizing columns

Columns will automatically take up an equal amount of space within their parent container. This can be modified using the **cols** prop. You can also utilize the **sm**, **md**, **lg**, and **xl** props to further define how the column will be sized in different viewport sizes.

<example file="v-grid/misc-auto" />

#### Equal width columns

You can break equal width columns into multiple lines. While there are workarounds for older browser versions, there was a [Safari flexbox bug](https://github.com/philipwalton/flexbugs#11-min-and-max-size-declarations-are-ignored-when-wrapping-flex-items). This shouldn't be necessary if you're up-to-date.

<example file="v-grid/misc-equal" />

#### Grow and Shrink

By default, flex components will automatically fill the available space in a row or column. They will also shrink relative to the rest of the flex items in the flex container when a specific size is not designated. You can define the column width of the `v-col` by using the **cols** prop and providing a value from **1 to 12**.

<example file="v-grid/misc-grow-shrink" />

#### Horizontal alignment

Change the horizontal alignment of flex items and their parents using the **justify** and **justify-self** properties.

<example file="v-grid/misc-horizontal-alignment" />

#### Margin utilities

Using the [auto margin helper utilities](/styles/flex#auto-margins) you can force sibling columns away from each other.

<example file="v-grid/misc-margin" />

#### Nested grid

Grids can be nested, similar to other frameworks, in order to achieve very custom layouts.

<example file="v-grid/misc-nested-grid" />

#### No gutters

You can remove the negative margins from `v-row` and the padding from its direct `v-col` children using the **no-gutters** property.

<example file="v-grid/misc-no-gutters" />

#### Offset

Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content. Just as with breakpoints, you can set an offset for any available sizes. This allows you to fine tune your application layout precisely to your needs.

<example file="v-grid/misc-offset" />

#### Offset breakpoint

Offset can also be applied on a per breakpoint basis.

<example file="v-grid/misc-offset-breakpoint" />

#### One column width

When using the auto-layout, you can define the width of only one column and still have its siblings to automatically resize around it.

<example file="v-grid/misc-one-column-width" />

#### Order classes

You can control the ordering of grid items. As with offsets, you can set different orders for different sizes. Design specialized screen layouts that accommodate to any application.

<example file="v-grid/misc-order" />

#### Order last / first

You can also designate explicitly **first** or **last** which will assign **-1** or **13** values respectively to the `order` CSS property.

<example file="v-grid/misc-order-first-last" />

#### Row and column breakpoints

Dynamically change your layout based upon resolution. **(resize your screen and watch the top `row` layout change on sm, md, and lg breakpoints)**

<example file="v-grid/misc-row-column-breakpoint" />

#### Spacers

The `v-spacer` component is useful when you want to fill available space or make space between two components.

<example file="v-grid/misc-spacer" />

#### Unique layouts

The power and flexibility of the Vuetify grid system allows you to create amazing user interfaces.

<example file="v-grid/misc-unique-layouts" />

#### Variable content width

Assigning breakpoint width for columns can be configured to resize based upon the nature width of their content.

<example file="v-grid/misc-variable-content" />

#### Vertical alignment

Change the vertical alignment of flex items and their parents using the **align** and **align-self** properties.

<example file="v-grid/misc-vertical-alignment" />

#### Column wrapping

When more than 12 columns are placed within a given row (that is not using the `.flex-nowrap` utility class), each group of extra columns will wrap onto a new line.

<example file="v-grid/misc-wrapping" />

<backmatter />
