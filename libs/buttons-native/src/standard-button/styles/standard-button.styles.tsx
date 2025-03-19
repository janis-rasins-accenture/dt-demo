import styled from 'styled-components/native';
import { Pressable, Text, View } from 'react-native';
import { StandardButtonProps } from '../standard-button.types';
import { primary, primaryColor } from './primary';
import { secondary, secondaryColor } from './secondary';
import { SvgProps } from 'react-native-svg';

export const StyledButton = styled(Pressable)<Omit<StandardButtonProps, 'label'>>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme: { floats } }) =>
    `${floats['button-container-padding-vertical']} ${floats['button-container-padding-horizontal']}`};
  gap: ${({ theme }) => theme.floats['button-container-gap']};
  border-radius: ${({ theme }) => theme.floats['button-container-corner-radius-all-round']};
  ${({ theme }) => theme.typography['label-small-bold-title-case']}

  ${({ theme, $variant = 'primary', $isInverted = false, disabled }) =>
    ({
      primary: primary(theme, $isInverted, !!disabled),
      secondary: secondary(theme, $isInverted, !!disabled),
    })[$variant]}
`;

export const StyledIconContainer = styled(View)`
  width: ${({ theme }) => theme.floats['button-primary-icon']};
  height: ${({ theme }) => theme.floats['button-primary-icon']};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const StyledText = styled(Text)<Partial<StandardButtonProps>>`
  ${({ theme }) => theme.typography['label-small-bold-title-case']};
  ${({ theme, $variant = 'primary', disabled, $isInverted = false }) => {
    return {
      primary: primaryColor(theme, !!disabled, $isInverted),
      secondary: secondaryColor(theme, !!disabled, $isInverted),
    }[$variant];
  }}
`;

export const styledIcon = (
  $variant: StandardButtonProps['$variant'],
  icon: (props: SvgProps) => React.JSX.Element,
  disabled: boolean,
  $isInverted?: boolean
) => styled(icon)`
  ${({ theme }) => {
    return {
      primary: primaryColor(theme, disabled, $isInverted),
      secondary: secondaryColor(theme, disabled, $isInverted),
    }[$variant ?? 'primary'];
  }}
`;
