---
meta:
  title: Expansion panel component
  description: The expansion panel component is a lightweight container that hides information behind expandable and contractable containers.
  keywords: expansion panels, vuetify expansion panel component, vue expansion panel component
related:
  - /components/cards/
  - /components/data-tables/
  - /components/lists/
---

# Expansion panels

Component description

<entry-ad />

## Usage

Expansion panels in their simplest form display a list of expandable items.

<example file="v-expansionpanel/usage" />

## API

- ['v-expansion-panels'](../../api/'v-expansion-panels')
- ['v-expansion-panel'](../../api/'v-expansion-panel')
- ['v-expansion-panel-header'](../../api/'v-expansion-panel-header')
- ['v-expansion-panel-content'](../../api/'v-expansion-panel-content')

## Sub-Components

Omit if none

### Sub Component 1

Sub component text

### Sub Component 2

Sub component text

## Caveats

Omit if none

<alert type="success">Success Caveat</alert>
<alert type="info">Info Caveat</alert>
<alert type="warning">Warning Caveat</alert>
<alert type="error">Error Caveat</alert>

## Examples

Example text.

### Props

#### Accordion

**accordion** expansion-panel hasn't got margins around active panel.

<example file="v-expansion-panels/prop-accordion" />

#### Disabled

Both the expansion-panel and its content can be disabled using the `disabled` prop.

<example file="v-expansion-panels/prop-disabled" />

#### Focusable

The expansion-panel headers can be made focusable with the prop `focusable`.

<example file="v-expansion-panels/prop-focusable" />

#### Inset

**inset** expansion-panel becomes smaller when activated.

<example file="v-expansion-panels/prop-inset" />

#### Popout

The expansion-panel also has **popout** design. With it, expansion-panel is enlargened when activated.

<example file="v-expansion-panels/prop-popout" />

#### Readonly

`readonly` prop does the same thing as `disabled`, but it doesn't touch styles.

<example file="v-expansion-panels/prop-readonly" />

### Misc

#### Advanced

The expansion panel component provides a rich playground to build truly advanced implementations. Here we take advantage of slots in the `v-expansion-panel-header` component to react to the state of being open or closed by fading content in and out.

<example file="v-expansion-panels/misc-advanced" />

#### Custom icon

Expand action icon can be customized with `expand-icon` prop or the `actions` slot.

<example file="v-expansion-panels/misc-custom-icons" />

#### External control

Expansion panels can be controlled externally by modifying the `v-model`. Its value corresponds to a zero-based index of the currently opened expansion panel content.
If `multiple` prop is used then it is an array containing the indices of the open items.

<example file="v-expansion-panels/misc-external" />

<backmatter />
