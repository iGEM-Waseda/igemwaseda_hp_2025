'use client';

import Image from "next/image";
import { useTranslations } from 'next-intl';
import HeroImage from "@/components/home/HeroImage";
import { PageName } from "@/components/navigationName";
import LearnMore from "@/components/home/LearnMore";

export default function Home() {
  const t = useTranslations('home');
  const pages = PageName();
  return (
    <>
      <HeroImage /> {/* あんまモジュールわけする必要なかったヒーローイメージ */}

      <section className="w-full bg-white"> {/* About Us */}
        <div className="grid grid-cols-1 md:grid-cols-2"> {/* PCではロゴとテキストを横並び、スマホではロゴをテキストの上に配置 */}
          <div className="relative aspect-square absolute md:bottom-[-50px] xl:bottom-[-75px] z-30">
            <Image 
              src="/iGEM-Waseda_logo_trim.png" 
              alt="iGEM - Waseda Team Logo" 
              fill 
              className="p-4"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 aspect-square">
            <div className="mb-8">
              <h2 
                className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-enji-text"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                About Us
              </h2>
              <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text">
                私たちについて
              </p>
            </div>

            <p className="text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 leading-loose mb-4 lg:mb-8">
              {t('home.aboutUs')}
            </p>

            <LearnMore href={pages[0].href} />
          </div>
        </div>
      </section>

      <section className="w-full relative"> {/* Projects */}
        {/* PCでは写真+黒不透明度65%の背景の上に文字を配置。スマホでは縦に並べる. */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:aspect-[2/1]">
          <div className="bg-black hidden md:block relative h-full md:col-span-1" />
          <div className="relative md:col-span-2 aspect-square md:aspect-auto h-full">
            <Image // PCの場合
              src="/project-hero-image.jpg"
              alt="iGEM - Waseda Won the Village Prize at iGEM 2024"
              fill
              className="object-cover object-center hidden md:block"
            />
            <Image // スマホの場合
              src="/project-hero-image_sm.png"
              alt="iGEM - Waseda Won the Village Prize at iGEM 2024"
              fill
              className="object-cover object-center md:hidden"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/65 z-0 hidden md:block" />
        {/* <div className="absolute inset-0 bg-black/20 z-0 aspect-square md:hidden" /> */} {/* スマホで写真の上に薄い黒背景をつける場合はこれを有効化 */}

        <div className="md:absolute inset-0 z-30 flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 aspect-square md:aspect-[2/1]">
          <div className="mb-8">
            <h2 
              className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-enji-text md:text-yellow"
              style={{ fontFamily: '"Arial Black", sans-serif' }}
            >
              Projects
            </h2>
            <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text md:text-yellow">
              プロジェクト
            </p>
          </div>

          <p className="md:max-w-[50%] text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 md:text-white leading-loose mb-4 lg:mb-8">
            {t('home.projects')}
          </p>

          <LearnMore href={pages[1].href} textColor="text-gray-900 md:text-white"/>
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

          <div className="flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 aspect-square">
            <div className="mb-8">
              <h2 
                className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-enji-text"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                Team
              </h2>
              <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text">
                チーム
              </p>
            </div>

            <p className="text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 leading-loose mb-4 lg:mb-8">
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
              alt="iGEM - Waseda Members" 
              fill 
              className="pb-4 md:pb-0 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 aspect-square">
            <div className="mb-8">
              <h2 
                className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-enji-text"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                Members
              </h2>
              <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text">
                メンバー(写真は今年度のものに置き換えたい)
              </p>
            </div>

            <p className="text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 leading-loose mb-4 lg:mb-8">
              {t('home.members')}
            </p>

            <LearnMore href={pages[3].href} />
          </div>

          <div className="hidden md:block relative w-full aspect-square">
            <Image 
              src="/home-hero-image.jpg"
              alt="iGEM - Waseda Members" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full relative"> {/* Recruiting Members */}
        {/* PCでは写真+黒不透明度65%の背景の上に文字を配置。スマホでは縦に並べる. */}
        <div className="w-full md:aspect-[2/1]">
          <div className="relative aspect-square md:aspect-auto h-full">
            <Image 
              src="/recruiting-hero-image.jpg"
              alt="iGEM - Waseda Won the Village Prize at iGEM 2024"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/65 z-0 hidden md:block" />
        {/* <div className="absolute inset-0 bg-black/20 z-0 aspect-square md:hidden" /> スマホで写真の上に薄い黒背景をつける場合はこれを有効化 */}

        <div className="md:absolute inset-0 z-30 flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 aspect-square md:aspect-[2/1]">
          <div className="mb-8">
            <h2 
              className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-enji-text md:text-white"
              style={{ fontFamily: '"Arial Black", sans-serif' }}
            >
              Recruiting<br />Members
            </h2>
            <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text md:text-white">
              メンバー募集
            </p>
          </div>

          <p className="md:max-w-[50%] text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 md:text-white leading-loose mb-4 lg:mb-8">
            {t('home.recruitment')}
          </p>

          <LearnMore href={pages[4].href} textColor="text-gray-900 md:text-white"/>
        </div>

      </section>

      <section className="w-full relative"> {/* Donations and Sponsorship */}
        {/* PCでは写真+黒不透明度65%の背景の上に文字を配置。スマホでは縦に並べる. */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:aspect-[2/1]">
          <div className="relative md:col-span-2 aspect-square md:aspect-auto h-full">
            <Image
              src="/donation-hero-image.png"
              alt="donation and sponsorship"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="bg-[#0f0b08] hidden md:block relative h-full md:col-span-1" />
        </div>

        <div className="absolute inset-0 bg-black/65 z-0 hidden md:block" />

        <div className="md:absolute inset-0 z-30 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 aspect-square md:col-start-2">
            <div className="mb-8">
              <h2 
                className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-enji-text md:text-yellow"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                Donations and<br />Sponsorship
              </h2>
              <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text md:text-yellow">
                寄付・協賛
              </p>
            </div>

            <p className="text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 md:text-white leading-loose mb-4 lg:mb-8">
              {t('home.donation')}
            </p>

            <LearnMore href={pages[5].href} textColor="text-gray-900 md:text-white"/>
          </div>
        </div>

      </section>
    </>
    
  );
}
