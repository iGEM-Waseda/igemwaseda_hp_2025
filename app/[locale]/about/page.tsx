import Image from "next/image"
import { useTranslations } from 'next-intl';
import '@/app/globals.css'

export default function About() {
  const t = useTranslations('about');
  return (
    <>
      <div className="mt-[76px] xl:mt-[92px]" /> {/* ヘッダー分だけ下げる */}

      <section className="w-full relative"> 
        <div className="w-full grid grid-cols-2 aspect-[3/1] overflow-hidden">
          <div className="relative h-full">
            <Image 
              src="/iGEM-Waseda_logo_trim.png"
              alt="iGEM - Waseda Won the Village Prize at iGEM 2024"
              fill
              className="object-contain p-4 md:p-8"
            />
          </div>
          <div className="relative h-full" />
        </div>

        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="absolute inset-0 z-30 grid grid-cols-2">
          <div className="flex flex-col justify-center col-start-2">
            <h2 
              className="font-heading-en font-black text-2xl md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-white"
              style={{ fontFamily: '"Arial Black", sans-serif' }}
            >
              About Us
            </h2>
            <p className="text-sm md: text-base lg:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-white">
              私たちについて
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h1 className="heading">{t('heading.synbio')}</h1>
        <p className="text">{t('synbio.section1')}</p>
        <Image 
          src='/about-synbio.png' 
          alt="about synthetic biology" 
          width={2256} 
          height={879} 
          className="img"
        />
        <p className="text">{t('synbio.section2')}</p>
        <p className="text">{t('synbio.section3')}</p>

        <div className="heading flex items-center gap-2 lg:gap-3">
          <h1>{t('heading.igem')}</h1>
          <Image 
            src='/igem_logo.png' 
            alt="igem logo" 
            width={382} 
            height={261} 
            className="h-[1.3em] w-auto object-contain" 
          />
        </div>
        <p className="text">{t('igem')}</p>

        <div className="heading flex items-center gap-2 lg:gap-3">
          <h1>{t('heading.igemwaseda')}</h1>
          <Image 
            src='/iGEM-Waseda_logo_trim.png' 
            alt="igem logo" 
            width={1829} 
            height={1859} 
            className="h-[1.3em] w-auto object-contain" 
          />
        </div>
        <p className="text">{t('igemwaseda')}</p>
      </section>
    </>
  )
}