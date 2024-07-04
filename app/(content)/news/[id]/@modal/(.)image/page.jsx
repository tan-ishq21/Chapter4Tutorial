import ModalBackdrop from '@/components/modal-backdrop';
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function InterceptedImagePage({params}){
    const newsItemId = params.id;
    const newsItem = await getNewsItem(newsItemId);

    if(!newsItem){
      notFound();
    }
  return (
    <>
        <ModalBackdrop />
        <dialog className='modal' open>
            <div className='fullscreen-image'>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            </div>
        </dialog>
    </>
  )
}

