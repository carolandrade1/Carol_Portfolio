import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints/breakpoints';

export const Info = styled.div`
  order: 2;
  padding-right: 0;

  ${breakpointsMedia({
    md: css`
      order: 1;
      padding-right: 30px; 
    `,
  })}
`;

export const Descricao = styled.div`
  margin-bottom: 40px;

  p {
    line-height: 1.3;
    letter-spacing: 1px;
    text-align: justify;
    max-width: 500px;
    padding: 15px 0;
    margin: 0 auto;

    ${breakpointsMedia({
    md: css`
      gap: 25px;
      margin: 0 auto;
    `,
  })}
  }

`;

const Canais = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-self: start;
  gap: 18px;
  margin-bottom: 30px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  ${breakpointsMedia({
    md: css`
      gap: 25px;
  `,
  })}
  
  a {
    position: relative;
  }

  img {
    display: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;

    &:hover {
      display: none;
    }
  }

  a:hover img {
    display: initial;
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -150%);
  }
`;

export const Image = styled.div`
  order: 1;
  margin: 0 auto;

  ${breakpointsMedia({
    md: css`
      order: 2;
    `,
  })}

  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;

    ${breakpointsMedia({
    md: css`
      width: 350px;
      height: 350px;
      border-radius: 50%;
    `,
  })}
  }
`;

export default Canais;
