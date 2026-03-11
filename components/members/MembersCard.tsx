'use client';

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "next-intl";
import { MembersCardProps } from "@/lib/types";

export default function MembersCard({ nameJa, nameEn, imgSrc, membersCardProps, emailAddress, role, department }: {
  nameJa: string,
  nameEn: string,
  imgSrc: string,
  membersCardProps?: MembersCardProps,
  emailAddress?: string,
  role?: string, // 先生用
  department?: string // 先生用
}) {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const locale = useLocale();

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <button className="flex flex-col mx-auto w-40 sm:w-48 md:w-full text-left transition-all duration-300 ease-in-out hover:scale-105 active:scale-95" onClick={handleOpen}>
        <div className="relative w-full overflow-hidden aspect-square object-center bg-gray-100 overflow-hidden shadow-lg">
          <Image
            src={`/members/${imgSrc}`}
            alt={nameEn}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 300vw, 100vw"
          />
        </div>
        <h3 className="py-1 text-lg lg:text-xl font-bold text-gray-800">
          {nameJa}
        </h3>
        <p className="text-xs font-medium text-gray-500">
          {membersCardProps ? membersCardProps.role : role}
        </p>
        <p className="text-xs font-medium text-gray-500">
        {membersCardProps ? membersCardProps.department : department}
        </p>
      </button>

      {/* モーダル */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in" onClick={handleClose}>
          <div className="bg-white rounded-md p-2 w-11/12 max-w-xl animate-zoom-in" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="relative w-full overflow-hidden aspect-square object-center bg-gray-100 overflow-hidden shadow-lg rounded-md">
                <Image
                  src={`/members/${imgSrc}`}
                  alt={nameEn}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 300vw, 100vw"
                />
              </div>

              <div className="relative w-full h-full flex flex-col justify-center">
                <div className="absolute top-2 right-2 w-1/6 h-auto aspect-square">
                  <div className="relative w-full overflow-hidden aspect-square object-center overflow-hidden">
                    <Image 
                      src="/iGEM-Waseda_logo_trim.png" 
                      alt="iGEM - Waseda Team Logo" 
                      fill 
                      className="object-contain object-right"
                      sizes="(max-width: 768px) 300vw, 100vw"
                    />
                  </div>
                </div>

                <div className="border-b border-enji-text mb-2 md:mb-4 mr-2">
                  <p className="text-[10px] md:text-xs font-medium text-gray-500 w-4/5">
                    {membersCardProps ? membersCardProps.role : role}
                  </p>
                  <p className="text-[10px] md:text-xs font-medium text-gray-500 w-4/5">
                    {membersCardProps ? membersCardProps.department : department}
                  </p>
                  <h3 className="pt-[2px] pb-[1px] text-xl md:text-3xl font-bold text-gray-800">
                    {nameJa}
                  </h3>
                  <p className="text-[10px] md:text-xs font-medium text-gray-500">
                    {nameEn}
                  </p>
                </div>

                {membersCardProps && (
                  <div className="text-[10px] md:text-xs font-bold text-gray-800 flex flex-col gap-y-1 md:gap-y-2">
                    <p>
                      {locale === "ja" ? "高校" : "High School"}: {membersCardProps.highSchool}
                    </p>
                    <p>
                      {locale === "ja" ? "趣味" : "Hobbies"}: {membersCardProps.hobbies}
                    </p>
                    <p>
                      {locale === "ja" ? "一言" : "Message"}: {membersCardProps.message}
                    </p>
                    {emailAddress && (
                      <div className="flex items-center gap-2">
                        <a
                          href={`mailto:${emailAddress}`}
                          className="flex items-center justify-center text-gray-800 hover:text-yellow transition-colors"
                          aria-label="Send an email"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-3 h-3 lg:w-4 lg:h-4" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </a>
                        <p className="text-[10px] md:text-xs font-bold text-gray-800">
                          {emailAddress}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}