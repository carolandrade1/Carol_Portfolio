import { css } from 'styled-components';

const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default function breakpointsMedia(cssByBreakpoint) {
  const breakpointNames = Object.keys(breakpoints);
  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointName) => css`
    @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
      ${cssByBreakpoint[breakpointName]}
    }
  `);
}
