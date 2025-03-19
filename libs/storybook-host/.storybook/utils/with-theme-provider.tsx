import React from 'react';
import styled from 'styled-components';
import { StoryFn, StoryContext } from '@storybook/react';
import { Globals } from '@storybook/types';
import { Brand, Variant, designTokens, ThemeProvider } from '../../../foundation/src/';
import { ThemeProvider as NativeThemeProvider } from '../../../foundation-native/src/';

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

  const $variant = context.args['$variant'] || context.args['$color'] || null;
  const isInverse = context.args['$inverse'] || context.args['$isInverted'] || null;

  const isInvertedVariant = $variant === 'inverse';
  const isInverseCondition = isInDocs
    ? context.id.toLowerCase().includes('inverted') || context.id.toLowerCase().includes('inverse')
    : isInverse === true;

  const background =
    isInvertedVariant || isInverseCondition
      ? currentTheme.colors['page-bg-full-inverted']
      : currentTheme.colors['page-bg-full'];
  return (
    <ThemeProvider mode={mode} brand={brand}>
      <NativeThemeProvider mode={mode} brand={brand}>
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
