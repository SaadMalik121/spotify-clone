"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import React, { useState } from "react";

import { Database } from "../types_db";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

function SupabaseProvider({ children }: SupabaseProviderProps) {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}

export default SupabaseProvider;
