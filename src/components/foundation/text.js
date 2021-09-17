import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import Link from '../common/link/link';
import breakpointsMedia from '../../theme/util/breakpoints/breakpoints';
import propToStyle from '../../theme/util/propToStyle/propToStyle';

export const TextStyleVariantsMap = {
  titleXS: css`
      ${({ theme }) => css`
          font-size: ${theme.typographyVariants.titleXS.fontSize};
          font-weight: ${theme.typographyVariants.titleXS.fontWeight};
          line-height: ${theme.typographyVariants.titleXS.lineHeight};
      `}
    ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
          font-size: ${theme.typographyVariants.titleS.fontSize};
          font-weight: ${theme.typographyVariants.titleS.fontWeight};
          line-height: ${theme.typographyVariants.titleS.lineHeight};
      `}
    `,
    lg: css`
      ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
      `}
    `,
  })}
    `,
  subTitleXS: css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.subTitleXS.fontSize};
            font-weight: ${theme.typographyVariants.subTitleXS.fontWeight};
            line-height: ${theme.typographyVariants.subTitleXS.lineHeight};
        `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.subTitle.fontSize};
            font-weight: ${theme.typographyVariants.subTitle.fontWeight};
            line-height: ${theme.typographyVariants.subTitle.lineHeight};
        `}
    `,
  })}
    `,
  paragraph1XS: css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.paragraph1XS.fontSize};
            font-weight: ${theme.typographyVariants.paragraph1XS.fontWeight};
            line-height: ${theme.typographyVariants.paragraph1XS.lineHeight};
        `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.paragraph1.fontSize};
            font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
            line-height: ${theme.typographyVariants.paragraph1.lineHeight};
        `}
    `,
  })}
    `,
  paragraph2: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
    `,
  paragraph3: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph3.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph3.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph3.lineHeight};
    `,
  paragraph4: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph4.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph4.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph4.lineHeight};
    `,
  paragraph5: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph5.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph5.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph5.lineHeight};
    `,
};

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]};
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')}
    ${propToStyle('lineHeight')}
    ${propToStyle('marginBottom')}
    ${propToStyle('padding')}
    ${propToStyle('zIndex')}
`;

export default function Text({
  tag, variant, children, href, ...props
}) {
  return href
    ? (
      <TextBase
        as={Link}
        variant={variant}
        href={href}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </TextBase>
    )
    : (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <TextBase as={tag} variant={variant} {...props}>
        {children}
      </TextBase>
    );
}

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span', 'input']),
  variant: PropTypes.oneOf(['titleXS', 'title', 'subTitleXS', 'subTitle', 'paragraph1', 'paragraph1XS', 'paragraph2', 'paragraph3', 'paragraph4', 'paragraph5']),
  children: PropTypes.node,
  href: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph3',
  children: null,
  href: '',
};
