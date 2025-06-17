import React from 'react';
import { StandardRowProps } from './models';
import { StyledRow } from './styles/row.styles';
import { Col } from './col';

export const Row = React.forwardRef<HTMLDivElement, StandardRowProps>(
  (props: StandardRowProps, ref) => {
    const { children, ...rest } = props;
    const renderColumns = () =>
      React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Col) {
          return React.cloneElement(child as React.ReactElement<any>, { $isBento: props.$isBento });
        }
        return child;
      });
    return (
      <StyledRow {...rest} ref={ref}>
        {props.$isBento ? renderColumns() : children}
      </StyledRow>
    );
  }
);
