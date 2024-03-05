import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import React from 'react';

import { AcmeLogo } from './logo';

export default function App() {
  return (
    <Navbar style={{}}>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">NAWY</p>
      </NavbarBrand>

      <NavbarContent justify="end"></NavbarContent>
    </Navbar>
  );
}
