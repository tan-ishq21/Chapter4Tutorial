import { DUMMY_NEWS } from '@/components/dummy-news'
import Link from 'next/link'
import React from 'react'

const NewsPage = () => {
  return (
    <div>
        <h1>NEWS PAGE</h1>
      <ul className='news-list'>
        {DUMMY_NEWS.map((newsItem) => (
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

export default NewsPage
