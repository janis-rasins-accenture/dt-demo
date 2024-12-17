import { css, DefaultTheme } from 'styled-components';

export const primary = ({ colors, floats }: DefaultTheme, isInverted: boolean | undefined) => css`
  height: ${floats['button-primary-scale-m-l-container-height']};
  padding: 0rem ${floats['button-primary-container-padding-left-right']};
  gap: ${floats['button-primary-scale-m-l-icon-margin-right']};
  border-radius: ${floats['button-primary-container-corner-radius-all-round']};
  background: ${isInverted
    ? colors['button-primary-container-colour-inverse']
    : colors['button-primary-container-colour']};
  color: ${isInverted
    ? colors['button-primary-label-text-colour-inverse']
    : colors['button-primary-label-text-colour']};

  &:hover {
    background: ${isInverted
      ? colors['button-primary-hovered-container-colour-inverse']
      : colors['button-primary-hovered-container-colour']};
  }

  &:focus-visible {
    outline: none;
    background: ${isInverted
      ? colors['button-primary-focused-container-colour-inverse']
      : colors['button-primary-focused-container-colour']};
  }

  &:active {
    color: ${isInverted
      ? colors['button-primary-pressed-label-text-colour-inverse']
      : colors['button-primary-pressed-label-text-colour']};
    background: ${isInverted
      ? colors['button-primary-pressed-container-colour-inverse']
      : colors['button-primary-pressed-container-colour']};
  }

  &:disabled {
    color: ${isInverted
      ? colors['button-primary-disabled-label-text-colour-inverse']
      : colors['button-primary-disabled-label-text-colour']};
    background: ${isInverted
      ? colors['button-primary-disabled-container-colour-inverse']
      : colors['button-primary-disabled-container-colour']};
    cursor: not-allowed;
  }
`;
