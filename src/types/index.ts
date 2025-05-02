export interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  category: string;
}

export interface SpendingCategory {
  name: string;
  percentage: number;
}