import React from 'react';
import styled, { keyframes } from 'styled-components';

const circleFadeDelay = keyframes`
    0%,
    39%,
    100% {
        opacity: 0;
    }
    40% {
        opacity: 1;
    }
`;

const SpinnerWrapper = styled('div')`
  margin: 40px auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

const FullPageSpinnerWrapper = styled('div')`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 999999;
`;

const SpinnerBall = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #333;
    border-radius: 100%;
    -webkit-animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
    animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
  }

  &.singleSpinner2 {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);

    &:before {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
  }

  &.singleSpinner3 {
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg);

    &:before {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }
  }

  &.singleSpinner4 {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);

    &:before {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
  }

  &.singleSpinner5 {
    -webkit-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    transform: rotate(120deg);

    &:before {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
  }

  &.singleSpinner6 {
    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    transform: rotate(150deg);

    &:before {
      -webkit-animation-delay: -0.7s;
      animation-delay: -0.7s;
    }
  }

  &.singleSpinner7 {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);

    &:before {
      -webkit-animation-delay: -0.6s;
      animation-delay: -0.6s;
    }
  }

  &.singleSpinner8 {
    -webkit-transform: rotate(210deg);
    -ms-transform: rotate(210deg);
    transform: rotate(210deg);

    &:before {
      -webkit-animation-delay: -0.5s;
      animation-delay: -0.5s;
    }
  }

  &.singleSpinner9 {
    -webkit-transform: rotate(240deg);
    -ms-transform: rotate(240deg);
    transform: rotate(240deg);

    &:before {
      -webkit-animation-delay: -0.4s;
      animation-delay: -0.4s;
    }
  }

  &.singleSpinner10 {
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);

    &:before {
      -webkit-animation-delay: -0.3s;
      animation-delay: -0.3s;
    }
  }

  &.singleSpinner11 {
    -webkit-transform: rotate(300deg);
    -ms-transform: rotate(300deg);
    transform: rotate(300deg);

    &:before {
      -webkit-animation-delay: -0.2s;
      animation-delay: -0.2s;
    }
  }

  &.singleSpinner12 {
    -webkit-transform: rotate(330deg);
    -ms-transform: rotate(330deg);
    transform: rotate(330deg);

    &:before {
      -webkit-animation-delay: -0.1s;
      animation-delay: -0.1s;
    }
  }
`;

const SpinnerLoader = props => (
  <SpinnerWrapper>
    {Array.apply(null, { length: 12 }).map((e, i) => (
      <SpinnerBall className={`singleSpinner` + (i + 1)} key={i} />
    ))}
  </SpinnerWrapper>
);

const FullPageSpinner = props => (
  <FullPageSpinnerWrapper>
    <SpinnerLoader />
  </FullPageSpinnerWrapper>
);

export { FullPageSpinner, SpinnerLoader };
