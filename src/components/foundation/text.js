import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/util/breakpoints';
import propToStyle from '../../theme/util/propToStyle';

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
            font-size: ${theme.typographyVariants.title.fontSize};
            font-weight: ${theme.typographyVariants.title.fontWeight};
            line-height: ${theme.typographyVariants.title.lineHeight};
        `}
    `,
  })}
    `,
  subTitle: css`
        font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
    `,
  paragraph1: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
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
};

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]};
    color: ${({ theme }) => theme.colors.fonts.main.color};
    ${propToStyle('padding')}
    ${propToStyle('marginBottom')}
    ${propToStyle('marginTop')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span', 'input']),
  variant: PropTypes.oneOf(['titleXS', 'title', 'subTitle', 'paragraph1', 'paragraph2', 'paragraph3']),
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};
