import { getNewsForYear } from '@/lib/news';
import Link from 'next/link';
import React from 'react'

const DynamicArchivePage = ({params}) => {
    const newsYear = params.year;
    const news = getNewsForYear(newsYear)
  return (
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
  )
}

export default DynamicArchivePage
