import React from "react";
import { Link } from "react-router-dom";

export const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <div className="flex justify-center">
          <div className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mt-6">
          Order Successfully Placed!
        </h1>
        <p className="text-gray-600 mt-4">
          Your order has been placed successfully. Thank you for shopping with
          us!
        </p>
        <p className="text-gray-600 mt-2">Transaction ID: #123456789</p>

        <button
          onClick={() => (window.location.href = "/")} // Redirect to home or another page
          className="mt-6 bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};
