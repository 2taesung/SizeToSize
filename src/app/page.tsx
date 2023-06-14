'use client';

import Nav from '@src/components/Nav';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    console.log('여기');
  }, []);

  return (
    <main>
      <Nav />
      <h1>Hello, Home page!{process.env.NEXT_PUBLIC_PRODUCTION}</h1>
      <h1>Hello, Home page!</h1>
    </main>
  );
}
