---
meta:
  title: Get started with Vuetify
  description: Get started with Vue and Vuetify in no time. Support for Vue CLI, Webpack, Nuxt and more.
  keywords: quick start, vuetify templates, installing vuetify, install vuetify
related:
  - /components/alerts/
  - /api/v-alert/
  - /company/advertise-with-us/
---

# Quick start

Get started with Vuetify, the world’s most popular Vue.js framework for building feature rich, blazing fast application.

<promoted-ad slug="vuemastery-getting-started" />

## Vue CLI Install

<alert type="warning">For information on how to use Vue CLI, visit the [official documentation](https://google.com).</alert>

If you have not already created a new Vue.js project using **Vue CLI**, you can do so by typing:

```bash
vue create my-app
# navigate to new project directory
cd my-app
```

Now that you have an instantiated project, you can add the Vuetify [Vue CLI package](?) using the cli.

```bash
vue add vuetify
```

### Vue UI install

Vuetify can also be installed using **Vue UI**, the new visual application for Vue CLI. Ensure that you have the latest version of Vue CLI installed, then from your terminal type:

```bash
# ensure Vue CLI is >= 3.0
vue --version

# Then start the UI
vue ui
```

This will start the Vue User Interface and open a [new window](?) in your browser. On the left side of your screen, click on **Plugins**. Once navigated, search for Vuetify in the input field.

![Install Vuetify Plugin](https://cdn.vuetifyjs.com/images/quick-start/vue_ui.png "Vue UI Vuetify Plugin")

## Nuxt install

Vuetify can be added by installing the Nuxt Vuetify module.

```bash
yarn add @nuxtjs/vuetify -D
# OR
npm install @nuxtjs/vuetify -D
```

Once installed, update your nuxt.config.js file to include the Vuetify module in the build.

```js
// nuxt.config.js
{
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ]
}
```

More information on installing Nuxt can be found on the official documentation.

## Webpack install

To install Vuetify into a Webpack project you need to add a few dependencies:

```bash
yarn add vuetify
# OR
npm install vuetify
```

```bash
yarn add sass sass-loader fibers deepmerge -D
# OR
npm install sass sass-loader fibers deepmerge -D
```

Once installed, locate your webpack.config.js file and copy the snippet below into the rules array. If you have an existing sass rule configured, you may need to apply some or all of the changes below. If you are you looking to utilize the vuetify-loader for treeshaking, ensure that you are on version >=4 of Webpack. You can find more information on setting it up with webpack on the A-la-carte page.

```js
// webpack.config.js

module.exports = {
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^7.0.0
          options: {
            implementation: require('sass'),
            fiber: require('fibers'),
            indentedSyntax: true // optional
          },
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
              indentedSyntax: true // optional
            },
          },
        },
      ],
    },
  ],
}
```

Create a plugin file for Vuetify, src/plugins/vuetify.js with the below content:

```js
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)
```

If using vuetify-loader use the content below:

```js
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)
```

Navigate to your main entry point where you instantiate your Vue instance and pass the Vuetify object in as an option.

```js
// src/main.js

import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export

new Vue({
  vuetify,
}).$mount('#app')
```

### Font installation

Vuetify uses Google's Roboto font and Material Design Icons. The simplest way to install these are to include their CDN's in your main index.html.

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
```

## CDN usage

To test using Vuetify.js without installing a template from Vue CLI, copy the code below into your index.html. This will pull the latest version of Vue and Vuetify, allowing you to start playing with components. You can also use the Vuetify starter on codepen. While not recommended, if you need to utilize the cdn packages in a production environment, it is recommended that you scope the versions of your assets. For more information on how to do this, navigate to the jsdelivr website.

<alert type="info">In order for your application to work properly, you must wrap it in a v-app component. See the Application component page for more information.</alert>

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>Hello world</v-container>
      </v-main>
    </v-app>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
  <script>
    new Vue({
      el: '#app',
      vuetify: new Vuetify(),
    })
  </script>
</body>
</html>
```

## Usage with Electron

To use Vuetify with Electron, add the electron-builder plugin via Vue CLI.

```bash
# Install
vue add electron-builder

# Usage
yarn electron:build
yarn electron:serve
```

## Usage with PWA

If you are creating a new app with Vue CLI, you have the option to select Progressive Web App (PWA) Support in the first prompt after initiating vue create my-app. This package can also be installed into existing Vue CLI projects by entering the following command:

```bash
vue add pwa
```

## Usage with Cordova

To use Vuetify with Cordova, add the Cordova plugin via Vue CLI:

```bash
# If cordova is not already installed
yarn global add cordova

# Install
vue add cordova

# Usage
yarn cordova-serve-android # Development Android
yarn cordova-build-android # Build Android
yarn cordova-serve-ios # Development IOS
yarn cordova-build-ios # Build IOS
yarn cordova-serve-browser # Development Browser
yarn cordova-build-browser # Build Browser
```

## Usage with Capacitor

To use Vuetify with **Capacitor**, add the [Capacitor](?) plugin via Vue CLI:

```bash
# Install
$ vue add @nklayman/capacitor

# Usage
$ yarn capacitor:serve
```

<backmatter />
