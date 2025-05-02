import { Transaction } from "@/types";

interface TransactionsTableProps {
  transactions: Transaction[];
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Recent Transactions
          </h2>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View all
          </a>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-full divide-y divide-gray-200">
          <div className="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-5">Description</div>
              <div className="col-span-3">Category</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-2 text-right">Amount</div>
            </div>
          </div>
          <div className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="px-6 py-4 whitespace-nowrap">
                <div className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-5 text-sm text-gray-900">
                    {transaction.description}
                  </div>
                  <div className="col-span-3 text-sm text-gray-500">
                    {transaction.category}
                  </div>
                  <div className="col-span-2 text-sm text-gray-500">
                    {transaction.date}
                  </div>
                  <div
                    className={`col-span-2 text-sm font-medium text-right ${
                      transaction.amount >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.amount >= 0 ? "+" : ""}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 rounded-b-lg">
        <button className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Load more
        </button>
      </div>
    </div>
  );
}
