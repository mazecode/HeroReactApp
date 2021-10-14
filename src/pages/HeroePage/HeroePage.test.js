import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroePage from './HeroePage';

describe('<HeroePage />', () => {
  test('it should mount', () => {
    render(<HeroePage />);
    
    const heroePage = screen.getByTestId('HeroePage');

    expect(heroePage).toBeInTheDocument();
  });
});