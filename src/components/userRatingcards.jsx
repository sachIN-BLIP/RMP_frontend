import React, { useState } from 'react';

const UserRatingCard = () => {
  const [userRatings, setUserRatings] = useState([
    { id: 1, name: 'John Doe', rating: 4, comment: 'Great product!' },
    { id: 2, name: 'Jane Smith', rating: 5, comment: 'Excellent service!' },
    { id: 3, name: 'Michael Johnson', rating: 3, comment: 'Decent experience.' },
    // Add more user ratings here
  ]);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center text-3xl mb-4">User Ratings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userRatings.map((rating) => (
          <div key={rating.id} className="bg-white rounded-lg shadow-md p-4">
            <h5 className="text-xl font-semibold mb-2">{rating.name}</h5>
            <div className="flex items-center mb-2">
              <span className="mr-2 text-yellow-500">Rating:</span>
              <div className="text-yellow-500">
                {Array.from({ length: rating.rating }).map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 0l2.39 7.61h7.61l-5.87 4.26 2.38 7.61-5.87-4.27-5.87 4.27 2.38-7.61-5.87-4.26h7.61z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600">{rating.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRatingCard;
