'use client';
import Nav from '@src/components/Nav';
import { countAtom } from '@src/lib/atoms';

import { useAtom } from 'jotai';
import { useEffect } from 'react';

export default function Page() {
  const [count, setCount] = useAtom(countAtom);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // navigator.serviceWorker.register('/service-worker.js');
    }
  }, []);

  const handleCount = () => {
    setCount(pre => pre + 1);
  };

  return (
    <main>
      <h1>Main</h1>
      <h1>development env:{process.env.NEXT_PUBLIC_TEST_DEV || '없음'}</h1>
      <h1>
        production env:{process.env.NEXT_PUBLIC_TEST_PRODUCTION || '없음'}
      </h1>
      <button onClick={handleCount}>+</button>
      {count}
      <Nav />
    </main>
  );
}
