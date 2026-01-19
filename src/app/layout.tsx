import type { Metadata } from 'next';
import { Fraunces, Zalando_Sans_SemiExpanded } from 'next/font/google';
import '../styles/global.css';
import '../styles/main.scss';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
});

const zalandoSansSemiExpanded = Zalando_Sans_SemiExpanded({
  variable: '--font-zalando-sans-semi-expanded',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Christ the Good Shepherd – Online Companion',
  description:
    'An unofficial, volunteer-run website providing online resources for remote followers and viewers of Christ the Good Shepherd Church.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${zalandoSansSemiExpanded.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
