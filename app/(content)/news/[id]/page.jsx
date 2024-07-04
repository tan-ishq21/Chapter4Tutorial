import { getNewsItem } from '@/lib/news';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function NewsContent({params}) {
  const newsId = params.id;
  const newsItem = await getNewsItem(newsId);

  if(!newsItem){
    notFound();
  }
  
  return (
    <article className='news-article'>
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
        <img src={`/images/news/${newsItem.image}`} alt="NewsItem Image" />
        </Link>
        <h1>{newsItem.title}</h1>
        <time datetime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}

