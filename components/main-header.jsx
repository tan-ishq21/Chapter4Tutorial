import Link from 'next/link';
import NavLinks from './nav-link';

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <NavLinks />
    </header>
  );
}