import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export const supabase = createClient(
  "https://zcygdpjmvuzibendcuzd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjeWdkcGptdnV6aWJlbmRjdXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4OTEyMzIsImV4cCI6MjAwNjQ2NzIzMn0.3FovX6mRLTMrKKRbAgsHbPZo0qfim0f3a7drc9tYHKo"
);
