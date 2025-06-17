import React from 'react';
import { StandardColProps } from './models';
import { StyledCol } from './styles/col.styles';

export const Col = React.forwardRef<HTMLDivElement, StandardColProps>(
  (props: StandardColProps, ref) => {
    const { children, ...rest } = props;
    return (
      <StyledCol {...rest} ref={ref}>
        {children}
      </StyledCol>
    );
  }
);
