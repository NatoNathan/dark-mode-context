import * as React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import DarkModeContext from '../contexts/DarkModeContext';

export type DarkModeProviderProps = {
  children: React.ReactNode;
  injectDarkClass?: boolean;
  darkClassName?: string;
  lightClassName?: string;
};

const DarkModeProvider = ({
  children,
  injectDarkClass = false,
  darkClassName = 'dark',
  lightClassName = ''
}: DarkModeProviderProps) => {
  const value = useDarkMode();
  return (
    <DarkModeContext.Provider value={value}>
      {injectDarkClass ? (
        <div className={value.isDarkMode ? darkClassName : lightClassName}>
          {children}
        </div>
      ) : (
        children
      )}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
