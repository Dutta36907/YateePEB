"use client";

import React, { useState, useEffect, useMemo } from "react";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { Loader2 } from "lucide-react";

export default function SuperAdminPortalPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    let isMounted = true;

    async function initAuth() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (isMounted) {
          setUser(user);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Session check error:", err);
        if (isMounted) {
          setUser(null);
          setIsLoading(false);
        }
      }
    }

    initAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) {
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#070D18] flex flex-col items-center justify-center text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin text-orange-400 mb-3" />
        <p className="text-xs font-mono tracking-wider">INITIALIZING SUPER ADMIN SESSION...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <AdminLogin
        onLoginSuccess={async () => {
          setIsLoading(true);
          const { data } = await supabase.auth.getUser();
          setUser(data.user);
          setIsLoading(false);
        }}
      />
    );
  }

  return (
    <AdminDashboard
      user={user}
      onLogout={() => {
        setUser(null);
      }}
    />
  );
}
