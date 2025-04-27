import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, PiggyBank, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-600/20 to-emerald-400/10 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">
              Smart Money Management with MoneyGer
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Take control of your finances with our intuitive budget tracking app. Track spending, set budgets, and achieve your financial goals effortlessly.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/login">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-emerald-600/20 to-emerald-400/10 opacity-70 blur-2xl" />
              <Image
                src="/images/budget-dashboard.png"
                alt="MoneyGer Dashboard Preview"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">
            Everything you need to manage your money
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            MoneyGer provides all the tools you need to take control of your finances and make better spending decisions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-emerald-500/30 transition-colors">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-500/10">
                  <BarChart3 className="h-5 w-5 flex-none text-emerald-500" />
                </div>
                Track Spending
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">Monitor your expenses in real-time and get insights into your spending habits.</p>
              </dd>
            </div>
            <div className="flex flex-col p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-emerald-500/30 transition-colors">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-500/10">
                  <PiggyBank className="h-5 w-5 flex-none text-emerald-500" />
                </div>
                Set Budgets
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">Create and manage budgets for different categories to stay on track with your financial goals.</p>
              </dd>
            </div>
            <div className="flex flex-col p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-emerald-500/30 transition-colors">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-emerald-500/10">
                  <TrendingUp className="h-5 w-5 flex-none text-emerald-500" />
                </div>
                Financial Insights
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">Get detailed reports and analytics to help you make better financial decisions.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-600/20 to-emerald-400/10 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">
              Ready to take control of your finances?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Join thousands of users who are already managing their budgets effectively with MoneyGer.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/login">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400">
                  Start Tracking Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
