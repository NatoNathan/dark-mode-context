import { createContext } from 'react';

const DarkModeContext = createContext({
  isDarkMode: false,
  isSystem: false,
  setDarkMode: (_value: boolean | null) => {}
});

export default DarkModeContext;
