'use client';

import * as React from 'react';
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Link from 'next/link';
import Block from '@components/Block';
import Divider from '@components/Divider';

const PortfolioSidebar: React.FC = () => {
  return (
    <div>

      <Divider />
      <nav>
        <div><Link href="/portfolio">Home</Link></div>
        <div><Link href="/portfolio/projects">Projects</Link></div>
        <div><Link href="/portfolio/about">About</Link></div>
        <div><Link href="/portfolio/contact">Contact</Link></div>
      </nav>
      <Divider />
      {/* <Button as="a" href="/landing" theme="SECONDARY">Landing</Button> */}
    </div>
  );
};

export default PortfolioSidebar;
