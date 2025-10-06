
import React, { useState } from 'react';
import { TextileIcon } from './icons';

interface LoginPageProps {
    onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate network request
        setTimeout(() => {
            if (username === 'admin' && password === 'password') {
                onLogin();
            } else {
                setError('Invalid username or password.');
                setIsLoading(false);
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-900 flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
                    <div className="flex flex-col items-center mb-6">
                        <div className="bg-primary-100 dark:bg-primary-900/50 p-3 rounded-full mb-4">
                            <TextileIcon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Textile ERP</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Please sign in to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Username
                            </label>
                            <div className="mt-1">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full rounded-md border-gray-300 dark:border-slate-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm bg-gray-50 dark:bg-slate-700 dark:text-white"
                                    placeholder="admin"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-gray-300 dark:border-slate-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm bg-gray-50 dark:bg-slate-700 dark:text-white"
                                    placeholder="password"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-primary-400 disabled:cursor-not-allowed transition-colors"
                            >
                                {isLoading ? (
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : 'Sign In'}
                            </button>
                        </div>
                    </form>
                </div>
                <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                    Use username <span className="font-medium text-gray-700 dark:text-gray-300">admin</span> and password <span className="font-medium text-gray-700 dark:text-gray-300">password</span> to log in.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
