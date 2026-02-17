'use client';

import { useState, useRef, useEffect } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = useLocale();
  
  // 外側クリック検知のためのRef
  const wrapperRef = useRef<HTMLDivElement>(null);

  // メニューの外側をタップした時に閉じる
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={wrapperRef}
      className="relative flex items-center justify-center"
      // PC: マウスが乗ったら開く、離れたら閉じる
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        // スマホ: タップで開閉を切り替える (トグル)
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className={`flex items-center justify-center focus:outline-none transition-colors ${
          isOpen ? 'text-[#b94047]' : 'text-gray-700 hover:text-[#b94047]'
        }`}
        aria-label="Language Switcher"
        aria-expanded={isOpen}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
          className="icon icon-tabler icons-tabler-outline icon-tabler-world"
          aria-hidden="true"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
      </button>

      {/* ドロップダウンメニュー */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="w-20 bg-white border border-gray-200 rounded-md shadow-lg py-2">
            {['ja', 'en'].map((loc) => (
              <Link
                key={loc}
                href={pathname}
                locale={loc}
                onClick={() => setIsOpen(false)} // 選んだらメニューを閉じる
                className={`block px-4 py-2 text-xs xl:text-sm text-center transition-colors hover:bg-gray-50 ${
                  currentLocale === loc ? 'font-bold text-[#b94047]' : 'text-gray-700'
                }`}
              >
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}