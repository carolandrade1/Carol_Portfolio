import React from 'react';
import styled, { css } from 'styled-components';
import Link from '../../../common/link/link';
import breakpointsMedia from '../../../../theme/util/breakpoints';

const ContainerCircle = () => (
  <Link href="/projetos" className="circlelink" title="Mostrar projetos">
    <svg
      className="circle"
      viewBox="0 0 252 252"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M125.817 10.7636C150.363 10.4164 175.31 14.7627 195.304 28.9866C215.412 43.2918 227.727 65.5071 235.61 88.8719C243.566 112.452 247.691 137.881 240.032 161.559C232.366 185.261 214.275 203.717 193.844 218.004C173.704 232.088 150.404 241.611 125.817 241.431C101.349 241.252 78.2295 231.481 58.5104 217.013C38.8747 202.606 23.334 183.331 15.3138 160.354C7.16821 137.018 5.79539 111.538 13.4957 88.0516C21.1845 64.6001 37.3989 44.9335 57.7463 30.9325C77.7247 17.1855 101.558 11.1068 125.817 10.7636Z" stroke="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M128.887 1.00302C155.912 1.19495 182.082 10.5003 203.441 26.4615C224.335 42.0752 238.677 64.2 246.16 88.6404C253.489 112.581 252.049 137.706 244.837 161.68C237.425 186.32 225.607 210.079 204.812 226.092C183.404 242.577 156.28 251.615 128.887 250.967C101.911 250.329 77.2381 238.13 55.6222 222.563C34.2532 207.173 16.0053 187.75 7.34179 163.432C-1.41975 138.84 -0.835607 112.082 7.44507 87.3348C15.739 62.5482 31.7847 40.8556 53.5304 25.3969C75.3902 9.85695 101.725 0.810134 128.887 1.00302Z" stroke="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M124.234 8.0829C149.327 8.63835 172.62 19.5518 192.754 34.519C212.695 49.3431 228.956 68.6247 237.186 92.0508C245.555 115.873 246.529 141.841 238.914 165.913C231.255 190.123 215.867 211.478 194.876 225.802C174.282 239.855 149.174 244.528 124.234 244.17C99.591 243.816 75.0172 238.225 55.0528 223.794C35.0647 209.345 21.4212 187.972 13.9846 164.476C6.59336 141.123 6.62336 116.282 13.5928 92.8006C20.7059 68.8346 33.6075 46.6455 53.4711 31.436C73.68 15.9621 98.7748 7.51936 124.234 8.0829Z" stroke="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M125.181 6.38451C150.056 6.67557 173.388 16.3048 193.925 30.3246C214.974 44.6941 234.534 62.5617 242.772 86.6592C251.078 110.957 247.354 137.471 238.833 161.694C230.47 185.467 215.675 206.336 195.397 221.33C174.981 236.427 150.581 245.318 125.181 245.731C99.4805 246.15 74.2547 238.483 53.2817 223.643C32.1281 208.676 15.0229 187.76 8.02016 162.832C1.1829 138.493 7.12516 113.08 15.5231 89.2335C23.7393 65.9031 35.507 43.6232 55.2563 28.7021C75.2601 13.5887 100.099 6.09104 125.181 6.38451Z" stroke="black" />
    </svg>
    <video
      className="video"
      src="/video/projetosVideo.mp4"
      preload="auto"
      autoPlay
      muted
      loop
    />
    <svg className="arrow" width="5" height="5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.7071 4.29289L15.4142 8L11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071C9.90237 11.3166 9.90237 10.6834 10.2929 10.2929L11.5858 9H2C1.44771 9 1 8.55228 1 8C1 7.44772 1.44771 7 2 7H11.5858L10.2929 5.70711C9.90237 5.31658 9.90237 4.68342 10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#B488DA" />
    </svg>
  </Link>
);

const ContainerAnimation = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    ${breakpointsMedia({
    md: css`
      justify-content: flex-end;
    `,
  })}

    .circlelink {
      position: relative;
      width: 150px;
      height: 150px;
      z-index: 3;

    ${breakpointsMedia({
    md: css`
      width: 200px;
      height: 200px;
    `,
  })}
    }

    .circle {
      position: absolute;
      animation: none;
      width: 150px;
      height: 150px;

    ${breakpointsMedia({
    md: css`
      width: 200px;
      height: 200px;
      animation: rotation 10s infinite linear;
    `,
  })}
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
    
    .arrow {
      display: none;
      
    ${breakpointsMedia({
    md: css`
      display: initial;
      position: absolute;
      top: 33%;
      right: 30%;
      width: 40%;
      height: 40%;
      transform: rotate(-90deg);
      stroke: black;
      stroke-width: 0.2px;
      stroke-dasharray: 42.7;
      stroke-dashoffset: 0;
      animation: 3s draw infinite alternate;
    `,
  })}
    }

    @keyframes draw {
      to {
        stroke-dashoffset: 42.7;
      }
      from {
        stroke-dashoffset: 0;
      }
    }

    .video {
      display: initial;
      position: absolute;
      width: auto;
      border-radius: 5%;
      height: 170px;
      margin: 0 auto;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);

    ${breakpointsMedia({
    md: css`
      display: none;
    `,
  })}
    }

    .circlelink:hover .video {
        position: absolute;
        display: initial;
        top: -250px;
        left: -80px;
        width: 350px;
        height: 240px;
        object-fit: cover;
        z-index: 1;
        transform: none;
    }
`;

const CircleVideo = () => (
  <ContainerAnimation>
    <ContainerCircle />
  </ContainerAnimation>
);

export default CircleVideo;
