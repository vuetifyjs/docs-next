---
meta:
  title: Sheet component
  description: The sheet component is the default paper element in Vuetify and serves as the baseline for many Material Design implementations.
  keywords: sheets, vuetify sheet component, vue sheet component
related:
  - /components/cards/
  - /components/grids/
  - /styles/elevation/
---

# Sheets

The `v-sheet` is designed to power other **paper** components within Vuetify. It is meant to be used as a low level component.

<entry-ad />

## Usage

The `v-sheet` component is a malleable piece of paper that can be morphed to facilitate other components.

<usage name="v-sheet" />

## API

- [v-sheet](../../api/v-sheet)

## Examples

### Props

#### Using elevation

Sheets can accept a custom elevation between **0 and 24** (0 is default).

<example file="v-sheet/prop-elevation" />

#### Tile

Sheets can accept a `tile` property which makes them rectangular (no `border-radius`).

<example file="v-sheet/prop-tile" />

#### Colors & sizes

Sheets and components based on them can have different sizes and colors.

<example file="v-sheet/prop-colors-sizes" />

<backmatter />
