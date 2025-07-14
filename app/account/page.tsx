'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AccountPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      router.push('/auth');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto p-6 bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Welcome, {user.name} 👋</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Account Created:</strong> Just Now (Demo)</p>
            <p><strong>Status:</strong> Logged In ✅</p>
          </div>

          <div className="mt-6">
            <button
              onClick={() => {
                localStorage.removeItem('user');
                alert('You have been signed out.');
                window.location.href = '/';
              }}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md w-full"
            >
              Logout
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
