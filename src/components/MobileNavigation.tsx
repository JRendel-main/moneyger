import { CreditCard, PieChart, Wallet, Bell } from "lucide-react";

export function MobileNavigation() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200">
      <div className="grid grid-cols-4 h-16">
        <button className="flex flex-col items-center justify-center text-blue-600">
          <Wallet className="h-5 w-5" />
          <span className="text-xs mt-1">Dashboard</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900">
          <CreditCard className="h-5 w-5" />
          <span className="text-xs mt-1">Accounts</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900">
          <PieChart className="h-5 w-5" />
          <span className="text-xs mt-1">Budget</span>
        </button>
        <button className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-900">
          <Bell className="h-5 w-5" />
          <span className="text-xs mt-1">Alerts</span>
        </button>
      </div>
    </div>
  );
}
