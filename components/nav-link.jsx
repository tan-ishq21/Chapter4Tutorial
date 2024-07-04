'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavLinks = () => {
    const path = usePathname();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/news" className={path.startsWith('/news') ? 'active' : ''} >News</Link>
          </li>
          <li>
            <Link href="/archive" className={path.startsWith('/archive') ? 'active' : ''} >Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavLinks
