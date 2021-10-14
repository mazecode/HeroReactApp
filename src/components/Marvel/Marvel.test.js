import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Marvel from './Marvel';

describe('<Marvel />', () => {
  test('it should mount', () => {
    render(<Marvel />);
    
    const marvel = screen.getByTestId('Marvel');

    expect(marvel).toBeInTheDocument();
  });
});