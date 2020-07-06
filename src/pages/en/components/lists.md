---
meta:
  title: List component
  description: The list component is a continuous group of text, images and icons that may contain primary or supplemental actions.
  keywords: lists, vuetify list component, vue list component
related:
  - /components/item-groups/
  - /components/list-item-groups/
  - /components/subheaders/
---

# Lists

The `v-list` component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists present content in a way that makes it easy to identify a specific item in a collection. They provide a consistent styling for organizing groups of text and images.

<entry-ad />

## Usage

<example file="v-list/usage" />

## API

- [v-list](../../api/v-list)
- [v-list-item](../../api/v-list-item)
- [v-list-item-group](../../api/v-list-group)
- [v-list-item-action](../../api/v-list-item-action)
- [v-list-item-avatar](../../api/v-list-item-avatar)
- [v-list-item-content](../../api/v-list-item-content)
- [v-list-item-icon](../../api/v-list-item-icon)
- [v-list-item-title](../../api/v-list-item-title)
- [v-list-item-subtitle](../../api/v-list-item-subtitle)
- [v-list-item-action-text](../../api/v-list-item-action-text)

## Caveats

<alert type="info">
If you are looking for stateful list items, please check out [v-list-item-group](/components/list-item-groups).
</alert>

## Examples

Lists come in three main variations. **single-line** (default), **two-line** and **three-line**. The line declaration specifies the minimum height of the item and can also be controlled from `v-list` with the same prop.

### Props

### Action with title and sub-title

A **three-line** list with actions. Utilizing **[v-list-item-group](/components/list-item-groups)**, easily connect actions to your tiles.

<example file="v-list/prop-action-title-and-subtitle" />

### Avatar with 3 lines

For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses [line-clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) and is not supported in all browsers.

<example file="v-list/prop-avatar-three-lines" />


#### Avatar with title and action

Lists also contain slots for a more explicit approach. If you choose this approach, remember you must provide additional props for correct spacing. In this example, we have a title with an avatar, so we must provide an **avatar** property.

<example file="v-list/prop-avatar-title-and-action" />

#### Card image with toolbar and list

A list can be combined with a card.

<example file="v-list/prop-card-list" />

#### Dense

`v-list` can be lowered with **dense** property.

<example file="v-list/prop-dense" />

#### Disabled lists

You cannot interact with disabled `v-list`.

<example file="v-list/prop-disabled" />

#### Flat

Items don't change when selected in `v-list` with **flat** property.

<example file="v-list/prop-flat" />

#### Icon with 2 lines and action

Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.

<example file="v-list/prop-icon-two-lines-and-action" />

#### Navigation lists

Lists can receive an alternative **nav** styling that reduces the width `v-list-item` takes up as well as adding a border radius.

<example file="v-list/prop-nav" />

#### Nested lists

Using the `v-list-group` component you can create up to **2** levels in depth using the **sub-group** prop.

<example file="v-list/prop-nested" />

#### Rounded

You can make `v-list` items rounded.

<example file="v-list/prop-rounded" />

#### Shaped lists

Shaped lists have rounded borders on one side of the `v-list-item`.

<example file="v-list/prop-shaped" />

#### Subheadings and dividers

Lists can contain multiple subheaders and dividers.

<example file="v-list/prop-subheadings-and-dividers" />

#### Title with sub-title, actions and action-text

A list can contain a stack within an action. This is useful when you need to display meta text next to your action item.

<example file="v-list/prop-title-subtitle-actions-and-action-text" />

### Slots

#### Expansion Lists

A list can contain a group of items which will display on click. Expansion lists are also used within the **[v-navigation-drawer](/components/navigation-drawers)** component.

<example file="v-list/slot-expansion-lists" />

### Misc

#### single-line list

Here we combine **v-list-item-avatar** and **v-list-item-icon** in a single-line list.

<example file="v-list/misc-avatar-subheader-title-and-action" />

<backmatter />
