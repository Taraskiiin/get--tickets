import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { ITheme } from '../styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { theme } from '../styles/theme';
import store from '../redux/store';

const withTheme = (component: JSX.Element, theme: ITheme) =>
  renderer
    .create(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
    .toJSON();

const withThemePureJSX = (component: JSX.Element, theme: ITheme) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);

const withReduxAndThemeProvider = (component: JSX.Element) =>
  renderer
    .create(
      <Provider store={store}>{withThemePureJSX(component, theme)}</Provider>
    )
    .toJSON();

const withRouterAndThemeProvider = (component: JSX.Element) =>
  renderer
    .create(<Router>{withThemePureJSX(component, theme)}</Router>)
    .toJSON();

const withRouterAndThemeProviderPureJSX = (component: JSX.Element) => (
  <Router>{withThemePureJSX(component, theme)}</Router>
);

const withRouterAndProviderAndThemeProvider = (component: JSX.Element) =>
  renderer
    .create(
      <Provider store={store}>
        {withRouterAndThemeProviderPureJSX(component)}
      </Provider>
    )
    .toJSON();

const renderWith = {
  withTheme,
  withReduxAndThemeProvider,
  withRouterAndThemeProvider,
  withRouterAndProviderAndThemeProvider,
};

export default renderWith;
