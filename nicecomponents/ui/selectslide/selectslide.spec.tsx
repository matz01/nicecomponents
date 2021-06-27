import React from 'react';
import { render } from '@testing-library/react';
import { BasicSelectslide } from './selectslide.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSelectslide />);
  const rendered = getByText('hello from Selectslide');
  expect(rendered).toBeTruthy();
});
