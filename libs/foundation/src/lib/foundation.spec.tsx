import { render } from '@testing-library/react';

import Foundation from './foundation';

describe('Foundation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Foundation />);
    expect(baseElement).toBeTruthy();
  });
});
