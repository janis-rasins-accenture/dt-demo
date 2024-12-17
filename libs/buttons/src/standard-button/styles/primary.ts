import { css, DefaultTheme } from 'styled-components';

export const primary = ({ colors }: DefaultTheme, $isInverted: boolean | undefined) => css`
  background: ${$isInverted
    ? colors['button-primary-container-color-inverse']
    : colors['button-primary-container-color']};
  color: ${$isInverted
    ? colors['button-primary-label-text-color-inverse']
    : colors['button-primary-label-text-color']};

  &:hover {
    background: ${$isInverted
      ? colors['button-primary-hovered-container-color-inverse']
      : colors['button-primary-hovered-container-color']};
  }

  &:disabled {
    color: ${$isInverted
      ? colors['button-primary-disabled-label-text-color-inverse']
      : colors['button-primary-disabled-label-text-color']};
    background: ${$isInverted
      ? colors['button-primary-disabled-container-color-inverse']
      : colors['button-primary-disabled-container-color']};
    cursor: not-allowed;
  }
`;
