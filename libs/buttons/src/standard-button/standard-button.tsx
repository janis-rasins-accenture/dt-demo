import { StandardButtonProps } from './standard-button.types';
import { StyledButton, StyledIconContainer } from './styles/standard-button.styles';

export const StandardButton = ({ label, icon, ...rest }: StandardButtonProps) => {
  return (
    <StyledButton {...rest}>
      <StyledIconContainer>{icon}</StyledIconContainer>
      {label}
    </StyledButton>
  );
};

export default StandardButton;
