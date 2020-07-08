---
meta:
  title: The Vuetify roadmap
  description: The upcoming planned features and new functionality coming to Vuetify. New components, new directives, and much much more!.
  keywords: vuetify roadmap, future plans, new vuetify features
nav: Roadmap
related:
  - /introduction/long-term-support/
  - /introduction/meet-the-team/
  - /'introduction/frequently-asked-questions/
---

# The Vuetify roadmap

Vuetify is always under development. We are constantly working towards improving the existing codebase, as well as adding new features and functionality that help make building applications even easier. Below is a tentative list of planned features. This is not an exhaustive list and is subject to change at any time without notice.

<entry-ad />

<alert type="error">
  **TODO** Add roadmap
</alert>

```json
{
  "roadmapItems": [
    {
      "type": "release",
      "complete": true,
      "title": "Alpha Launch",
      "caption": "December 2016",
      "text": "Vuetify is officially announced to the public. The framework initially shipped with 40 components and came in at a whopping 46kb.",
      "value": false
    },
    {
      "type": "release",
      "complete": true,
      "title": "v1.0 Release",
      "caption": "February 2018",
      "text": "The official v1.0 release party. After 18 months and Kael's sanity, we rolled into our first **MAJOR** release. This included a multitude of brand new components, features and functionality. Check here for the official [release notes](https://github.com/vuetifyjs/vuetify/releases/tag/v1.0.0).",
      "value": false
    },
    {
      "type": "release",
      "complete": true,
      "title": "v1.1 Release",
      "caption": "June 2018",
      "text": "A complete rebuild of all form functionality including all inputs and selection controls. Abstracted features from components like `v-select` into new implementations, `v-autocomplete`, `v-combobox` for more scoped functionality and easier testing. This release also marked the first official support of **RTL** languages. Check here for the official [release notes](https://github.com/vuetifyjs/vuetify/releases/tag/v1.1.0).",
      "value": false
    },
    {
      "type": "release",
      "complete": true,
      "title": "v1.2 Release",
      "caption": "July 2018",
      "text": "Added new components, `v-img`, `v-rating` and `v-hover`. Improved theme propagation system and expanded the functionality of the colors used with components such as HEX and RGBA. Als added numerous new locales. Check here for the official [release notes](https://github.com/vuetifyjs/vuetify/releases/tag/v1.2.0).",
      "value": false
    },
    {
      "type": "release",
      "complete": true,
      "title": "v1.3 Release",
      "caption": "October 2018",
      "text": "Added new components, `v-treeview`, `v-timeline` and `v-item-group`. Unified the interfaces used in `v-tabs` and `v-carousel`. Improved the **vuetify-loader** to support effortless application tree-shaking of Vuetify components. Check here for the official [release notes](https://github.com/vuetifyjs/vuetify/releases/tag/v1.3.0).",
      "value": false
    },
    {
      "type": "release",
      "complete": true,
      "title": "AWS Cognito Vuex Module",
      "caption": "November 2018",
      "text": "A fully featured Vuex module for interacting with AWS Cognito. Useful for websites that require authentication. Check here for more information on [AWS Cognito](https://aws.amazon.com/cognito/dev-resources/).",
      "value": false
    },
    {
      "type": "release",
      "complete": true,
      "title": "v1.4 Release",
      "caption": "December 2018",
      "text": "Added new components `v-sparkline` and abstracted `v-toolbar`'s functionality into multiple components for easier maintainability and testing. Rebuilt the entire documentation to make it easier for contributors and maintenance from the team. Check here for the official [release notes](https://github.com/vuetifyjs/vuetify/releases/tag/v1.4.0).",
      "value": false
    },
    {
      "type": "release",
      "complete": true,
      "title": "v1.5 Release",
      "caption": "February 2019",
      "text": "Added new component, `v-calendar`. Improved functionality of `v-sparkline` with new **bar** and **fill** properties. Improved `v-treeview` and prepared for LTS. Navigate to the [Long-term Support Page](/introduction/long-term-support) for more information on LTS. Check here for the official [release notes](https://github.com/vuetifyjs/vuetify/releases/tag/v1.5.0).",
      "value": false
    },
    {
      "type": "release",
      "complete": true,
      "title": "v2.0 Release **(Arcadia)**",
      "caption": "July 2019",
      "text": "A complete rebuild of the framework core. Improving the layout and theme systems, platform integration, accessibility, RTL and performance. Update all components to the [Material Design 2](https://material.io/design/) specification. Add additional functionality to multiple existing components and setup v1.5 for [Long-term Support](/introduction/long-term-support).",
      "features": {
        "#### Highlights": [
          "Complete update to Material Design 2",
          "Converted from Javascript to Typescript",
          "Converted from Stylus to Sass",
          "Converted from avoriaz to vue-test-utils"
        ],
        "#### New Components": [
          "`v-app-bar`",
          "`v-banner`",
          "`v-chip-group`",
          "`v-color-picker`",
          "`v-file-input`",
          "`v-list-item-group`",
          "`v-overlay`",
          "`v-simple-table`",
          "`v-slide-group`"
        ]
      },
      "value": false
    },
    {
      "type": "release",
      "complete": true,
      "title": "v2.1 Release **(Vanguard)**",
      "caption": "October 2019",
      "text": "A maintenance cycle to work on bugs from the v2.0 release. This includes performance issues, incorrect or missing a11y, RTL, regressions and general fixes. This will allow the team to catch up on the backlog of tasks that have accumulated over the 8 month development cycle of the previous release.",
      "features": {
        "#### Highlights": [
          "2 New Components",
          "2 New Directives",
          "Lazy loading support for `v-img`"
        ],
        "#### New Components": [
          "`v-lazy`",
          "`v-skeleton-loader`"
        ],
        "#### New Directives": [
          "`v-intersect`",
          "`v-mutate`"
        ]
      },
      "value": false
    },
    {
      "type": "release",
      "complete": true,
      "title": "v2.2 Release **(Tigris)**",
      "caption": "January 2020",
      "text": "The introduction of Vuetify Presets. Will include the entire Material Design Studies collection and be _user customizable_. Will streamline the process for altering the default styles for the framework. Thousands of SASS variables will be added and a lookup tree for finding those variables will put into the documentation. For more information on Google's studies, please [navigate here](https://material.io/design/material-studies/about-our-material-studies.html).",
      "features": {
        "#### Objectives": [
          "Add _thousands_ of new SASS variables",
          "Create a new Vuetify Service for bootstrapping pre-configured framework options; **Preset**",
          "Create presets for the official [Material Design Studies](https://material.io/design/material-studies/about-our-material-studies.html)",
          "Add new features and improve code styling of `v-badge`",
          "Add new features and improve code styling of `v-expansion-panels`",
          "new `v-theme-provider` component"
        ]
      },
      "value": false
    },    {
      "type": "release",
      "complete": false,
      "title": "v2.3 Release **(Liberator)**",
      "caption": "June 2020",
      "text": "The v2.3 release was dropped earlier in the year to focus on v3 development but was revived when COVID-19 showed up. This release is packed full of quality of life changes, new features such as the `v-virtual-scroll` component, responsive typography css classes, ",
      "features": {
        "#### Objectives": [
          "Add new css helper classes for `text-decoration`, `border-radius`, `typography`, and more.",
          "Add new `v-virtual-scroll` component",
          "Massive improvements to *Date Pickers, Data Tables, and Calendars*",
          "Framework hardening and preparation for **LTS version**"
        ]
      },
      "value": true
    },
    {
      "type": "packages",
      "complete": false,
      "title": "Vuetify Ecosystem Tools - **(Vue CLI Plugins)**",
      "caption": "Q4 2020",
      "text": "Brand new development tools designed to improve your productivity and efficiency while working with Vuetify. Built on top of [Vue CLI](https://cli.vuejs.org/), these plugins will easily integrate into existing projects and will be included by default in the Vuetify [remote preset](https://cli.vuejs.org/guide/plugins-and-presets.html#remote-presets). These features were first discussed at [Vue Conf Toronto in 2018](https://www.vuemastery.com/conferences/vueconf-toronto-2018/Vuetify-the-path-to-2-0) and officially shown at [Vue Conf Toronto in 2019](https://www.youtube.com/watch?v=B1oYaaMfHbw); official video coming soon.",
      "features": {
        "#### Highlights": [
          "Vuetify CLI",
          "Vuetify Storybook",
          "Vuetify Preset"
        ]
      },
      "value": false
    },
    {
      "type": "release",
      "complete": false,
      "title": "v3.0 Release **(Titan)**",
      "caption": "Q3/4 2020",
      "text": "The entire framework will be converted to the new [composition api](https://vue-composition-api-rfc.netlify.com/) coming in Vue 3. Details of this conversion process are outlined in our [v3 Notion Board](https://notion.vuetifyjs.com) along with information about release schedules, proposed new functionality and more. Vuetify 3 is being developed with the pre-releases (alpha/beta) of Vue 3 and is expected to release shortly after the next Vue version is officially released. Due to this, the target release quarter is variable and will change according to the progress of Vue 3.",
      "features": {
        "#### Objectives": [
          "Create a set of guidelines for how Vuetify 3 will be developed, iterated on and released—[v3 Notion Board](https://notion.vuetifyjs.com)",
          "Rebuild the framework using Vue 3 and the [composition api](https://vue-composition-api-rfc.netlify.com/)",
          "Improve framework performance",
          "Enhance Typescript support with Vue 3; updated typings",
          "Make it easier to unit test, no global setup required",
          "Restructure the framework core to support custom services",
          "Update the Documentation with improved examples and more information"
        ]
      },
      "value": false
    }
  ]
}
```

<backmatter />
