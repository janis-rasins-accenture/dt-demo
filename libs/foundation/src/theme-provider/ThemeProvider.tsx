import React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { Brand, Variant, allDesignTokens } from '@dt-demo/design-tokens';
import { WorkSans } from '../fonts/WorkSans';
import { Poppins } from '../fonts/Poppins';
import { Reset } from '../reset/reset';

interface ThemeProviderProps {
  children?: React.ReactNode;
  mode: Variant;
  brand: Brand;
}

export const ThemeProvider = ({ children, mode, brand }: ThemeProviderProps) => {
  const renderFont = () => {
    switch (brand) {
      case Brand.SIDE:
        return <Poppins />;
      case Brand.MAIN:
      default:
        return <WorkSans />;
    }
  };
  return (
    <OriginalThemeProvider theme={allDesignTokens[brand][mode]}>
      {renderFont()}
      <Reset />
      {children}
    </OriginalThemeProvider>
  );
};
