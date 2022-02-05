import MatchMediaMock from 'jest-matchmedia-mock';
import { act, renderHook } from '@testing-library/react-hooks';
import useDarkMode from './useDarkMode';

let matchMedia: MatchMediaMock;

describe('Test useDarkMode Hook', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
    matchMedia.useMediaQuery('(prefers-color-scheme: dark)');
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it('should set mode to dark', () => {
    const { result } = renderHook(() => useDarkMode());
    act(() => {
      result.current.setDarkMode(true);
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.isSystem).toBe(false);
  });

  it('should set mode to light', () => {
    const { result } = renderHook(() => useDarkMode());
    act(() => {
      result.current.setDarkMode(false);
    });
    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.isSystem).toBe(false);
  });

  it('should set mode to system when null is passed, system is dark', () => {
    const { result } = renderHook(() => useDarkMode());
    // set system dark mode preference
    act(() => {
      result.current.setDarkMode(null);
    });
    expect(result.current.isSystem).toBe(true);
    expect(result.current.isDarkMode).toBe(true);
  });
  it('should set mode to system when null is passed, system is light', () => {
    // set system light mode preference
    matchMedia.useMediaQuery('(prefers-color-scheme: light)');
    const { result } = renderHook(() => useDarkMode());
    act(() => {
      result.current.setDarkMode(null);
    });
    expect(result.current.isSystem).toBe(true);
    expect(result.current.isDarkMode).toBe(false);
  });
});

describe('Test useDarkMode Hook with no matchMedia', () => {
  beforeAll(() => {
    matchMedia.destroy();
  });
  it('should set mode to dark', () => {
    const { result } = renderHook(() => useDarkMode());
    act(() => {
      result.current.setDarkMode(true);
    });
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.isSystem).toBe(false);
  });

  it('should set mode to light', () => {
    const { result } = renderHook(() => useDarkMode());
    act(() => {
      result.current.setDarkMode(false);
    });
    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.isSystem).toBe(false);
  });

  it('should set mode to light when null is passed', () => {
    const { result } = renderHook(() => useDarkMode());
    act(() => {
      result.current.setDarkMode(null);
    });
    expect(result.current.isDarkMode).toBe(false);
    expect(result.current.isSystem).toBe(false);
  });
});
