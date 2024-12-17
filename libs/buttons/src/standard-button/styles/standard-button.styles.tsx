import styled, { css } from 'styled-components';
import { StandardButtonProps } from '../standard-button.types';
import { primary } from './primary';
import { secondary } from './secondary';

export const StyledButton = styled.button<Omit<StandardButtonProps, 'label'>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  ${({ theme }) => theme.typography['label-small-bold-title-case']}
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'max-content')};

  ${({ theme, variant = 'primary', isInverted }) =>
    ({
      primary: primary(theme, isInverted),
      secondary: secondary(theme, isInverted),
    })[variant]}
`;

export const StyledIconContainer = styled.div`
  width: ${({ theme }) => theme.floats['button-primary-icon']};
  height: ${({ theme }) => theme.floats['button-primary-icon']};

  & * {
    width: 100%;
    height: 100%;
  }
`;
