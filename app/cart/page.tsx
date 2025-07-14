'use client';

import { useEffect, useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({ name: '', card: '', address: '' });

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(items);
  }, []);

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleDelete = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleBuyNow = () => {
    setShowPaymentDialog(true);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('✅ Payment Successful!');
    setCartItems([]);
    localStorage.removeItem('cart');
    setShowPaymentDialog(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-6 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-blue-600 font-semibold">${item.price * item.quantity}</p>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    ❌ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${getTotal()}</p>
            <button
              onClick={handleBuyNow}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Buy Now
            </button>
          </div>
        </>
      )}

      {/* Payment Dialog */}
      {showPaymentDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-md w-[400px] relative">
            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name on Card"
                required
                value={paymentInfo.name}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, name: e.target.value })}
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Card Number"
                required
                value={paymentInfo.card}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, card: e.target.value })}
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Address"
                required
                value={paymentInfo.address}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, address: e.target.value })}
                className="w-full border px-4 py-2 rounded"
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowPaymentDialog(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Pay ${getTotal()}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
