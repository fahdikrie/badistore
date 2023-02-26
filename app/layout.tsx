import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Inter } from 'next/font/google';
import 'server-only';

import { Database } from '@/lib/database/database.types';
import { createServerClient } from '@/utils/supabase-server';

import SupabaseListener from '../components/supabase-listener';
import SupabaseProvider from '../components/supabase-provider';
import './globals.css';
import Navbar from './navbar';

export type TypedSupabaseClient = SupabaseClient<Database>;

export const revalidate = 0;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <Navbar />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
