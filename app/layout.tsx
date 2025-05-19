import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from './context/authContext';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'HR Operations Dashboard',
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}