import designTokensJson from './design-tokens.json';
import { DefaultTheme } from 'styled-components';

export const allDesignTokens = {
  main: {
    light: {
      ...designTokensJson.main.light,
      isLight: true,
    } as DefaultTheme,
    dark: {
      ...designTokensJson.main.dark,
      isLight: false,
    } as DefaultTheme,
  },
  side: {
    light: {
      ...designTokensJson.side.light,
      isLight: true,
    } as DefaultTheme,
    dark: {
      ...designTokensJson.side.dark,
      isLight: false,
    } as DefaultTheme,
  },
};
