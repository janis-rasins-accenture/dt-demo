import { allDesignTokens, Brand } from '@dt-demo/design-tokens';

export const designTokens = (brand?: Brand) => {
  switch (brand) {
    case Brand.SIDE:
      return allDesignTokens.side;
    case Brand.MAIN:
    default:
      return allDesignTokens.main;
  }
};
