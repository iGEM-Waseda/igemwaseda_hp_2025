'use client';

import { useState, useRef, useEffect } from 'react';
import { Link } from '@/i18n/routing';

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownNavItemProps = {
  label: string;
  items: DropdownItem[];
};

export default function DropdownNavItem({ items, label }: DropdownNavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className={`flex items-center gap-1 font-medium text-sm xl:text-lg transition-colors focus:outline-none ${
          isOpen ? 'text-[#b94047]' : 'text-gray-700 hover:text-[#b94047]' // ホバー時の色は#b94047(フッターの色とはちょっと違う)
        }`}
        aria-expanded={isOpen}
      >
        {label}
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 min-w-[150px]">
          <div className="bg-white border border-gray-200 rounded-md shadow-lg py-2">
            {items.map((item, index) => {
              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-5 py-3 text-xs xl:text-sm text-center transition-colors hover:bg-gray-50 hover:text-[#b94047] text-gray-700" // ホバー時の色は#b94047(フッターの色とはちょっと違う)
                  >
                    {item.label}
                  </Link>
                  {index === 0 && <hr className="border-gray-100 my-1" />}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}