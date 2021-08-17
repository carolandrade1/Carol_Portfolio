import typographyVariants from './global/typographyVariants';
import colorsLight, { colorsDark } from './global/colors';
import breakpoints from './util/breakpoints';

export const ThemeLight = {
  colors: colorsLight,
  typographyVariants,
  breakpoints,
};

export const ThemeDark = {
  colors: colorsDark,
  typographyVariants,
  breakpoints,
};

export default { ThemeLight, ThemeDark };
