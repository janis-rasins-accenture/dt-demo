import { css, DefaultTheme } from 'styled-components';

export const secondary = ({ colors, floats }: DefaultTheme, isInverted: boolean | undefined) => css`
  background-color: transparent;
  height: ${floats['button-secondary-scale-m-l-container-height']};
  padding: 0rem ${floats['button-secondary-container-padding-left-right']};
  gap: ${floats['button-primary-scale-m-l-icon-margin-right']};
  border-radius: ${floats['button-secondary-corner-radius-all-round']};
  border: ${floats['button-secondary-container-border']} solid
    ${isInverted
      ? colors['button-secondary-container-border-colour-inverse']
      : colors['button-secondary-container-border-colour']};
  color: ${isInverted
    ? colors['button-secondary-label-text-colour-inverse']
    : colors['button-secondary-label-text-colour']};

  &:hover {
    color: ${isInverted
      ? colors['button-secondary-hovered-label-text-colour-inverse']
      : colors['button-secondary-hovered-label-text-colour']};
    border: ${floats['button-secondary-container-border']} solid
      ${isInverted
        ? colors['button-secondary-hovered-container-border-colour-inverse']
        : colors['button-secondary-hovered-container-border-colour']};
    background: ${isInverted
      ? colors['button-secondary-hovered-container-colour-inverse']
      : colors['button-secondary-hovered-container-colour']};
  }

  &:focus-visible {
    border: none;
    outline: none;
    color: ${isInverted
      ? colors['button-secondary-focused-label-text-colour-inverse']
      : colors['button-secondary-focused-label-text-colour']};
    background: ${isInverted
      ? colors['button-secondary-focused-container-colour-inverse']
      : colors['button-secondary-focused-container-colour']};
  }

  &:active {
    color: ${isInverted
      ? colors['button-secondary-pressed-label-text-colour-inverse']
      : colors['button-secondary-pressed-label-text-colour']};
    border: ${floats['button-secondary-container-border']} solid
      ${isInverted
        ? colors['button-secondary-pressed-container-border-colour-inverse']
        : colors['button-secondary-pressed-container-border-colour']};
    background: ${isInverted
      ? colors['button-secondary-pressed-container-colour-inverse']
      : colors['button-secondary-pressed-container-colour']};
  }

  &:disabled {
    background-color: transparent;
    color: ${isInverted
      ? colors['button-secondary-disabled-label-text-colour-inverse']
      : colors['button-secondary-disabled-label-text-colour']};
    cursor: not-allowed;
    border: ${floats['button-secondary-container-border']} solid
      ${isInverted
        ? colors['button-secondary-disabled-container-border-colour-inverse']
        : colors['button-secondary-disabled-container-border-colour']};
  }
`;
