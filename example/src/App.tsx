import React from 'react'

import { useDarkModeContext, DarkModeProvider } from 'dark-mode-context'


const MyButton = () => {
  const { isDarkMode, toggleDarkMode} = useDarkModeContext()

  return (
    <button className='' onClick={toggleDarkMode}>
      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}

const App = () => (
  <DarkModeProvider injectDarkClass>
    <div className='w-screen h-screen p-2 bg-slate-50 dark:bg-slate-700'>
      <h1>Hello World</h1>
      <MyButton />
    </div>
  </DarkModeProvider>
)
export default App
