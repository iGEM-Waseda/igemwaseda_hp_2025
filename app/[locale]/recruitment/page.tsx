'use client';

import Image from 'next/image';
// 新歓期間のみコメントを外す
// import { useState, useEffect, useCallback } from 'react';
import { useTranslations, useLocale } from "next-intl";
import '@/app/globals.css'

// 新歓期間のみコメントを外す
// 新歓の度にチラシを変える
// const flyers = [
//   { src: '/flyer-1.jpg', alt: 'Recruiting Flyer 1' },
//   { src: '/flyer-2.jpg', alt: 'Recruiting Flyer 2' },
// ];

export default function Recruitment() {
  const t = useTranslations('recruitment');
  const locale = useLocale();
  const qaList = t.raw('qa') as { question: string; answer: string }[];

  // 新歓期間のみコメントを外す
  // チラシをクリックしたら浮かび上がるようにするためのコード(Geminiに丸投げ)
  // const [isOpen, setIsOpen] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const openModal = (index: number) => {
  //   setCurrentIndex(index);
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // const prevImage = useCallback(() => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + flyers.length) % flyers.length);
  // }, []);

  // const nextImage = useCallback(() => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % flyers.length);
  // }, []);

  // useEffect(() => {
  //   if (!isOpen) return;

  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') closeModal();
  //     if (e.key === 'ArrowLeft') prevImage();
  //     if (e.key === 'ArrowRight') nextImage();
  //   };

  //   window.addEventListener('keydown', handleKeyDown);
  //   document.body.style.overflow = 'hidden';

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //     document.body.style.overflow = '';
  //   };
  // }, [isOpen, prevImage, nextImage]);

  return (
    <>
      <div className="mt-[48px] xl:mt-[64px]" /> {/* ヘッダー分だけ下げる */}

      <section className="w-full relative">
        <div className="w-full aspect-[3/1]">
          <div className="relative aspect-auto h-full">
            <Image 
              src="/recruiting-hero-image.jpg"
              alt="iGEM - Waseda Won the Village Prize at iGEM 2024"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 300vw, 100vw"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/65 z-0 block" />

        <div className="absolute inset-0 z-30 grid grid-cols-2 px-8 py-4 md:px-24">
          <div className="flex flex-col justify-center">
            <h3
              className="font-heading-en font-black text-2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-white"
              style={{ fontFamily: '"Arial Black", sans-serif' }}
            >
              Recruiting<br />Members
            </h3>
            <p className="text-sm md:text-base lg:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-white">
              メンバー募集
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        {/* <p className="text">
          {t('intro')}
        </p> */}

        {/* 幹事長のお言葉 */}
        <div className="mx-auto px-4 py-4 md:px-0 grid grid-cols-1 md:grid-cols-4">
          <div className="pb-6 md:pb-0 md:col-span-1 flex flex-col items-center justify-center">
            <Image
              src="/masahiro-chiba.png"
              alt="Masahiro Chiba"
              width={867}
              height={951}
              className="aspect-square object-cover object-center mx-4 md:mx-0 mb-2 md:mb-4 w-48 sm:w-64 md:w-full bg-gray-100 overflow-hidden shadow-lg" // 正方形にカット
              sizes="(max-width: 768px) 300vw, 100vw"
            />
            <p className={`py-4 text-center ${locale === "ja" ? "text-sm lg:text-base" : "text-xs lg:text-sm"} font-medium text-gray-500 whitespace-pre-wrap`}>
              {t('affiliation')}
            </p>
            <h3 className={`${locale === "ja" ? "text-2xl lg:text-4xl" : "text-xl lg:text-3xl"} font-bold text-gray-800 whitespace-pre-wrap`}>
              {t('name')}
            </h3>
          </div>
          <div className="md:col-span-3 text-center md:text-left mx-4 md:mx-8 p-4 bg-gray-300 flex items-center justify-center">
            <p className="text">
              iGEM - Waseda では、春（4月ごろ）と冬（12月ごろ）を新歓期間として新メンバーを募集しています。これまでの知識や経験に関わらず、誰でも入会することが可能です。iGEM - Waseda では、原則として活動は学部1～3年生としています。入会希望者が多くなった場合には選考を行う場合がございます。新歓の新歓のイベントについては Instagram や X で順次お知らせします。
            </p>
          </div>
        </div>

        {/* 新歓チラシ(新歓期間のみコメントを外す) */}
        {/* <h1 className="heading">
          {t('flyer')}
        </h1> */}

        {/* 新歓チラシ(コードはGeminiに丸投げ、新歓期間のみコメントを外す) */}
        {/* <div className="flex items-center justify-center gap-4 mb-8">
          {flyers.map((flyer, index) => (
            <div 
              key={index} 
              className="relative cursor-pointer group w-[45%] aspect-[1080/1350] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              onClick={() => openModal(index)}
            >
              <Image
                src={flyer.src}
                alt={flyer.alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {isOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeModal} 
          >
            <div className="absolute inset-0 bg-black/90 animate-fadeIn" />

            <div 
              className="relative max-w-7xl max-h-[90vh] flex items-center justify-center animate-zoomIn"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={flyers[currentIndex].src}
                alt={flyers[currentIndex].alt}
                width={1080} 
                height={1350}
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg"
                sizes="90vw"
                priority
              />

              <button 
                onClick={closeModal} 
                className="absolute top-[-40px] right-0 p-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
              </button>

              <button 
                onClick={prevImage} 
                className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-white/30 transition-colors"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
              </button>

              <button 
                onClick={nextImage} 
                className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 p-3 bg-white/10 text-white rounded-full hover:bg-white/30 transition-colors"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
              </button>

              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white text-sm">
                {currentIndex + 1} / {flyers.length}
              </div>

            </div>
          </div>
        )}

        <style jsx global>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
          .animate-zoomIn { animation: zoomIn 0.3s ease-out; }
        `}</style> */}

        {/* Q&Aセクション */}
        <h1 className="heading">
          Q & A
        </h1>
        {qaList.map((qa, index) => (
          <div key={index} className="mb-2">
            <p className="text">
              <strong className="font-bold">Q. {qa.question}</strong>
              <br />
              <span className="text-enji-text">A. {qa.answer}</span>
            </p>
          </div>
          ))
        }
      </section>
    </>
  );
}