import React from 'react';

function Card({ name, budget, photo }) {
  return (
    <div class='flex justify-center bg-gray-900 p-2 rounded-lg'>
      <div class=' shadow-lg  max-w-sm p-2'>
        <img class='rounded-lg' src={photo} alt={name} />
        <div class='p-5 text-center'>
          <h5 class='text-gray-200 text-xl font-medium mb-2'>{name}</h5>
          <span className='text-gray-300 font-extrabold'>Budget: </span>
          <p class='text-gray-300 font-semibold text-xl mb-4'>{budget}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
