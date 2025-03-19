import { PressableProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface StandardButtonProps extends PressableProps {
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
  icon?: (props: SvgProps) => React.JSX.Element;
  /**
   * Text to be displayed in the button
   */
  label: string;
}
