import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { StoryFn, StoryContext } from '@storybook/react';
import { Globals } from '@storybook/types';
import { Brand, Variant, designTokens, WorkSans, Poppins, Reset } from '../../../foundation/src/';
import { ThemeProvider as NativeThemeProvider } from 'styled-components/native';

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

  const $variant = context.args['$variant'] || context.args['$color'] || null;
  const isInverse = context.args['$inverse'] || context.args['$isInverted'] || null;

  const isInvertedVariant = $variant === 'inverse';
  const isInverseCondition = isInDocs
    ? context.id.toLowerCase().includes('inverted') || context.id.toLowerCase().includes('inverse')
    : isInverse === true;

  const background =
    isInvertedVariant || isInverseCondition ? '#262626' : currentTheme.colors['page-bg-full'];

  const renderFont = () => {
    switch (brand) {
      case Brand.SIDE:
        return <Poppins />;
      case Brand.MAIN:
      default:
        return <WorkSans />;
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      {renderFont()}
      <Reset />
      <NativeThemeProvider theme={currentTheme}>
        <StyledDiv
          $bg={isSheetComponent ? currentTheme.colors['page-bg-full'] : background}
          $inDocs={isInDocs}
        >
          <Story {...context} />
        </StyledDiv>
      </NativeThemeProvider>
    </ThemeProvider>
  );
};

export default WithThemeProvider;
