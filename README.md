## Per Product Widgets Service
Overview
This service provides an interactive and engaging user interface for showcasing product-related widgets. Each widget highlights a unique contribution of the product, such as environmental impact through collected plastic bottles, trees planted, or carbon offset. The design is responsive and ensures compatibility across various devices and screen sizes.

## Technologies Used
Vue.js: A progressive JavaScript framework used for building user interfaces. Its component-based architecture makes it ideal for our modular design approach.

TypeScript: A typed superset of JavaScript that compiles to plain JavaScript, TypeScript is used for its powerful typing features that ensure code reliability and enhance the development experience.

Vuex: The state management pattern and library for Vue.js applications, Vuex provides a centralized store with the ability to track state changes in a reactive and efficient way.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs. Tailwind's responsive modifiers made it simple to style the widgets for various screen sizes.

Vitest: A Vite-native unit test framework that offers a blazingly fast testing environment, making it possible to run tests in a Node environment with near-zero configuration.
## Features
Dynamic Product Widgets: Widgets are dynamically rendered based on data retrieved from an API, ensuring up-to-date information is displayed.

Interactive Elements: Users can interact with various components like switches, checkboxes, and color selectors to customize their view.

Accessibility: The UI is designed with accessibility in mind, ensuring it is usable by as many people as possible.

Responsive Design: The layout adapts to the screen size, providing an optimal viewing experience on both mobile and desktop devices.

State Management: Vuex is used for state management, offering a centralized store for all the components with rules ensuring that the state can only be mutated in a predictable fashion.

# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
