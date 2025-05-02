import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function Dashboard() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect("/login");

  return (
    <main className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Hello, {session.user.email}</h1>
        <p className="text-zinc-400 mb-6">
          Welcome to your Moneyger dashboard.
        </p>

        <form className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 space-y-4">
          {/* Placeholder: Add transaction form here */}
          <p className="text-sm text-zinc-500">Add your transactions here.</p>
        </form>

        <form action="/auth/signout" method="post" className="mt-10">
          <Button variant="destructive" type="submit">
            Logout
          </Button>
        </form>
      </div>
    </main>
  );
}
