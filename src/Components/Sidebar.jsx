import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar, fetchHeadlines, country, setCountry, lang, setLang, category, setCategory, from, setFrom, to, setTo }) => {
  return (
    <div>
 
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-red-600 text-white px-3 py-2 rounded-r-md z-20 focus:outline-none"
        >
          &rarr;
        </button>
      )}


      <div
        className={`fixed top-0 left-0 h-full bg-red-800 text-gray-800 p-5 z-10 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-80 max-w-full lg:w-80`}
      >
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-3 right-3 text-white
            font-bold
            text-3xl px-2 py-1 rounded-md focus:outline-none"
          >
            &times; 
          </button>
        )}

        <h2 className="text-2xl font-medium mb-4 text-white ">Search Headlines!</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country (e.g., us)"
            className="p-3 rounded-md border border-gray-300 text-gray-800 focus:border-red-600"
          />

          <input
            type="text"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            placeholder="Language (e.g., en)"
            className="p-3 rounded-md border border-gray-300 text-gray-800 focus:border-red-600"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 rounded-md border border-gray-300 text-gray-800 focus:border-red-600"
          >
            <option value="">Category</option>
            <option value="general">General</option>
            <option value="world">World</option>
            <option value="nation">Nation</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports">Sports</option>
            <option value="science">Science</option>
            <option value="health">Health</option>
          </select>

          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="p-3 rounded-md border border-gray-300 text-gray-800 focus:border-red-600"
          />

          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="p-3 rounded-md border border-gray-300 text-gray-800 focus:border-red-600"
          />

          <button
            onClick={fetchHeadlines}
            className="bg-white text-red-800 px-4 py-2 rounded-md hover:bg-red-100
            font-medium focus:outline-none"
          >
            Fetch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;