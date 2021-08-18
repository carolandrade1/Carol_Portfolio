import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/text';
import breakpointsMedia from '../../../theme/util/breakpoints';
import propToStyle from '../../../theme/util/propToStyle';

const ButtonGhost = css`
    background: transparent;
    outline: none;
    padding: 0;
`;

const ButtonDefault = css`
    color: white;
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.fonts.main.color};

    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
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

    ${propToStyle('margin')}
    ${propToStyle('display')}
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
    &:hover {
      opacity: .5;
    }
`;

export { Button as default };
