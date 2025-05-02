import "./globals.css";
import { createClient } from "@/lib/supabase/server";
import { SupabaseProvider } from "@/components/supabase-provider";
import { ThemeProvider } from "./providers/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <ThemeProvider>
          <SupabaseProvider initialSession={session}>
            {/* Theme Switcher */}
            <div className="fixed top-4 right-4 z-50">
              <ThemeSwitcher />
            </div>
            {children}
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
