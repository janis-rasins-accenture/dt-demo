import { ButtonHTMLAttributes } from 'react';

export interface StandardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Renders one of the selected visual styles
   * @default primary
   */
  $variant?: 'primary' | 'secondary';
  /**
   * Determines whether the color scheme is inverted.
   * @default false
   */
  $isInverted?: boolean;
  /**
   * Optional icon to be displayed on the left of the button label
   */
  icon?: React.ReactNode;
  /**
   * Text to be displayed in the button
   */
  label: string;
  /**
   * Sets the width of the button container to either fill the container or be limited to the width of the content
   * @default false
   */
  $isFullWidth?: boolean;
}
