import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MarvelPage from './MarvelPage';

describe('<MarvelPage />', () => {
  test('it should mount', () => {
    render(<MarvelPage />);
    
    const marvelPage = screen.getByTestId('MarvelPage');

    expect(marvelPage).toBeInTheDocument();
  });
});