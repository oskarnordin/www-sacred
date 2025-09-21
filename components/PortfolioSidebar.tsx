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
  <div><Link href="/portfolio">About</Link></div>
        <div><Link href="/portfolio/projects">Projects</Link></div>
  <div><Link href="/portfolio/tech-stack">Tech Stack</Link></div>
        <div><Link href="/portfolio/contact">Contact</Link></div>
      </nav>
      <Divider />
    </div>
  );
};

export default PortfolioSidebar;
