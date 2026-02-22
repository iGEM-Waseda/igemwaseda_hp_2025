'use client';

import Image from "next/image";
import { useTranslations } from 'next-intl';
import HeroImage from "@/components/home/HeroImage";
import { Link } from "@/i18n/routing";
import { PageName } from "@/components/navigationName";
import LearnMore from "@/components/home/LearnMore";

export default function Home() {
  const t = useTranslations('home');
  const pages = PageName();
  return (
    <>
      <HeroImage /> {/* あんまモジュールわけする必要なかったヒーローイメージ */}

      <section className="w-full bg-white"> {/* About Us */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square absolute md:bottom-[-75px] z-30">
            <Image 
              src="/iGEM-Waseda_logo_trim.png" 
              alt="iGEM Waseda Team Working" 
              fill 
              className="p-4"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 md:aspect-square">
            <div className="mb-8">
              <h2 
                className="font-heading-en font-black text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-[#8f1727]"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                About Us
              </h2>
              <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-[#8f1727]">
                私たちについて
              </p>
            </div>

            <p className="2xl:max-w-[70%] text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 leading-loose mb-4 lg:mb-8">
              {t('home.aboutUs')}
            </p>

            <LearnMore href={pages[0].href} />
          </div>
        </div>
      </section>

      <section className="relative w-full py-20 md:py-32 flex items-center overflow-hidden"> {/* Projects */}
      
        {/* 1. 背景画像（最背面） */}
        
        <Image 
          src="/project-hero-image.jpg"
          alt="Waseda Campus"
          fill
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* 3. コンテンツ（最前面） */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            {/* 見出し */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 leading-tight tracking-tighter">
              Recruiting Members
            </h2>
            <p className="text-lg md:text-xl font-bold text-gray-200 mb-6 md:mb-8 tracking-widest">
              メンバー募集
            </p>

            {/* 本文（スマホでは text-sm にして読みやすく） */}
            <p className="text-sm md:text-base text-gray-100 leading-relaxed leading-loose mb-4 lg:mb-8">
              iGEM-Waseda では、春と冬を新歓期間として新メンバーを募集しています。
              これまでの知識や経験に関わらず、誰でも入会することが可能です。
            </p>

            {/* リンクボタン */}
            <Link 
              href="/recruit" 
              className="group inline-flex items-center gap-2 text-sm md:text-base font-bold text-white hover:text-[#dbae07] transition-colors"
            >
              詳しくはこちら
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                &gt;
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-white"> {/* Team */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image 
              src="/team-hero-image.png" 
              alt="iGEM Waseda Team Working" 
              fill 
              className="pb-4 md:pb-0"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 md:aspect-square">
            <div className="mb-8">
              <h2 
                className="font-heading-en font-black text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-[#8f1727]"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                Team
              </h2>
              <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-[#8f1727]">
                チーム
              </p>
            </div>

            <p className="2xl:max-w-[70%] text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 leading-loose mb-4 lg:mb-8">
              {t('home.team')}
            </p>

            <LearnMore href={pages[2].href} />
          </div>
        </div>
      </section>

      <section className="w-full bg-white"> {/* Members */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:hidden relative aspect-square">
            <Image 
              src="/home-hero-image.jpg" 
              alt="iGEM Waseda Team Working" 
              fill 
              className="pb-4 md:pb-0 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 md:aspect-square">
            <div className="mb-8">
              <h2 
                className="font-heading-en font-black text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-[#8f1727]"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                Members
              </h2>
              <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-[#8f1727]">
                メンバー(写真は今年度のものに置き換えたい)
              </p>
            </div>

            <p className="2xl:max-w-[70%] text-sm md:text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 leading-loose mb-4 lg:mb-8">
              {t('home.members')}
            </p>

            <LearnMore href={pages[3].href} />
          </div>

          <div className="hidden md:block relative w-full aspect-square">
            <Image 
              src="/home-hero-image.jpg"
              alt="iGEM Waseda Team Working" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
    
  );
}
