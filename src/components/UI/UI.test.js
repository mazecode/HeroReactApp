import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UI from './UI';

describe('<UI />', () => {
  test('it should mount', () => {
    render(<UI />);
    
    const ui = screen.getByTestId('UI');

    expect(ui).toBeInTheDocument();
  });
});