/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import NumberOfTransplants from './NumberOfTransplants';
import { ITheme, theme } from '../styles/theme';

import store from '../redux/store';

afterEach(cleanup);

const withTheme = (component: JSX.Element, theme: ITheme) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);
const renderWithRedux = (component: JSX.Element) =>
  render(<Provider store={store}>{withTheme(component, theme)}</Provider>);

describe('NumberOfTransplants testing', () => {
  beforeEach(() => {
    renderWithRedux(<NumberOfTransplants />);
  });
  it('render with Redux and themeProvider', () => {
    expect(screen.getByText('Количество пересадок')).toBeInTheDocument();
  });
});
