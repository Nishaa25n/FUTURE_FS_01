
'use client';

import { useState } from 'react';
import { subscribeNewsletter } from '../lib/api';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const result = await subscribeNewsletter(email);
      
      if (result.success) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError('Successfull !');
      }
    } catch (err) {
      setError('Successfull !');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new arrivals, exclusive offers, and design inspiration delivered to your inbox
          </p>

          {isSubmitted ? (
            <div className="bg-green-500 text-white py-4 px-6 rounded-lg inline-block">
              <i className="ri-check-line text-xl mr-2"></i>
              Thank you for subscribing! Check your email for confirmation.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                  required
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !email.trim()}
                  className="bg-white hover:bg-gray-100 disabled:bg-gray-300 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  {isLoading ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </div>
              
              {error && (
                <div className="mt-4 text-red-200 text-sm">
                  {error}
                </div>
              )}
            </form>
          )}

          <p className="text-blue-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
