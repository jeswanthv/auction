import React from 'react';

function Card({ name, budget, photo }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img class='rounded-lg h-28 w-28 -mb-10 z-10 ' src={photo} alt={name} />
      <div class='flex justify-center  p-2 rounded-lg'>
        <div class='flex justify-center flex-col items-center  shadow-lg  bg-gray-300 rounded-b-lg  max-w-sm p-2'>
          <div class='p-5 text-center '>
            <p class='text-gray-900 font-semibold text-3xl mb-4'>{budget}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
