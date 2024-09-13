import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 

const Navbar = ({ onSearch, setCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery) {
      onSearch(searchQuery);
    }
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">

      <div className="flex items-center">
        <h1 className="text-red-800 text-2xl font-bold">ACONEWS</h1>
      </div>
      <div className="flex justify-between items-center w-full max-w-lg mx-auto">
        <form onSubmit={handleSearch} className="flex items-center w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 pl-10 rounded-md w-full focus:outline-none 
              text-red-800"
            />
 
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-red-800" />
          </div>
        </form>
      </div>

    </nav>
  );
};

export default Navbar;
