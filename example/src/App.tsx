import React from 'react'

import { useDarkModeContext, DarkModeProvider } from 'dark-mode-context'


const DarkModeToggle = () => {
  const { isDarkMode, isSystem, toggleDarkMode} = useDarkModeContext()

  return (
    <button className='px-4 py-2 mt-4 text-2xl bg-indigo-300 dark:bg-indigo-600 rounded ' onClick={toggleDarkMode}>
     {isSystem&& ('Using System:')} {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}

const SystemMode= () => {
  const { isSystem, setDarkMode} = useDarkModeContext()

  return (
    <button className={`px-4 py-2 mt-4 text-2xl bg-indigo-300 dark:bg-indigo-600 rounded ${isSystem ? 'hidden':''}`} onClick={(_e)=> setDarkMode(null)}>
      Use System Mode
    </button>
  )
}


const App = () => (
  <DarkModeProvider injectDarkClass>
    <div className='w-screen h-screen p-2 bg-slate-50 dark:bg-slate-700 flex flex-col items-center justify-center font-semibold text-slate-800 dark:text-slate-50'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className=' text-4xl ' >dark-mode-context</h1>
        <DarkModeToggle />
        <SystemMode />
      </div>
      
    </div>
  </DarkModeProvider>
)
export default App
