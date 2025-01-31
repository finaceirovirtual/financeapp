import { useAuth } from '../contexts/AuthContext';
import { Bell, User } from 'lucide-react';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
          {user?.email}
        </h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
            <Bell className="h-6 w-6" />
          </button>
          <button className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}