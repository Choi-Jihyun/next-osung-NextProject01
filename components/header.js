import Link from 'next/link'
import DarkModeToggleButton from './dark-mode-toggle-button';

export default function header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">오성 노트</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 text-gray-300 hover:text-white">HOME</Link>
            <Link href="/project" className="mr-5 text-gray-300 hover:text-white">척추동물</Link>
            <Link href="/call" className="mr-5 text-gray-300 hover:text-white">CALL</Link>
          </nav>
          {/* <DarkModeToggleButton/> */}
        </div>
      </header>
    </>
  );
};
