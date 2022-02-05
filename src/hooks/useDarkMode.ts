import { useState, useEffect, useMemo } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isSystem, setSystem] = useState(false);

  const handleChange = (value: any) => {
    if (value == null && window.matchMedia) {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      setSystem(true);
      localStorage.setItem('darkMode', 'system');
    } else if (value == null) {
      setDarkMode(false);
      setSystem(false);
      localStorage.setItem('darkMode', 'false');
    } else {
      setDarkMode(value);
      setSystem(false);
      localStorage.setItem('darkMode', value);
    }
  };

  const darkMode = useMemo(
    () => ({
      isDarkMode: isDarkMode,
      isSystem: isSystem,
      setDarkMode: handleChange
    }),
    [isDarkMode, isSystem]
  );

  useEffect(() => {
    // check local storage for dark mode
    const localDarkMode = localStorage.getItem('darkMode') ?? 'system';

    switch (localDarkMode) {
      case 'true':
        setDarkMode(true);
        break;
      case 'false':
        setDarkMode(false);
        break;
      case 'system':
      default:
        if (
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
          setDarkMode(true);
        } else {
          setDarkMode(false);
        }
        setSystem(true);

        // check if system is dark
        if (window.matchMedia) {
          const mediaQueryList = window.matchMedia(
            '(prefers-color-scheme: dark)'
          );
          mediaQueryList.addEventListener('change', (e) => {
            if (localStorage.getItem('darkMode') === 'system') {
              if (e.matches) {
                setDarkMode(true);
              }
            }
          });
          const mediaQueryList2 = window.matchMedia(
            '(prefers-color-scheme: light)'
          );
          mediaQueryList2.addEventListener('change', (e) => {
            if (localStorage.getItem('darkMode') === 'system') {
              if (e.matches) {
                setDarkMode(false);
              }
            }
          });
        }
    }
  }, []);
  return darkMode;
};

export default useDarkMode;
