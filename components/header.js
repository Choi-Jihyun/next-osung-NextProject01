'use client'

import Link from 'next/link'
// import DarkModeToggleButton from './dark-mode-toggle-button';
import { useState } from 'react';


export default function Header() {
  const [selectedMenu, setSelectedMenu] = useState('HOME');
  

  return (
    <>
      <header className="text-gray-600 body-font">
      <link href="https://fonts.googleapis.com/css2?family=Gugi&display=swap" rel="stylesheet" />
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0" Click={() => setSelectedMenu('HOME')}>
            <span className={`ml-3 text-2xl gugi`}>오성 노트</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className={`mr-5 ${selectedMenu === 'HOME' ? "text-white" : "text-gray-300"} hover:text-white`} onClick={() => setSelectedMenu('HOME')}>HOME</Link>
            <Link href="/project" className={`mr-5 ${selectedMenu === '척추동물' ? "text-white" : "text-gray-300"} hover:text-white`} onClick={() => setSelectedMenu('척추동물')}>척추동물</Link>
            <Link href="/call" className={`mr-5 ${selectedMenu === 'CALL' ? "text-white" : "text-gray-300"} hover:text-white`} onClick={() => setSelectedMenu('CALL')}>CALL</Link>
          </nav>
          {/* <DarkModeToggleButton/> */}
        </div>

        <style jsx>{`
          .gugi {
            font-family: 'Gugi', cursive;
          }
        `}</style> 
      </header>
    </>
  );
};
