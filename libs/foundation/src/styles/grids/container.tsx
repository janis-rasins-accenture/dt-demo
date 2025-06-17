import React from 'react';
import { StandardContainerProps } from './models';
import { StyledContainer } from './styles/container.styles';

export const Container = React.forwardRef<HTMLDivElement, StandardContainerProps>(
  (props: StandardContainerProps, ref) => {
    const { children, ...rest } = props;
    return (
      <StyledContainer {...rest} ref={ref}>
        {children}
      </StyledContainer>
    );
  }
);
