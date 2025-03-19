import { ReactNode } from 'react';
import { ThemeProvider as MobileThemeProvider } from 'styled-components/native';
import { Brand, Variant, allDesignTokens } from '@dt-demo/design-tokens';
interface ThemeProviderProps {
  children?: ReactNode;
  mode: Variant;
  brand: Brand;
}

export const ThemeProvider = ({ children, mode, brand }: ThemeProviderProps) => {
  return <MobileThemeProvider theme={allDesignTokens[brand][mode]}>{children}</MobileThemeProvider>;
};
