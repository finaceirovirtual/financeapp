import { useState } from 'react';

export default function Dashboard() {
  const [loading] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Saldo Total</h2>
            <p className="text-2xl font-bold text-green-600">R$ 0,00</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Receitas</h2>
            <p className="text-2xl font-bold text-blue-600">R$ 0,00</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Despesas</h2>
            <p className="text-2xl font-bold text-red-600">R$ 0,00</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Economia</h2>
            <p className="text-2xl font-bold text-purple-600">R$ 0,00</p>
          </div>
        </div>
      )}
    </div>
  );
}