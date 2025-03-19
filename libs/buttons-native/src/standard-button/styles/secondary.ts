import { css, DefaultTheme } from 'styled-components/native';

export const secondaryColor = (
  { colors }: DefaultTheme,
  disabled: boolean,
  $isInverted?: boolean
) => {
  const disabledColor = $isInverted
    ? colors['button-secondary-disabled-label-text-color-inverse']
    : colors['button-secondary-disabled-label-text-color'];
  const regularColor = $isInverted
    ? colors['button-secondary-container-color-inverse']
    : colors['button-secondary-container-color'];
  return css`
    color: ${disabled ? disabledColor : regularColor};
  `;
};

export const secondary = ({ colors }: DefaultTheme, $isInverted: boolean, disabled: boolean) => {
  const disabledBg = $isInverted
    ? colors['button-secondary-disabled-container-color-inverse']
    : colors['button-secondary-disabled-container-color'];
  const regularBg = $isInverted
    ? colors['button-secondary-container-color-inverse']
    : colors['button-secondary-container-color'];
  return css`
    background: ${disabled ? disabledBg : regularBg};
  `;
};
