
import React, { useState } from 'react';
import CustomerManager from './components/CustomerManager';
import ProductManager from './components/ProductManager';
import LoginPage from './components/LoginPage';
import { LogoutIcon } from './components/icons';

type View = 'customers' | 'products';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState<View>('customers');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const NavButton: React.FC<{ currentView: View; targetView: View; setView: (view: View) => void; children: React.ReactNode }> = ({ currentView, targetView, setView, children }) => (
    <button
      onClick={() => setView(targetView)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
        currentView === targetView
          ? 'bg-primary-600 text-white shadow-md'
          : 'text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-slate-800'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 font-sans">
      <header className="bg-white dark:bg-slate-800/50 backdrop-blur-sm shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              Textile ERP
            </h1>
            <div className="flex items-center space-x-4">
              <nav className="flex items-center space-x-2 p-1 bg-gray-200 dark:bg-slate-900 rounded-lg">
                <NavButton currentView={view} targetView="customers" setView={setView}>Customers</NavButton>
                <NavButton currentView={view} targetView="products" setView={setView}>Products</NavButton>
              </nav>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-slate-700/50 p-2 rounded-md transition-colors"
                aria-label="Logout"
              >
                <LogoutIcon className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {view === 'customers' ? <CustomerManager /> : <ProductManager />}
      </main>
    </div>
  );
};

export default App;
