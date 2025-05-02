"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  CreditCard,
  PieChart,
  Settings,
  Bell,
  User,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";


export default function Navbar() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    if (darkMode) {
      // Switch to light mode
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      // Switch to dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Accounts", href: "/accounts", icon: CreditCard },
    { name: "Budget", href: "/budget", icon: PieChart },
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile top navigation */}
      <div className="lg:hidden">
        <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="ml-3">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Moneyger
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="sr-only">Toggle dark mode</span>
              {darkMode ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="sr-only">View profile</span>
              <User className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-40 flex ${
          sidebarOpen ? "" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-gray-600 ${
            sidebarOpen
              ? "bg-opacity-75 transition-opacity ease-linear duration-300"
              : "bg-opacity-0 transition-opacity ease-linear duration-300 opacity-0"
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar panel */}
        <div
          className={`relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-900 ${
            sidebarOpen
              ? "transform transition ease-in-out duration-300 translate-x-0"
              : "transform transition ease-in-out duration-300 -translate-x-full"
          }`}
        >
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <div className="h-8 w-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                Moneyger
              </span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                >
                  <item.icon
                    className="mr-4 h-6 w-6 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Dark mode toggle in mobile sidebar */}
            <div className="mt-6 px-4">
              <button
                onClick={toggleDarkMode}
                className="flex w-full items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
                {darkMode ? (
                  <>
                    <Sun
                      className="mr-4 h-6 w-6 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                    />
                    Light mode
                  </>
                ) : (
                  <>
                    <Moon
                      className="mr-4 h-6 w-6 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                    />
                    Dark mode
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-2 py-2 text-base font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
            >
              <LogOut
                className="mr-4 h-6 w-6 text-red-500 dark:text-red-400"
                aria-hidden="true"
              />
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <div className="h-8 w-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                Moneyger
              </span>
            </div>
            <nav className="mt-8 flex-1 px-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                >
                  <item.icon
                    className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Dark mode toggle in desktop sidebar */}
            <div className="mt-auto px-4">
              <button
                onClick={toggleDarkMode}
                className="flex w-full items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
              >
                {darkMode ? (
                  <>
                    <Sun
                      className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                    />
                    Light mode
                  </>
                ) : (
                  <>
                    <Moon
                      className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                    />
                    Dark mode
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
            >
              <LogOut
                className="mr-3 h-5 w-5 text-red-500 dark:text-red-400"
                aria-hidden="true"
              />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
