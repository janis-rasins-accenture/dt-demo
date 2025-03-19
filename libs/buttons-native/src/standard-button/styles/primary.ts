import { css, DefaultTheme } from 'styled-components/native';

export const primaryColor = (
  { colors }: DefaultTheme,
  disabled: boolean,
  $isInverted?: boolean
) => {
  const disabledColor = $isInverted
    ? colors['button-primary-disabled-label-text-color-inverse']
    : colors['button-primary-disabled-label-text-color'];
  const regularColor = $isInverted
    ? colors['button-primary-label-text-color-inverse']
    : colors['button-primary-label-text-color'];
  return css`
    color: ${disabled ? disabledColor : regularColor};
  `;
};

export const primary = ({ colors }: DefaultTheme, $isInverted: boolean, disabled: boolean) => {
  const disabledBg = $isInverted
    ? colors['button-primary-disabled-container-color-inverse']
    : colors['button-primary-disabled-container-color'];
  const regularBg = $isInverted
    ? colors['button-primary-container-color-inverse']
    : colors['button-primary-container-color'];
  return css`
    background: ${disabled ? disabledBg : regularBg};
  `;
};
