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
    color: ${({ theme }) => theme.colors.fonts.main.color};
    background-color: ${({ theme }) => theme.colors.background.main.color};

    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.details.main.color};
    }
`;

const Button = styled.button`
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.svg.main.color};
    padding: 10px 12px;

    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.paragraph3}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph2}
    `,
  })}

    &:disabled {
      cursor: not-allowed;
      opacity: .3;
    }
    ${({ fullWidth }) => fullWidth && css`
      width: 100%;
    `};

    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}

  ${propToStyle('width')}
  ${propToStyle('height')}
`;

export { Button as default };
