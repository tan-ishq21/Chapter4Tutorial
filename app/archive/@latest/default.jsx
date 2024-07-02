import { getLatestNews } from '@/lib/news'
import Link from 'next/link';
import React from 'react'

const LatestPage = () => {
    const news = getLatestNews();
  return (
    <>
    <h1>Latest News</h1>
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
    </>
  )
}

export default LatestPage
