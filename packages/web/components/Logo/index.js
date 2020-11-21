import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const LogoImage = styled.img`
  display: block;
  width: 45px;
  height: auto;
  ${props =>
    props.auto &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}

  @media (max-width: 1023px) {
    width: 35px;
  }
`;

export default function Logo({ logoSrc, title, ...props }) {
  return (
    <Link href="/">
      <a>
        <LogoImage src={logoSrc} alt={title} {...props} />
      </a>
    </Link>
  );
}
