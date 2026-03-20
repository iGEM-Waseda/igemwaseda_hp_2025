'use client';

import Image from "next/image";
import { useTranslations } from 'next-intl';
import HeroImage from "@/components/home/HeroImage";
import { PageName } from "@/components/navigationName";
import LearnMore from "@/components/home/LearnMore";
import { motion } from "framer-motion";
import {
  revealVariants,
  revealWithFloatVariants,
  slideInLeftVariants,
  slideInRightVariants
} from "@/lib/animations";

export default function Home() {
  const t = useTranslations('home');
  const pages = PageName();
  return (
    <main className="w-full overflow-x-clip"> {/* 右に余白が出るバグ対策 */}
      <HeroImage />

      {/* ここにニュースを挿入 */}

      <motion.section
        className="w-full bg-white relative z-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      > {/* About Us */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            className="relative aspect-square md:aspect-[3/2]"
            variants={slideInLeftVariants}
          >
            <div className="absolute inset-0 md:inset-[-15%] xl:inset-[-20%] z-30">
              <Image
                src="/iGEM-Waseda_logo_trim.png"
                alt="iGEM - Waseda Team Logo"
                fill
                className="object-contain md:"
                sizes="(max-width: 768px) 300vw, 100vw"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 aspect-square md:aspect-[3/2]"
            variants={slideInRightVariants}
          >
            <div className="mb-8">
              <h3
                className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] mb-1 leading-none tracking-tighter text-enji-text"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                About Us
              </h3>
              <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text">
                私たちについて
              </p>
            </div>

            <p className="text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 leading-loose mb-4 lg:mb-8">
              {t('home.aboutUs')}
            </p>

            <LearnMore href={pages[0].href} />
          </motion.div>
        </div>
      </motion.section >

      <motion.section
        className="w-full relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealWithFloatVariants}
      > {/* Projects */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:aspect-[2/1]">
          <div className="bg-black hidden md:block relative h-full md:col-span-1" />
          <div className="relative md:col-span-2 aspect-square md:aspect-auto h-full">
            <Image
              src="/project-hero-image.jpg"
              alt="iGEM - Waseda Won the Village Prize at iGEM 2024"
              fill
              className="object-cover object-center hidden md:block"
            />
            <Image
              src="/project-hero-image_sm.png"
              alt="iGEM - Waseda Won the Village Prize at iGEM 2024"
              fill
              className="object-cover object-center md:hidden"
              sizes="(max-width: 768px) 300vw, 100vw"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/65 z-0 hidden md:block" />
        <div className="absolute inset-0 bg-black/20 z-0 aspect-square md:hidden" />

        <div className="md:absolute inset-0 z-30 flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 aspect-square md:aspect-[2/1]">
          <div className="mb-8">
            <h3
              className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] mb-1 leading-none tracking-tighter text-enji-text md:text-yellow"
              style={{ fontFamily: '"Arial Black", sans-serif' }}
            >
              Projects
            </h3>
            <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text md:text-yellow">
              プロジェクト
            </p>
          </div>

          <p className="md:max-w-[50%] text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 md:text-white leading-loose mb-4 lg:mb-8">
            {t('home.projects')}
          </p>

          <LearnMore href={pages[1].href} textColor="text-gray-900 md:text-white" />
        </div>
      </motion.section>

      <motion.section
        className="w-full bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      > {/* Team */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            className="relative aspect-square"
            variants={slideInLeftVariants}
          >
            <Image
              src="/team-hero-image.png"
              alt="iGEM Waseda Team Working"
              fill
              className=""
              sizes="(max-width: 768px) 300vw, 100vw"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 aspect-square"
            variants={slideInRightVariants}
          >
            <div className="mb-8">
              <h3
                className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] mb-1 leading-none tracking-tighter text-enji-text"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                Team
              </h3>
              <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text">
                チーム
              </p>
            </div>

            <p className="text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 leading-loose mb-4 lg:mb-8">
              {t('home.team')}
            </p>

            <LearnMore href={pages[2].href} />
          </motion.div>
        </div>
      </motion.section >

      <motion.section
        className="w-full bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
      > {/* Members */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:hidden relative aspect-square">
            <Image
              src="/members_hero_image.JPG"
              alt="iGEM - Waseda Members"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 300vw, 100vw"
            />
          </div>

          <motion.div
            className="flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 aspect-square"
            variants={slideInLeftVariants}
          >
            <div className="mb-8">
              <h3
                className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] mb-1 leading-none tracking-tighter text-enji-text"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                Members
              </h3>
              <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text">
                メンバー
              </p>
            </div>

            <p className="text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 leading-loose mb-4 lg:mb-8">
              {t('home.members')}
            </p>

            <LearnMore href={pages[3].href} />
          </motion.div>

          <motion.div
            className="hidden md:block relative w-full aspect-square"
            variants={slideInRightVariants}
          >
            <Image
              src="/members_hero_image.JPG"
              alt="iGEM - Waseda Members"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section >

      <div className="md:bg-black">
        <motion.section
          className="w-full relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealWithFloatVariants}
        > {/* Recruiting Members */}
          <div className="w-full md:aspect-[2/1]">
            <div className="relative aspect-square md:aspect-auto h-full">
              <Image
                src="/recruiting-hero-image.jpg"
                alt="iGEM Jamboree 2024"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 300vw, 100vw"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-black/65 z-0 hidden md:block" />

          <div className="md:absolute inset-0 z-30 flex flex-col justify-center px-8 py-4 md:px-16 lg:px-24 aspect-square md:aspect-[2/1]">
            <div className="mb-8">
              <h3
                className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] mb-1 leading-none tracking-tighter text-enji-text md:text-white"
                style={{ fontFamily: '"Arial Black", sans-serif' }}
              >
                Recruiting<br />Members
              </h3>
              <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text md:text-white">
                メンバー募集
              </p>
            </div>

            <p className="md:max-w-[50%] text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 md:text-white leading-loose mb-4 lg:mb-8">
              {t('home.recruitment')}
            </p>

            <LearnMore href={pages[4].href} textColor="text-gray-900 md:text-white" />
          </div>
        </motion.section>

        <motion.section
          className="w-full relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealWithFloatVariants}
        > {/* Donations and Sponsorship */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 md:aspect-[2/1]">
            <div className="relative md:col-span-2 aspect-square md:aspect-auto h-full">
              <Image
                src="/donation-hero-image.png"
                alt="donation and sponsorship"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 300vw, 100vw"
              />
            </div>
            <div className="bg-[#0f0b08] hidden md:block relative h-full md:col-span-1" />
          </div>

          <div className="absolute inset-0 bg-black/65 z-0 hidden md:block" />

          <div className="md:absolute inset-0 z-30 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center px-8 py-4 md:px-12 xl:px-24 aspect-square md:col-start-2">
              <div className="mb-8">
                <h3
                  className="font-heading-en font-black text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] mb-1 leading-none tracking-tighter text-enji-text md:text-yellow"
                  style={{ fontFamily: '"Arial Black", sans-serif' }}
                >
                  Donations and<br />Sponsorship
                </h3>
                <p className="text-lg md:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text md:text-yellow">
                  寄付・協賛
                </p>
              </div>

              <p className="text-sm lg:text-lg xl:text-xl 2xl:text-[1vw] font-medium text-gray-800 md:text-white leading-loose mb-4 lg:mb-8">
                {t('home.donation')}
              </p>

              <LearnMore href={pages[5].href} textColor="text-gray-900 md:text-white" />
            </div>
          </div>
        </motion.section >
      </div>
    </main>
  );
}
