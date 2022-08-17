import React from 'react';
import './search.css';

export const Search = () => {
  return (
    <div className="flex flex-col justify-center">
  <div className="relative p-10 w-full sm:max-w-2xl sm:mx-auto">
    <div className="overflow-hidden z-0 rounded-full relative p-1">
      <form role="form" className="relative flex z-50 bg-white rounded-full">
        <input type="text" placeholder="Search for products" className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"/>
        <button className="backdrop-blur-xl text-black rounded-full font-semibold px-8 py-4 bg-blue bg-opacity-10 focus:bg-indigo-600 focus:outline-none">Search</button>
      </form>
      <div className="glow glow-1 z-10 bg-lightgreen absolute"></div>
      <div className="glow glow-2 z-20 bg-yellow absolute"></div>
      <div className="glow glow-3 z-30 bg-green absolute"></div>
      <div className="glow glow-4 z-40 bg-blue absolute"></div>
    </div>
  </div>
</div>
  )
}
