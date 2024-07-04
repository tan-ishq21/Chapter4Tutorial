'use client';
import { DUMMY_NEWS } from '@/components/dummy-news';
import { notFound, useRouter } from 'next/navigation';
import React from 'react'

const InterceptedImagePage = ({params}) => {
  const router = useRouter();
    const newsItemId = params.id;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemId);

    if(!newsItem){
      notFound();
    }
  return (
    <>
        <div className='modal-backdrop' onClick={router.back}/>
        <dialog className='modal' open>
            <div className='fullscreen-image'>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            </div>
        </dialog>
    </>
  )
}

export default InterceptedImagePage
