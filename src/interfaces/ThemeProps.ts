export interface ThemeProps {
  theme: Theme;
  disabled?: boolean;
}

export interface Theme {
  primary: string;
  secondary: string;
  secondaryDisabled: string;
  textPrimary: string;
  textSecondary: string;
  background: string;

  danger: string;
  success: string;
  warning: string;

  google: string;
  facebook: string;
  apple: string;

  fontFamily: string;
  fontFamilySecondary: string;
}
