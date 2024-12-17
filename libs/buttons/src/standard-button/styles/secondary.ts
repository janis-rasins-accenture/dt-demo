import { css, DefaultTheme } from 'styled-components';

export const secondary = (
  { colors, floats }: DefaultTheme,
  $isInverted: boolean | undefined
) => css`
  background-color: transparent;
  border: ${floats['button-secondary-container-border']} solid
    ${$isInverted
      ? colors['button-secondary-container-border-color-inverse']
      : colors['button-secondary-container-border-color']};
  color: ${$isInverted
    ? colors['button-secondary-label-text-color-inverse']
    : colors['button-secondary-label-text-color']};

  &:hover {
    color: ${$isInverted
      ? colors['button-secondary-hovered-label-text-color-inverse']
      : colors['button-secondary-hovered-label-text-color']};
    border-color: ${$isInverted
      ? colors['button-secondary-hovered-container-border-color-inverse']
      : colors['button-secondary-hovered-container-border-color']};
    background: ${$isInverted
      ? colors['button-secondary-hovered-container-color-inverse']
      : colors['button-secondary-hovered-container-color']};
  }

  &:disabled {
    color: ${$isInverted
      ? colors['button-secondary-disabled-label-text-color-inverse']
      : colors['button-secondary-disabled-label-text-color']};
    cursor: not-allowed;
    border-color: ${$isInverted
      ? colors['button-secondary-disabled-container-border-color-inverse']
      : colors['button-secondary-disabled-container-border-color']};
  }
`;
