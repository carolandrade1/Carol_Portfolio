import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/util/breakpoints';
import propToStyle from '../../theme/util/propToStyle';

const Container = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    ${breakpointsMedia({
    md: css`
      max-width: 950px;
    `,
    lg: css`
      max-width: 1250px;
    `,
    xl: css`
      max-width: 1300px;
    `,
  })}
`;

export default Container;
