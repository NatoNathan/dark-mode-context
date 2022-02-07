import * as React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import DarkModeContext from '../contexts/DarkModeContext';

export type DarkModeProviderProps = {
  children: React.ReactNode;
  injectDarkClass?: boolean;
  wrapAs?: React.ElementType;
  darkClassName?: string;
  lightClassName?: string;
};

const DarkModeProvider = ({
  children,
  injectDarkClass = false,
  wrapAs,
  darkClassName = 'dark',
  lightClassName = ''
}: DarkModeProviderProps) => {
  const value = useDarkMode(!wrapAs && injectDarkClass);
  const WrapAs = wrapAs;
  return (
    <DarkModeContext.Provider value={value}>
      {injectDarkClass && WrapAs ? (
        <WrapAs className={value.isDarkMode ? darkClassName : lightClassName}>
          {children}
        </WrapAs>
      ) : (
        children
      )}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
