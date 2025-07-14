
'use client';

import { useState } from 'react';
import { submitContactForm } from '../../lib/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length > 500) return;

    setIsSubmitting(true);
    setError('');

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 8000);
      } else {
        setError('Failed to send message. Please try again or contact us directly.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <i className="ri-check-circle-fill text-4xl text-green-600 mb-4"></i>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-700 mb-4">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <div className="space-y-2 text-sm text-green-600">
          <p>Reference ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          <p>Expected response time: 2-4 hours during business hours</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
      
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors text-sm disabled:bg-gray-100"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors text-sm disabled:bg-gray-100"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors text-sm disabled:bg-gray-100"
              placeholder="Enter your phone number"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors text-sm pr-8 disabled:bg-gray-100"
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Product Question">Product Question</option>
              <option value="Design Consultation">Design Consultation</option>
              <option value="Order Support">Order Support</option>
              <option value="Custom Furniture">Custom Furniture</option>
              <option value="Wholesale Inquiry">Wholesale Inquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={500}
            rows={6}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-colors resize-none text-sm disabled:bg-gray-100"
            placeholder="Tell us about your furniture needs or questions..."
          ></textarea>
          <div className={`text-right text-sm mt-1 ${
            formData.message.length > 450 ? 'text-red-500' : 'text-gray-500'
          }`}>
            {formData.message.length}/500 characters
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <i className="ri-error-warning-line mr-2"></i>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || formData.message.length > 500 || !formData.name || !formData.email || !formData.subject || !formData.message}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <i className="ri-loader-4-line animate-spin mr-2"></i>
              Sending Message...
            </span>
          ) : (
            <>
              <i className="ri-send-plane-line mr-2"></i>
              Send Message
            </>
          )}
        </button>
      </form>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
          <i className="ri-time-line text-blue-600 mr-2"></i>
          Quick Response Times
        </h3>
        <p className="text-gray-600 text-sm">
          We typically respond to inquiries within 2-4 hours during business hours (9AM-6PM EST, Monday-Friday).
        </p>
      </div>
    </div>
  );
}
