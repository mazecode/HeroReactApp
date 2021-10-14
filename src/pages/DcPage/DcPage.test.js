import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DcPage from './DcPage';

describe('<DcPage />', () => {
  test('it should mount', () => {
    render(<DcPage />);
    
    const dcPage = screen.getByTestId('DcPage');

    expect(dcPage).toBeInTheDocument();
  });
});