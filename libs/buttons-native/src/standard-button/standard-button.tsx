import React from 'react';
import { StandardButtonProps } from './standard-button.types';
import {
  StyledButton,
  StyledIconContainer,
  StyledText,
  styledIcon,
} from './styles/standard-button.styles';
import { SvgProps } from 'react-native-svg';

export const StandardButton = ({
  label,
  icon,
  onPressIn,
  onPressOut,
  ...rest
}: StandardButtonProps) => {
  const { disabled, $isInverted, $variant } = rest;

  const renderIcon = (iconElement: (props: SvgProps) => React.JSX.Element) => {
    const Icon = styledIcon($variant, iconElement, !!disabled, $isInverted);
    return <Icon aria-label="icon" />;
  };
  return (
    <StyledButton {...rest}>
      {icon && <StyledIconContainer>{renderIcon(icon)}</StyledIconContainer>}
      <StyledText $variant={$variant} $isInverted={$isInverted} disabled={disabled}>
        {label}
      </StyledText>
    </StyledButton>
  );
};

export default StandardButton;
