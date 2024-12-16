import { render } from '@testing-library/react';

import DesignTokens from './design-tokens';

describe('DesignTokens', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesignTokens />);
    expect(baseElement).toBeTruthy();
  });
});
