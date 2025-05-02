import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/Navbar";
import {
  CreditCard,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Calendar,
  Wallet,
} from "lucide-react";
import { SummaryCard } from "@/components/SummaryCard";
import { TransactionsTable } from "@/components/TransactionsTable";
import { SpendingBreakdown } from "@/components/SpendingBreakdown";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Transaction, SpendingCategory } from "@/types";

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Sample data - in a real app, you would fetch this from your database
  const accountBalance = 12450.75;
  const recentTransactions: Transaction[] = [
    {
      id: 1,
      description: "Grocery Store",
      amount: -85.32,
      date: "May 2",
      category: "Groceries",
    },
    {
      id: 2,
      description: "Salary Deposit",
      amount: 3200.0,
      date: "May 1",
      category: "Income",
    },
    {
      id: 3,
      description: "Netflix Subscription",
      amount: -15.99,
      date: "Apr 30",
      category: "Entertainment",
    },
    {
      id: 4,
      description: "Restaurant Payment",
      amount: -54.8,
      date: "Apr 28",
      category: "Dining",
    },
  ];

  const spendingCategories: SpendingCategory[] = [
    { name: "Housing", percentage: 35 },
    { name: "Food", percentage: 20 },
    { name: "Transportation", percentage: 15 },
    { name: "Entertainment", percentage: 10 },
    { name: "Other", percentage: 20 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <div className="lg:pl-64 pt-16">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Welcome Header */}
          <DashboardHeader userEmail={user?.email} />

          {/* Summary Cards - Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <SummaryCard
              title="Account Balance"
              value={`$${accountBalance.toLocaleString()}`}
              icon={<Wallet className="h-6 w-6 text-white" />}
              iconBgColor="bg-blue-500"
            />
            <SummaryCard
              title="Monthly Income"
              value="$3,200.00"
              icon={<ArrowUpRight className="h-6 w-6 text-white" />}
              iconBgColor="bg-green-500"
            />
            <SummaryCard
              title="Monthly Expenses"
              value="$1,845.30"
              icon={<ArrowDownRight className="h-6 w-6 text-white" />}
              iconBgColor="bg-red-500"
            />
            <SummaryCard
              title="Monthly Savings"
              value="$1,354.70"
              icon={<PieChart className="h-6 w-6 text-white" />}
              iconBgColor="bg-purple-500"
            />
          </div>

          {/* Main Content - Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TransactionsTable transactions={recentTransactions} />
            </div>
            <div className="lg:col-span-1">
              <SpendingBreakdown categories={spendingCategories} />
            </div>
          </div>
        </main>
      </div>

      <MobileNavigation />
    </div>
  );
}

function DashboardHeader({ userEmail }: { userEmail?: string | null }) {
  return (
    <div className="md:flex md:items-center md:justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold">
          Welcome, {userEmail?.split("@")[0] || "User"}
        </h1>
        <p className="text-gray-500 mt-1">
          Here's your financial overview for May 2025
        </p>
      </div>
      <div className="mt-4 md:mt-0 flex space-x-3">
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <DollarSign className="h-4 w-4 mr-2" />
          Add Transaction
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <Calendar className="h-4 w-4 mr-2" />
          View Reports
        </button>
      </div>
    </div>
  );
}
