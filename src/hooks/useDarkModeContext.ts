import { useContext } from 'react';
import DarkModeContext from '../contexts/DarkModeContext';

const useDarkModeContext = () => {
  const { isDarkMode, isSystem, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  return {
    isDarkMode: isDarkMode,
    isSystem: isSystem,
    toggleDarkMode: toggleDarkMode,
    setDarkMode: setDarkMode
  };
};

export default useDarkModeContext;
