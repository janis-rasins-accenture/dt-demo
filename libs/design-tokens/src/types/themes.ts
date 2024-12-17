import { StyledObject } from 'styled-components';
export interface TokenTheme {
  typography: ThemeTypography;
  colors: { [key: string]: string };
  floats: { [key: string]: string };
}

export interface Theme extends TokenTheme {
  isLight: boolean;
}

export enum Variant {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Brand {
  MAIN = 'main',
  SIDE = 'side',
}

export enum BrandId {
  MAIN = '1:4',
  SIDE = '1:5',
}

export enum VariantId {
  LIGHT = '1:2',
  DARK = '1:3',
}

export enum ValueId {
  VALUE = '1:0',
}

export interface ThemeVariantsId {
  [VariantId.LIGHT]: ThemePlatformId;
  [VariantId.DARK]: ThemePlatformId;
}

export interface ThemeValue {
  name: string;
  value: string;
}

export interface ThemePlatformId {
  [BrandId.MAIN]: TokenTheme;
  [BrandId.SIDE]: TokenTheme;
}

export interface ThemeTypography {
  [key: string]: TypographyStyle;
}

export interface TypographyStyle extends StyledObject<object> {
  'font-family': string;
  'font-size': string;
  'text-transform': string;
}
