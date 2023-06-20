'use client';

import Nav from '@src/components/Nav';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // navigator.serviceWorker.register('/service-worker.js');
    }
  }, []);

  return (
    <main>
      <h1>development env:{process.env.NEXT_PUBLIC_TEST_DEV || '없음'}</h1>
      <h1>
        production env:{process.env.NEXT_PUBLIC_TEST_PRODUCTION || '없음'}
      </h1>
      <Nav />
    </main>
  );
}
