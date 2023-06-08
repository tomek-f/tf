import { createClient } from '@supabase/supabase-js';

import type { Country, Todo, Todo2 } from '../types/data';

interface Database {
  public: {
    Tables: {
      countries: {
        Row: Country; // The data expected to be returned from a "select" statement.
        Insert: object; // The data expected passed to an "insert" statement.
        Update: object; // The data expected passed to an "update" statement.
      };
      todos: {
        Row: Todo; // The data expected to be returned from a "select" statement.
        Insert: { task: string }; // The data expected passed to an "insert" statement.
        Update: { is_complete: boolean; user_id: number }; // The data expected passed to an "update" statement.
      };
      todos2: {
        Row: Todo2; // The data expected to be returned from a "select" statement.
        Insert: { task: string }; // The data expected passed to an "insert" statement.
        Update: { is_complete: boolean }; // The data expected passed to an "update" statement.
      };
    };
    Views: object;
    Functions: object;
  };
}

// todo some BS here
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const supabase = createClient<Database, 'public', Database['public']>(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
);
