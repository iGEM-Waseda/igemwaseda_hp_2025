'use client';

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import JumpToDonationSectionById from '@/components/donation/JumpToDonationSectionById';
import MailButton from "@/components/MailButton";

export default function Donation() {
  const t = useTranslations('donation');
  const locale = useLocale();

  return (
    <>
      <div className="mt-[48px] xl:mt-[64px]" /> {/* ヘッダー分だけ下げる */}

      <section className="w-full relative">
        <div className="w-full grid grid-cols-3 aspect-[3/1]">
          <div className="relative col-span-2 aspect-auto h-full">
            <Image
              src="/donation-hero-image.png"
              alt="donation and sponsorship"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 300vw, 100vw"
            />
          </div>
          <div className="bg-[#0f0b08] relative h-full col-span-1" />
        </div>

        <div className="absolute inset-0 bg-black/65 z-0 block" />

        <div className="absolute inset-0 z-30 grid grid-cols-2">
          <div className="flex flex-col justify-center col-start-2">
            <h3
              className="font-heading-en font-black text-2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-yellow"
              style={{ fontFamily: '"Arial Black", sans-serif' }}
            >
              Donation and<br />Sponsorship
            </h3>
            <p className="text-sm md:text-base lg:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-yellow">
              寄付・協賛
            </p>
          </div>
        </div>

      </section>

      <section className="section">
        <h1 className="heading text-center">
          {t('heading')}
        </h1>
        <p className="text">
          {t('intro1')}
        </p>
        <p className="text">
          {t('intro2')}
        </p>
        <p className="text">
          {t('intro3')}
        </p>
        <p className="text font-bold whitespace-pre-wrap">
          {t('intro4')}
        </p>
        <p className="text whitespace-pre-wrap">
          {t('intro5')}
        </p>
        <JumpToDonationSectionById id="individuals">
          {t('sectionIndividuals')}
        </JumpToDonationSectionById>
        <JumpToDonationSectionById id="corporations">
          {t('sectionCorporations')}
        </JumpToDonationSectionById>
        {locale === "ja" ? <Image src="/donation_graph.png" alt="donation graph" width={1336} height={412} className="w-full" /> : <Image src="/donation_graph_en.png" alt="donation graph" width={1336} height={412} className="w-full" />}

        <h1 className="heading" id="individuals">
          {t('individuals')}
        </h1>
        <p className="text">
          {t('return')}
        </p>
        {locale === "ja" ? <Image src="/donation_chart.png" alt="donation graph" width={1223} height={304} className="w-full" /> : <Image src="/donation_chart_en.png" alt="donation graph" width={1336} height={412} className="w-full" />}
        <h2 className="subheading">
          {t('flow')}
        </h2>
        {locale === "ja" ? <Image src="/steps.png" alt="donation graph" width={1336} height={307} className="w-full" /> : <Image src="/steps_en.png" alt="donation graph" width={1336} height={307} className="w-full" />}
        <div className="flex justify-center mt-auto mx-auto">
          <a href="https://forms.gle/Wm4VeKUBuEL9zcQz7" target="_blank" className="mt-2 md:mt-6 inline-block bg-[#5a131d] focus-visible:ring text-white hover:text-yellow active:text-yellow text-sm sm:text-lg md:text-2xl font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            {t('googleForm')}
          </a>
        </div>

        <h1 className="heading" id="corporations">
          {t('corporations')}
        </h1>
        <p className="text">
          {t('contact')}
        </p>

        <div className="flex items-center justify-center gap-4">
          <MailButton textColor="text-gray-800" hoverColor="hover:text-yellow" />
          <p className="text-base md:text-lg lg:text-xl text-gray-800 font-medium">
            igemwaseda2020@gmail.com
          </p>
        </div>

      </section>
    </>
  );
}