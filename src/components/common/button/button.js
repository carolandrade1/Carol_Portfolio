import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/text';
import breakpointsMedia from '../../../theme/util/breakpoints';
import propToStyle from '../../../theme/util/propToStyle';

const ButtonGhost = css`
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
`;

const ButtonDefault = css`
    color: ${({ theme }) => theme.colors.fonts.main.color};;
    background-color: ${({ theme }) => theme.colors.background.main.color};
`;

const Button = styled.button`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.fonts.main.color};
    border: 2px solid ${({ theme }) => theme.colors.svg.main.color};
    padding: 3px 12px;

    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.paragraph2}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}

    &:disabled {
      cursor: not-allowed;
      opacity: .2;
    }
    ${({ fullWidth }) => fullWidth && css`
      width: 100%;
    `};

    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
    &:hover {
      opacity: .5;
    }

  ${propToStyle('width')}
  ${propToStyle('height')}
`;

export { Button as default };
