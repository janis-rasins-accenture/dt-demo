import React from 'react';
import styled from 'styled-components';
import { StoryFn, StoryContext } from '@storybook/react';
import { Globals } from '@storybook/types';
import { Brand, Variant, ThemeProvider, designTokens } from '../../../foundation/src';

interface StyledDivProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $bg: string;
  $inDocs: boolean;
}

interface CustomGlobals extends Globals {
  brand: Brand;
  mode: Variant;
}

export const StyledDiv = styled.div<StyledDivProps>`
  padding: 2rem 1rem;
  background-color: ${({ $bg }) => $bg};
  height: ${({ $inDocs }) => ($inDocs ? 'auto' : '100vh')};
`;

const WithThemeProvider = (Story: StoryFn, context: StoryContext) => {
  const { brand, mode } = context.globals as CustomGlobals;

  const currentTheme = designTokens(brand)[mode];

  const isInDocs = context.viewMode === 'docs';
  const isSheetComponent = context.id.toLowerCase().includes('sheet');

  // Solution to address inverted component variants not showing up against the white background

  const variant =
    context.args['$variant'] || context.args['variant'] || context.args['$colour'] || null;
  const isInverse = context.args['$inverse'] || context.args['$isInverted'] || null;

  const isInvertedVariant =
    variant === 'inverted' ||
    variant === 'full-inverse' ||
    variant === 'subtle-inverse' ||
    variant === 'inverse';
  const isInverseCondition = isInDocs
    ? context.id.toLowerCase().includes('inverted') || context.id.toLowerCase().includes('inverse')
    : isInverse === true;

  const background =
    isInvertedVariant || isInverseCondition
      ? '#262626'
      : currentTheme.colors['page-bg-colour-full'];

  return (
    <ThemeProvider brand={brand} mode={mode}>
      <StyledDiv
        $bg={isSheetComponent ? currentTheme.colors['page-bg-colour-subtle'] : background}
        $inDocs={isInDocs}
      >
        <Story {...context} />
      </StyledDiv>
    </ThemeProvider>
  );
};

export default WithThemeProvider;
