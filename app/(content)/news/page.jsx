'use client';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NewsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [news, setNews] = useState();
  useEffect(() => {
    async function fetchNews(){
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/news');
      if(!response.ok){
        setError('Failed to fetch');
        setIsLoading(false);
      }
      setIsLoading(false);
      const news = await response.json();
      setNews(news);
    }
    fetchNews();
  }, []);

  if(isLoading){
    return <p>Loading....</p>
  }

  if(error){
    return <p>{error}</p>
  }

  let newsContent;
  if(news){
    newsContent = 
    <ul className='news-list'>
      {news.map((newsItem) => (
          <li key={newsItem.id}>
              <Link href={`/news/${newsItem.slug}`}>
                  <img src={`/images/news/${newsItem.image}`} alt="NewsItem Image" />
                  <span>{newsItem.title}</span>
              </Link>
          </li>
      ))}
    </ul>
  }

  return (
    <div>
        <h1>NEWS PAGE</h1>
        {newsContent}
    </div>
  )
}

export default NewsPage
