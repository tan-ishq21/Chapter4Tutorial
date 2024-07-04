import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import Link from 'next/link';
import React from 'react'

const DynamicArchivePage = ({ params }) => {
    const filter = params.filter;

    const selctedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();
    if (selctedYear && !selectedMonth) {
        news = getNewsForYear(selctedYear);
        links = getAvailableNewsMonths(selctedYear);
    }
    if(selctedYear && selectedMonth){
        news = getNewsForYearAndMonth(selctedYear,selectedMonth);
        links = [];
    }
    let newsContent = <p>No News Found for the selected period</p>

    if (news && news.length > 0) {
        newsContent = <ul className='news-list'>
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

    console.log(filter);
   
    if((selctedYear && !getAvailableNewsYears().includes(+selctedYear)) || (selectedMonth && !getAvailableNewsMonths(selctedYear).includes(+selectedMonth))){
        throw new Error("Invalid Filter");
    }
    return (
        <>
        <header id='archive-header'>
            <nav>
                <ul>
                    {links.map((link) => {
                        const href = selctedYear ? `/archive/${selctedYear}/${link}` : `/archive/${link}`
                        return (
                        <li key={link}>
                            <Link href={href} >{link}</Link>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
        {newsContent}
        </>
    )
}

export default DynamicArchivePage
