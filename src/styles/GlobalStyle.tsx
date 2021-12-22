import { createGlobalStyle } from 'styled-components';

import { ITheme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
      background-color: ${(props) => props.theme.colors.catskillWhite};
  }
  .container{
      padding: 0 50px;
  }
  @media ${(props) => props.theme.device.tablet} {
      .container {
        padding: 0 10px;
      }
  }
  `;
