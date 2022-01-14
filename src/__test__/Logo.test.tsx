import React from 'react';
import renderWith from './RenderWith';
import Logo from '../components/Logo';
import { theme } from '../styles/theme';

describe('<Logo /> testing', () => {
  it('Should render with ThemeProvider', () => {
    expect(renderWith.withTheme(<Logo />, theme)).toMatchSnapshot();
  });
});
