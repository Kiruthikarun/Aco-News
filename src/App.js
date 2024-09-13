import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import NewsCard from './Components/NewsCard';
import './App.css';

const App = () => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState(''); 
  const [country, setCountry] = useState('');
  const [lang, setLang] = useState('en');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  useEffect(() => {
    if(category){ 
      fetchHeadlines();
    }
  }, [category]);

  const fetchHeadlines = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/news/headlines', {
        params: { country, lang, category, from, to }
      });
      console.log(category);
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching headlines", error);
    }
    setLoading(false);
  };

  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/news/search?q=${query}`);
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
    setLoading(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getPageTitle = () => {
    if (searchQuery) return "Search Results";
    if (category === 'technology') return "Technology Headlines";
    if (category === 'india') return "India Headlines";
    if (category === 'sports') return "Cricket Headlines";
    if (category === 'entertainment') return "Entertainment News";
    if (category === 'business') return "Business News";
    return "Today's Top Headlines";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onSearch={handleSearch} setCategory={setCategory} />

      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        fetchHeadlines={fetchHeadlines}
        country={country}
        setCountry={setCountry}
        lang={lang}
        setLang={setLang}
        category={category}
        setCategory={setCategory}
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
      />

\
      <div className={`p-5 transition-all duration-300 ease-in-out ${sidebarOpen ? 'ml-80' : 'ml-0'}`}>
        {loading && <h2 className="text-2xl text-center text-gray-600">Fetching News...</h2>}

        <h2 className="text-3xl font-bold mb-4">{getPageTitle()}</h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
          {news.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              image={article.image}
              url={article.url}
              source={article.source.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
