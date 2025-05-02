import { createClient } from "@/lib/supabase/server";

export interface Transaction {
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
}

export interface SummaryData {
  accountBalance: number;
  income: number;
  expenses: number;
  savings: number;
}

export interface MonthlySpendingData {
  categories: string[];
  amounts: number[];
}

export async function getUser() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error("Failed to fetch user");
  return data.user;
}

export async function getDashboardData(): Promise<{
  transactions: Transaction[];
  summary: SummaryData;
  monthlySpending: MonthlySpendingData;
}> {
  const supabase = createClient();
  
  // Replace with actual Supabase queries
  // For now, return mock data
  const transactions: Transaction[] = [
    { date: "2025-05-01", description: "Salary Payment", amount: 3200.0, type: "income" },
    { date: "2025-05-03", description: "Grocery Shopping", amount: 150.0, type: "expense" },
    { date: "2025-05-05", description: "Freelance Project", amount: 1200.0, type: "income" },
    { date: "2025-05-07", description: "Electricity Bill", amount: 200.0, type: "expense" },
  ];

  const summary: SummaryData = {
    accountBalance: 12450.75,
    income: 3200.0,
    expenses: 1845.3,
    savings: 1354.7,
  };

  const monthlySpending: MonthlySpendingData = {
    categories: ["Groceries", "Utilities", "Entertainment", "Transport", "Others"],
    amounts: [150.0, 200.0, 100.0, 50.0, 50.0],
  };

  return { transactions, summary, monthlySpending };
}