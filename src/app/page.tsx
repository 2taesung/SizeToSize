'use client';

import Nav from '@src/components/Nav';
import defaultTheme from '@src/styles/defaultTheme';

import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

export default function Page() {
  useEffect(() => {
    console.log('여기');
  }, []);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => console.log('scope is: ', registration.scope));
    }
  }, []);

  return (
    <main>
      <ThemeProvider theme={defaultTheme}>
        <Normalize />
        <h1>Hello, Home page!{process.env.NEXT_PUBLIC_PRODUCTION}</h1>
      </ThemeProvider>
      <Nav />
    </main>
  );
}
