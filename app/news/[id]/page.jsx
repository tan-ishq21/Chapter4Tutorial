import { DUMMY_NEWS } from '@/components/dummy-news';
import { notFound } from 'next/navigation';
import React from 'react'

const NewsContent = ({params}) => {
  const newsId = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsId);

  if(!newsItem){
    notFound();
  }
  
  return (
    <article className='news-article'>
      <header>
        <img src={`/images/news/${newsItem.image}`} alt="NewsItem Image" />
        <h1>{newsItem.title}</h1>
        <time datetime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}

export default NewsContent