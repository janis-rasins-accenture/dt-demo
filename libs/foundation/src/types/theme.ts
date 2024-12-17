import { Brand, Variant, Theme } from '@dt-demo/design-tokens';
export interface ThemeBrand {
  [Brand.MAIN]: ThemeVariant;
  [Brand.SIDE]: ThemeVariant;
}

export interface ThemeVariant {
  [Variant.LIGHT]: Theme;
  [Variant.DARK]: Theme;
}
