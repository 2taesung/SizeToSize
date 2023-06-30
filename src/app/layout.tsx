import StyledComponentsRegistry from '@src/lib/registry';

import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'SizeToSize',
  description: 'You can find from size you have to size you will buy',
};

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

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
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
