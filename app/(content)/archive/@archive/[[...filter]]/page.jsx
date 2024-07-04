import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from '@/lib/news';
import Link from 'next/link';
import React, { Suspense } from 'react'

async function FilterHeader({year,month}){
    const availableYears = await getAvailableNewsYears();
    let links = availableYears;
    if((year && !availableYears.includes(year)) || (month && !getAvailableNewsMonths(year).includes(month))){
        throw new Error("Invalid Filter");
    }
    if (year && !month) {
        links = getAvailableNewsMonths(year);
    }
    if(year && month){
        links = [];
    }
    return (
        <header id='archive-header'>
            <nav>
                <ul>
                    {links.map((link) => {
                        const href = year ? `/archive/${year}/${link}` : `/archive/${link}`
                        return (
                        <li key={link}>
                            <Link href={href} >{link}</Link>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
async function FilteresNews({year,month}){
    let news;
    if(year && !month){
        news = await getNewsForYear(year);
    }
    else if(year && month){
        news = await getNewsForYearAndMonth(year,month)
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
    return newsContent;
}
export default async function DynamicArchivePage ({ params }) {
    const filter = params.filter;

    const selctedYear = filter?.[0];
    const selectedMonth = filter?.[1];
    
    return (
        <>
        <Suspense fallback={<p>Loading Filter....</p>}>
            <FilterHeader year={selctedYear} month={selectedMonth} />
        </Suspense>
        <Suspense fallback={<p>Loading News...</p>}>
            <FilteresNews year={selctedYear} month={selectedMonth} />
        </Suspense>
        </>
    )
}

