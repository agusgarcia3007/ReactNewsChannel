import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import axios from 'axios';

const App = () => {

  const [category, setCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect(()=>{
    const apiFetch = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=a60ae17719c145f298269830e06f8619`;
      const news = await axios.get(url);

      setNews(news.data.articles);
    }
    apiFetch();
  },[category])



  return ( 
    <>
      <Header title='News App'/>

      <div className="container white">
        <Form 
          setCategory={setCategory}
        />
        <List 
          news={news}
        />
      </div>
    </>
   );
}
 
export default App;