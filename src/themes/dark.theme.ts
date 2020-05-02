import BrandsTheme from './shared/brands.theme';
import {Theme} from '~/interfaces/ThemeProps';

const DarkTheme: Theme = {
  fontFamily: 'copperplate',
  ...BrandsTheme,
  primary: '#222',
  secondary: 'rgba(230,230,230,.7)',
  textPrimary: '#fff',
  textSecondary: '#222',
  background: '#222',

  danger: '#e00909',
  warning: '#ffcc00',
  success: '#4BB543',
};

export default DarkTheme;
