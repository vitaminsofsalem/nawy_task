'use client';

import React from 'react';

import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html style={{ backgroundColor: '#F8E8EE', height: '100%' }} lang="en">
      <body style={{ height: '100%' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
