export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Welcome to <span className="text-green-400">Moneyger</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Your all-in-one budget tracking app. Manage expenses, control spending, and grow your savings.
          </p>
          <a
            href="/auth"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition"
          >
            Get Started
          </a>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            title="Track Every Peso"
            description="Easily log your daily expenses and income."
            icon="💸"
          />
          <FeatureCard
            title="Smart Insights"
            description="Visualize where your money goes with charts and stats."
            icon="📊"
          />
          <FeatureCard
            title="Secure & Private"
            description="Powered by Supabase. Your data stays yours."
            icon="🔐"
          />
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Moneyger. Built with ❤️.
        </footer>
      </div>
    </main>
  )
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
