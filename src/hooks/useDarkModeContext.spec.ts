import MatchMediaMock from 'jest-matchmedia-mock';
import 'jest-localstorage-mock';
import { act, renderHook } from '@testing-library/react-hooks';
import useDarkModeContext from './useDarkModeContext';
import Provider from '../Components/DarkModeProvider';

let matchMedia: MatchMediaMock;

describe('Test useDarkModeContext Hook', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
    matchMedia.useMediaQuery('(prefers-color-scheme: dark)');
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it('should set mode to dark', () => {
    const wrapper: any = ({ children }: any) => Provider({ children });

    const { result } = renderHook(() => useDarkModeContext(), { wrapper });
    act(() => {
      result.current.setDarkMode(true);
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.isSystem).toBe(false);
  });

  it('should set mode to light', () => {
    const wrapper: any = ({ children }: any) => Provider({ children });

    const { result } = renderHook(() => useDarkModeContext(), { wrapper });
    act(() => {
      result.current.setDarkMode(false);
    });
    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.isSystem).toBe(false);
  });

  it('should set mode to system', () => {
    const wrapper: any = ({ children }: any) => Provider({ children });

    const { result } = renderHook(() => useDarkModeContext(), { wrapper });
    act(() => {
      result.current.setDarkMode(null);
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.isSystem).toBe(true);
  });

  it('should change with system if in system mode', () => {
    const wrapper: any = ({ children }: any) => Provider({ children });

    const { result } = renderHook(() => useDarkModeContext(), { wrapper });
    act(() => {
      result.current.setDarkMode(null);
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.isSystem).toBe(true);
    expect(localStorage.getItem('darkMode')).toBe('system');
    act(() => {
      matchMedia.useMediaQuery('(prefers-color-scheme: light)');
    });
    expect(result.current.isSystem).toBe(true);
    expect(result.current.isDarkMode).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('system');
    act(() => {
      matchMedia.useMediaQuery('(prefers-color-scheme: dark)');
    });
    expect(result.current.isSystem).toBe(true);
    expect(result.current.isDarkMode).toBe(true);
    expect(localStorage.getItem('darkMode')).toBe('system');
  });

  it('should not change if system changes and in dark mode', () => {
    const wrapper: any = ({ children }: any) => Provider({ children });

    const { result } = renderHook(() => useDarkModeContext(), { wrapper });
    act(() => {
      result.current.setDarkMode(true);
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.isSystem).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('true');
    act(() => {
      matchMedia.useMediaQuery('(prefers-color-scheme: light)');
    });
    expect(result.current.isSystem).toBe(false);
    expect(result.current.isDarkMode).toBe(true);
  });

  it('should not change if system changes and in light mode', () => {
    const wrapper: any = ({ children }: any) => Provider({ children });

    const { result } = renderHook(() => useDarkModeContext(), { wrapper });
    act(() => {
      result.current.setDarkMode(false);
    });
    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.isSystem).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('false');
    act(() => {
      matchMedia.useMediaQuery('(prefers-color-scheme: dark)');
    });
    expect(result.current.isSystem).toBe(false);
    expect(result.current.isDarkMode).toBe(false);
  });

  it('should switch out of system mode if set to dark', () => {
    const wrapper: any = ({ children }: any) => Provider({ children });

    const { result } = renderHook(() => useDarkModeContext(), { wrapper });
    act(() => {
      result.current.setDarkMode(null);
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.isSystem).toBe(true);
    expect(localStorage.getItem('darkMode')).toBe('system');
    act(() => {
      result.current.setDarkMode(true);
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.isSystem).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('true');
  });

  it('should switch out of system mode if set to light', () => {
    const wrapper: any = ({ children }: any) => Provider({ children });

    const { result } = renderHook(() => useDarkModeContext(), { wrapper });
    act(() => {
      result.current.setDarkMode(null);
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.isSystem).toBe(true);
    expect(localStorage.getItem('darkMode')).toBe('system');
    act(() => {
      result.current.setDarkMode(false);
    });
    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.isSystem).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('false');
  });

  it('should toggle from dark to light', () => {
    const wrapper: any = ({ children }: any) => Provider({ children });

    const { result } = renderHook(() => useDarkModeContext(), { wrapper });
    act(() => {
      result.current.setDarkMode(true);
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.isSystem).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('true');
    act(() => {
      result.current.toggleDarkMode();
    });
    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.isSystem).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('false');
  });

  it('should toggle from light to dark', () => {
    const wrapper: any = ({ children }: any) => Provider({ children });

    const { result } = renderHook(() => useDarkModeContext(), { wrapper });
    act(() => {
      result.current.setDarkMode(false);
    });
    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.isSystem).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('false');
    act(() => {
      result.current.toggleDarkMode();
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.isSystem).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('true');
  });
});
