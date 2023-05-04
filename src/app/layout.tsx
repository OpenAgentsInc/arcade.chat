import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Arcade Chat',
  description: 'Launching May 2023',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + ' h-screen w-screen overflow-hidden bg-zinc-950 text-zinc-100 antialiased'}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
