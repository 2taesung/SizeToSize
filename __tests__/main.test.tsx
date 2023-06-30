import Page from '@src/app/page';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Main', () => {
  it('renders a heading', async () => {
    render(<Page />);

    const titleElement = screen.getByText('SizeToSize');
    expect(titleElement).toBeInTheDocument();
  });
});
