import React from 'react';

import Logo from '../components/Logo';

import renderWith from './RenderWith';
import { theme } from '../styles/theme';

describe('<Logo /> testing', () => {
  it('should match a snapshot', () => {
    expect(renderWith.withTheme(<Logo />, theme)).toMatchSnapshot();
  });
});
