"use client";

import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@/lib/supabase/client";

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
}
