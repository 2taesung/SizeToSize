import Page from '@src/app/page';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Main', () => {
  it('renders a heading', () => {
    render(<Page />);

    const h1Element = screen.getByText('Main');

    expect(h1Element).toBeInTheDocument();
  });
});
