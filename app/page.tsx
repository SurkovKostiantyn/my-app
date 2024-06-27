'use client'

import Counter from './components/Counter';
import Navigation from "@/app/components/Navigation";

export default function Home() {

    const navLinks = [
        { href: '/posts', label: '...visit /posts' }
    ];

    const footerLinks = [
        { href: 'https://github.com/SurkovKostiantyn/my-app', label: '...check github'},
        { href: 'https://my-app-42e1.vercel.app', label: '...check Versel'},
    ];

  return (
      <>
          <Navigation links={navLinks} />

          <Counter/>

          <Navigation links={footerLinks} />
      </>
  );
}
