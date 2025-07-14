
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-phone-line',
      title: 'Phone Support',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri: 9AM-6PM EST',
      action: 'Call Now'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Support',
      info: 'hello@furniture.com',
      description: 'Response within 24 hours',
      action: 'Send Email'
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Live Chat',
      info: 'Chat with our team',
      description: 'Available during business hours',
      action: 'Start Chat'
    }
  ];

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all furniture items in original condition."
    },
    {
      question: "Do you offer delivery and assembly?",
      answer: "Yes, we provide white-glove delivery and professional assembly services."
    },
    {
      question: "Can I customize furniture pieces?",
      answer: "Absolutely! We offer customization options for most of our furniture pieces."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and offer financing options."
    }
  ];

  const handleContactMethod = (method: any) => {
    switch(method.title) {
      case 'Phone Support':
        window.location.href = `tel:${method.info.replace(/[^\d+]/g, '')}`;
        break;
      case 'Email Support':
        window.location.href = `mailto:${method.info}`;
        break;
      case 'Live Chat':
        alert('Live chat feature coming soon! For immediate assistance, please call us at +1 (555) 123-4567');
        break;
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+15551234567';
  };

  const handleLiveChat = () => {
    alert('Live chat feature coming soon! For immediate assistance, please call us at +1 (555) 123-4567');
  };

  const handleViewAllFAQs = () => {
    alert('Complete FAQ section coming soon! For immediate assistance, please contact us directly.');
  };

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                  <i className={`${method.icon} text-xl text-blue-600`}></i>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-gray-900 font-medium mb-1">{method.info}</p>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <button 
                    onClick={() => handleContactMethod(method)}
                    className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
                  >
                    {method.action} <i className="ri-arrow-right-line ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <button 
            onClick={handleViewAllFAQs}
            className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
          >
            View All FAQs <i className="ri-arrow-right-line ml-1"></i>
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
        <p className="mb-6 text-blue-100">
          Our customer service team is standing by to assist you with any questions about our furniture collections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleCallNow}
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-line mr-2"></i>
            Call Now
          </button>
          <button 
            onClick={handleLiveChat}
            className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            <i className="ri-chat-3-line mr-2"></i>
            Live Chat
          </button>
        </div>
      </div>
    </div>
  );
}
