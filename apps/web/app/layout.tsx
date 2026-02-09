import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Web App',
  description: 'Next.js workspace app',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
};

export default RootLayout;
