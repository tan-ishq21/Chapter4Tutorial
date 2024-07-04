import Link from 'next/link'
import React from 'react'

export default async function NewsPage () {

  const response = await fetch('http://localhost:8080/news');
  if(!response.ok){
    throw new Error('Failed to Fetch News');
  }
  const news = await response.json();

  return (
    <div>
        <h1>NEWS PAGE</h1>
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
    </div>
  )
}

