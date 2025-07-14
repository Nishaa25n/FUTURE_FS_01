'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our furniture or need design assistance? We're here to help you create the perfect space.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}