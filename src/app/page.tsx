'use client';
import Nav from '@src/components/Nav';
import Steppers from '@src/components/Steppers';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // navigator.serviceWorker.register('/service-worker.js');
    }
  }, []);

  return (
    <main>
      <Nav />
      <Steppers />
    </main>
  );
}
