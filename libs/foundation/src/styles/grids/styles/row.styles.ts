import styled, { css } from 'styled-components';
import { bentoBreakpoints, breakpoints, Breakpoints } from './defaults';
import { StandardRowProps } from '../models';

export const rowMargins = (breakpoints: Breakpoints) => {
  return css`
    ${Object.values(breakpoints)
      .map((breakpoint) => {
        const minWidth = breakpoint['min-width'];
        const maxWidth = breakpoint['max-width'] ? breakpoint['max-width'] : Infinity;

        return `
           @media (min-width: ${minWidth}px)${maxWidth !== Infinity ? ` and (max-width: ${maxWidth}px)` : ''} {
              margin: 0 ${breakpoint['columnGap'] / -2}px;
            }
          `;
      })
      .join('')}
  `;
};

export const StyledRow = styled.div<StandardRowProps>`
  flex-direction: row;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  ${({ $isBento }) => rowMargins($isBento ? bentoBreakpoints : breakpoints)}
`;
