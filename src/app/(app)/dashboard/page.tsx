'use client';

import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import { RedirectToSignIn } from '@clerk/nextjs';

export default function DashboardPage() {
  const { userId } = useAuth();
  if (!userId) {
    return <RedirectToSignIn />;
  }

  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Welcome to Your Dashboard!</h2>
            <p className="text-gray-300">Here you'll find an overview of your activities and key metrics.</p>
            {/* Add more dashboard widgets here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
                <p className="text-gray-400 mt-2">No new activity.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">Quick Stats</h3>
                <p className="text-gray-400 mt-2">Users: 100, Projects: 5</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white">Notifications</h3>
                <p className="text-gray-400 mt-2">You have 2 unread notifications.</p>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Account Settings</h2>
            <p className="text-gray-300">Manage your account preferences here.</p>
            {/* Add settings forms/options here */}
            <form className="mt-8 space-y-4">
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email:</label>
                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600" placeholder="your@example.com" />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">Password:</label>
                <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600" placeholder="********" />
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out">Save Changes</button>
            </form>
          </div>
        );
      case 'profile':
        return (
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">User Profile</h2>
            <p className="text-gray-300">View and edit your profile information.</p>
            {/* Add profile details here */}
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-gray-300"><span className="font-bold">Name:</span> John Doe</p>
              </div>
              <div>
                <p className="text-gray-300"><span className="font-bold">Username:</span> johndoe</p>
              </div>
              <div>
                <p className="text-gray-300"><span className="font-bold">Bio:</span> A passionate developer.</p>
              </div>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-6 transition duration-300 ease-in-out">Edit Profile</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-extrabold mb-8">Dashboard Overview</h1>

      <div className="mb-8 border-b border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition duration-300 ease-in-out ${
              activeTab === 'dashboard'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-300'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition duration-300 ease-in-out ${
              activeTab === 'settings'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-300'
            }`}
          >
            Settings
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition duration-300 ease-in-out ${
              activeTab === 'profile'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-300'
            }`}
          >
            Profile
          </button>
        </nav>
      </div>

      {renderContent()}
    </div>
  );
}
