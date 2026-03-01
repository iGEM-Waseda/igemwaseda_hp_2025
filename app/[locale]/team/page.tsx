import Image from "next/image"
import { useTranslations } from "next-intl"
import '@/app/globals.css'

export default function Team() {
  const t = useTranslations('team');
  return (
    <>
      <div className="mt-[76px] xl:mt-[92px]" /> {/* ヘッダー分だけ下げる */}
      
      <section className="w-full relative"> 
        <div className="relative w-full aspect-[3/1] overflow-hidden">
          <Image 
            src="/team-hero-image-team-page.png"
            alt="iGEM - Waseda logo"
            fill
            className="object-cover" 
          />
        </div>

        {/* <div className="absolute inset-0 bg-black/60 z-0" /> */} {/* 黒くしない */}

        <div className="absolute inset-0 z-30 grid grid-cols-2 px-8 py-4 md:px-24">
          <div className="flex flex-col justify-center">
            <h3 
              className="font-heading-en font-black text-2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-enji-text"
              style={{ fontFamily: '"Arial Black", sans-serif' }}
            >
              Team
            </h3>
            <p className="text-sm md:text-base lg:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-enji-text">
              チーム
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="text">
          {t('intro1')}
        </p>
        <p className="text">
          {t('intro2')}
        </p>

        <h1 className="heading" id="wet">
          Wet
        </h1>
        <p className="text">
          {t('wet1')}
        </p>
        <p className="text whitespace-pre-wrap">
          {t('wet2')}
        </p>
        <Image src="/wet.jpg" alt="wet" className="img" width={1792} height={1344} />

        <h1 className="heading" id="dry">
          Dry
        </h1>
        <p className="text">
          {t('dry')}
        </p>
        <Image src="/dry-simulation.png" alt="dry" className="img" width={1280} height={720} />

        <h1 className="heading" id="hp">
          Human Practice
        </h1>
        <p className="text">
          {t('hp')}
        </p>
        <Image src="/human-practice.jpg" alt="hp" className="img" width={568} height={402} />

        <h1 className="heading" id="other">
          Wiki・Video・Illustrator
        </h1>
        <h2 className="subheading">
          Wiki
        </h2>
        <p className="text">
          {t('wiki')}
        </p>
        <p className="text whitespace-pre-wrap">
          {t('frontend')}
        </p>
        <p className="text whitespace-pre-wrap">
          {t('design')}
        </p>
        <Image src="/design.png" alt="design" className="img" width={3572} height={1962} />

        <h2 className="subheading">
          Video
        </h2>
        <p className="text">
          {t('video')}
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="youtube-container">
            <iframe title="Waseda-Tokyo: PET TWINS - PET Degrading PJ using a Two-step electrical Induction... (2024) - Project Promotion [English]" width="560" height="315" src="https://video.igem.org/videos/embed/dw85duR9z3nMk5qeb9xQAB" allow="fullscreen" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
          </div>
          <div className="youtube-container">
            <iframe title="Waseda-Tokyo: PET TWINS -PETase The Way to ImplementatioN Success- (2024) - Team Presentation [English]" width="560" height="315" src="https://video.igem.org/videos/embed/7E45nkgG7bqsShpGDyfr8r" allow="fullscreen" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
          </div>
        </div>

        <h2 className="subheading">
          Illustrator
        </h2>
        <p className="text">
          {t('illustrator')}
        </p>
        <Image src="/illustrator.png" alt="illustrator" className="img" width={4312} height={2962} />

      </section>
    </>
  )
}