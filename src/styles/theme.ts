export interface ITheme {
  colors: Record<string, string>;
  fontSizes: Record<string, string>;
  borderRadius: string;
  device: Record<string, string>;
}

export const theme: ITheme = {
  colors: {
    catskillWhite: '#f3f7fa',
    white: '#ffffff',
    dodgerBlue: '#2196f3',
    gullGray: '#A0B0B9',
    codGray: '#111111',
    athensGray: '#E5E9EC',
  },
  fontSizes: {
    l: '18px',
    m: '14px',
    s: '12px',
  },
  borderRadius: '10px',
  device: {
    mobileS: '(max-width: 320px)',
    mobileM: '(max-width: 375px)',
    mobileL: '(max-width: 425px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
    laptopL: '(max-width: 1440px)',
    desktop: '(max-width: 2560px)',
  },
};
