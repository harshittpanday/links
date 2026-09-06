import type { Metadata } from 'next';
import { Geist, Press_Start_2P } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-sans', subsets: ['latin'], display: 'swap' });
const pixel = Press_Start_2P({ variable: '--font-pixel', weight: '400', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Harshit Pandey',
  description: 'Student, builder, and developer based in Lucknow, India.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // The inline script restores a saved theme before first paint.
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var t=s==='light'||s==='dark'?s:'light';document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${geist.variable} ${pixel.variable}`}>{children}</body>
    </html>
  );
}
