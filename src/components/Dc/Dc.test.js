import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dc from './Dc';

describe('<Dc />', () => {
  test('it should mount', () => {
    render(<Dc />);
    
    const dc = screen.getByTestId('Dc');

    expect(dc).toBeInTheDocument();
  });
});