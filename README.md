# dark-mode-context

A simple context provider for dark mode. It can be used in combination with [Tailwind CSS](https://tailwindcss.com/) to apply dark mode class with support for respecting the user's system preferences.

[![NPM](https://img.shields.io/npm/v/dark-mode-context.svg)](https://www.npmjs.com/package/dark-mode-context)

## Install

```bash
npm install --save dark-mode-context
yarn add dark-mode-context
```

## Usage

```tsx
import React, { Component } from 'react'

import { DarkModeProvider,DarkModeMenu } from 'dark-mode-context'

const App = () => (
  <DarkModeProvider injectDarkClass>
    <div>
      <h1>Hello World</h1>
      <DarkModeMenu />
    </div>
  </DarkModeProvider>
)
```

```tsx
import React, { Component } from 'react'

const MyButton = () => {
  const {isDark, toggleDarkMode} = useDarkModeContext()

  return (
    <button onClick={toggleDarkMode}>
      {isDark ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}

const App = () => (
  <DarkModeProvider injectDarkClass>
    <div>
      <h1>Hello World</h1>
      <MyButton />
    </div>
  </DarkModeProvider>
)
```

## Props

### DarkModeProvider

- `injectDarkClass`: `boolean` - Whether the DarkModeProvider should start in dark mode or not. Defaults to `false`
- `darkClassName`: `string` - The class name to be used for dark mode. Defaults to `dark`
- `lightClassName`: `string` - The class name to be used for light mode. Defaults to `''`
- `children`: `React.ReactNode` - The children of the DarkModeProvider

### DarkModeMenu

- `as`: React.ElementType - The element to be used for the menu. Defaults to `React.Fragment`
- `className`: `string | undefined` - The class name to be used for the menu. Defaults to `undefined`
- `darkBtn`: `React.ReactNode` - The button to be used for dark mode. Defaults to `DarkBtn`
- `lightBtn`: `React.ReactNode` - The button to be used for light mode. Defaults to `LightBtn`
- `systemBtn`: `React.ReactNode` - The button to be used for system mode. Defaults to `SystemBtn`
- `menuToggleBtn`: `React.ReactNode` - The button to be used for toggling the menu. Defaults to `MenuToggleBtn`

> Note: This component requires HeadlessUI to be installed, which can be done by running `npm install --save headlessui`.

### DarkBtn, LightBtn, SystemBtn, MenuToggleBtn

- `onClick`: `() => void` - The function to be called when the button is clicked. Defaults to `undefined`
- `className`: `string | undefined` - The class name to be used for the button. Defaults to `undefined`

> Note: These components uses Tailwind CSS to style the button. they can be styled by passing a class name to the `className` prop.

## License

MIT © [NatoNathan](https://github.com/NatoNathan)
