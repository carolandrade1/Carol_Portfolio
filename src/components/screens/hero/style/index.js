import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints';

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
    text-align: left;
    max-width: auto;

    ${breakpointsMedia({
    md: css`
        max-width: 600px;
        margin-top: 20px;
        padding: 0 20px;
    `,
  })}

    p {
        text-align: justify;
        line-height: 1.5;
        max-width: 550px;
    }

    h1 {
        color: ${({ theme }) => theme.colors.details.main.color};
    }

    .contato {
        width: 130px;
        margin-bottom: 15px;
        position: relative;
        padding: 8px 12px;
        transition: all .2s ease;
        cursor: pointer;

    ${breakpointsMedia({
    md: css`
    padding: 8px 12px;
    `,
  })}

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            border-radius: 28px;
            background: ${({ theme }) => theme.colors.details.main.color};
            width: 35px;
            height: 35px;
            transition: all .3s ease;
        }
        span {
            position: relative;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 2px;
            text-transform: uppercase;
            vertical-align: middle;
        }
        &:hover {
            &:before {
            width: 100%;
            background: ${({ theme }) => theme.colors.details.main.color};
            }
        }
        &:active {
            transform: scale(.96);
        }
    }
`;

export default TextContainer;
