import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import Characters from './components/Characters'
import Search from './components/Search'

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Characters isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;