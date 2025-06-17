import styled, { css } from 'styled-components';
import { Breakpoint, breakpoints, Breakpoints } from './defaults';
import { StandardContainerProps } from '../models';

export const containerMedia = (breakpoints: Breakpoints, $isFullWidth?: boolean) => {
  const generateMediaQueries = (breakpoint: Breakpoint) => {
    const minWidth = breakpoint['min-width'];
    const maxWidth = breakpoint['max-width'] ?? Infinity;
    const value = $isFullWidth ? breakpoint['fullWidth'] : breakpoint['margin'];

    return `
      @media (min-width: ${minWidth}px)${maxWidth !== Infinity ? ` and (max-width: ${maxWidth}px)` : ''} {
        margin: 0 ${value}px;

      }
    `;
  };

  return css`
    ${Object.values(breakpoints).map(generateMediaQueries).join('')}
  `;
};

export const StyledContainer = styled.div<StandardContainerProps>`
  ${({ $isFullWidth }) => containerMedia(breakpoints, $isFullWidth)}
`;
