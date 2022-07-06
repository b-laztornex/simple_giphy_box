import React from 'react';
import { render, screen } from '@testing-library/react';
import GiphyComponent from '../components/GiphyComponent';

describe('render giphy component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('render main title', () => {
    render(<GiphyComponent />);
    const titleElement = screen.getByText(/The Giphy Box Search/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('render pagination button', () => {
    render(<GiphyComponent />);
    const buttonElement = screen.getByText(/Load More/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('check for search input', async () => {
    render(<GiphyComponent />);
    const placeholderElement = screen.getByPlaceholderText(
      /Search: zb. 'cheesburger'/i,
    );
    expect(placeholderElement).toBeInTheDocument();
  });
});
