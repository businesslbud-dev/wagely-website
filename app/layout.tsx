import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Wagely — Work booked. Wages locked.', description: 'A clearer way to book work and protect wages.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
