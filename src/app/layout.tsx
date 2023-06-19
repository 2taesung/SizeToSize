import StyledComponentsRegistry from '@src/lib/registry';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SizeToSize',
  description: 'You can find from size you have to size you will buy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="images/favicons/favicon.ico"
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="images/icons/icon-192x192.png" />
        <meta name="msapplication-TileColor" content="#FF98BA" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
