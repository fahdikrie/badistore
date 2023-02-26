import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

import { Database } from '@/lib/database/database.types';

export const createBrowserClient = () =>
  createBrowserSupabaseClient<Database>();
