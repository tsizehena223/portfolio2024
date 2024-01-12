import React from 'react';

const Card = () => {
    return (
        <div className="flex sm:block mt-4 mx-8 bg-white shadow-lg rounded-lg overflow-hidden">
            <img
                className="w-full h-32 object-cover"
                src="https://placekitten.com/400/200"
                alt="Card"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
                <p className="mt-2 text-gray-600">
                    This is a sample card component with Tailwind CSS and React.js.
                </p>
            </div>
        </div>
    );
};

export default Card;
