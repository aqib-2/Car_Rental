import React from 'react';
import { NotFoundImage } from '../../assets';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-800">
      <div className=" max-w-md text-center">
        <img
          src={NotFoundImage}
          alt="404 Not Found"
          className="w-[400px] h-[400px] mb-8"
        />
        <a
          href="/"
          className="px-6 py-3 bg-red-600 text-lg font-medium rounded hover:bg-red-700 transition"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;