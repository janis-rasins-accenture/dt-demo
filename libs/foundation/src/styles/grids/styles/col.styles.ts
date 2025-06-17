import styled, { css } from 'styled-components';
import { Breakpoint, bentoBreakpoints, breakpoints, colCount } from './defaults';
import { StandardColProps, ColMediaNames } from '../models';

const generateMedia = (value: number, breakpoint: Breakpoint, isWidth: boolean) => {
  const minWidth = breakpoint['min-width'];
  const maxWidth = breakpoint['max-width'] ? breakpoint['max-width'] : Infinity;

  if (isWidth) {
    return `
      @media (min-width: ${minWidth}px)${maxWidth !== Infinity ? ` and (max-width: ${maxWidth}px)` : ''} {
        width: ${(100 * value) / colCount}%;
        padding: ${breakpoint['columnGap'] / 2}px ${breakpoint['columnGap'] / 2}px;
      }
    `;
  }

  return `
    @media (min-width: ${minWidth}px)${maxWidth !== Infinity ? ` and (max-width: ${maxWidth}px)` : ''} {
      margin-left: ${(100 * value) / colCount}%;
    }
  `;
};

export const colMedia = (values: ColMediaNames, isWidth: boolean, $isBento?: boolean) => {
  const valueKeys = Object.keys(values) as Array<keyof ColMediaNames>;
  let lastDefinedValue: number | undefined = undefined;
  const outputValues = valueKeys.map((key) => {
    const value = values[key];
    if (value !== undefined) {
      lastDefinedValue = value;
    }
    if (lastDefinedValue !== undefined) {
      return generateMedia(
        lastDefinedValue,
        $isBento ? bentoBreakpoints[key] : breakpoints[key],
        isWidth
      );
    }
  });

  return css`
    ${outputValues.join('')}
  `;
};

export const StyledCol = styled.div<StandardColProps & { $isBento?: boolean }>`
  flex-grow: 0;
  min-width: 0;
  flex-basis: auto;
  ${({ $xs, $s, $m, $ml, $l, $xl, $isBento }) =>
    colMedia({ $xs, $s, $m, $ml, $l, $xl }, true, $isBento)}
  ${({ $xsOffset, $sOffset, $mOffset, $mlOffset, $lOffset, $xlOffset, $isBento }) =>
    colMedia(
      { $xs: $xsOffset, $s: $sOffset, $m: $mOffset, $ml: $mlOffset, $l: $lOffset, $xl: $xlOffset },
      false,
      $isBento
    )}
`;
