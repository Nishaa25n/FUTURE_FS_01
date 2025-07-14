import React from "react";

const PopupModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full animate-fadeIn">
        <p className="text-gray-800 text-base whitespace-pre-line">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
