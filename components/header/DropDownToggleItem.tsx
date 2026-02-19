'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import MinusIcon from '@/components/header/MinusIcon';
import PlusIcon from '@/components/header/PlusIcon';

type DropdownItem = {
    label: string;
    href: string;
  };
  
  type DropdownToggleItemProps = {
    label: string;
    items: DropdownItem[];
  };

export default function DropDownToggleItem({ items, label }: DropdownToggleItemProps) {    
  // メニュー全体の開閉状態
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // サブツリーが開いているかどうかの状態
  const [isExpandedMenuOpen, setisExpandedMenuOpen] = useState<boolean>(false);

  // メニューが開いている時は、背景のスクロールを禁止する
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // アコーディオンの開閉を切り替える関数
  const toggleAccordion = () => {
    setisExpandedMenuOpen(!isExpandedMenuOpen);
  };

  // メニューのリンクをタップしたら、メニュー全体を閉じる関数
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={toggleAccordion}
        className="flex items-center justify-between w-full px-6 py-4 md:py-6 text-sm md:text-lg border-b hover:bg-gray-100 border-gray-50 text-gray-700 focus:outline-none"
      >
        {label}
        <span className="text-xl md:text-2xl font-light text-gray-400">
          {isExpandedMenuOpen ? <MinusIcon color="gray-400" /> : <PlusIcon color="gray-400" />}
        </span>
      </button>
    
      <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${isExpandedMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="py-2">
          {items.map((item, index) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                onClick={handleLinkClick}
                className="block py-3 md:py-4 pl-6 pr-6 text-xs md:text-base transition-colors hover:bg-gray-100 text-gray-700"
              >
                {item.label}
              </Link>
              {index === 0 && <hr className="border-gray-200 my-1 ml-2 mr-2" />}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}