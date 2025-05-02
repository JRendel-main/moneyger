import { SpendingCategory } from "@/types";

interface SpendingBreakdownProps {
  categories: SpendingCategory[];
}

export function SpendingBreakdown({ categories }: SpendingBreakdownProps) {
  const getCategoryColor = (index: number) => {
    switch (index) {
      case 0:
        return "bg-blue-500";
      case 1:
        return "bg-green-500";
      case 2:
        return "bg-yellow-500";
      case 3:
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Monthly Spending</h2>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {categories.map((category, index) => (
            <li key={index}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{category.name}</span>
                <span className="font-medium">{category.percentage}%</span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${getCategoryColor(index)}`}
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            View Detailed Report
          </button>
        </div>
      </div>
    </div>
  );
}
