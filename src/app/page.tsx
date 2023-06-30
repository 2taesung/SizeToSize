'use client';
import Nav from '@src/components/Nav';
import Steppers from '@src/components/Steppers';
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
      <Nav />
      <Steppers />
      <p>development env:{process.env.NEXT_PUBLIC_TEST_DEV || '없음'}</p>
      <h1>
        production env:{process.env.NEXT_PUBLIC_TEST_PRODUCTION || '없음'}
      </h1>
      <button onClick={handleCount}>+</button>
      {count}
    </main>
  );
}
