import Image from "next/image"
import { useTranslations } from "next-intl"
import '@/app/globals.css'
import { Metadata } from 'next';

export async function generateMetadata(
  props: { 
    params: Promise<{ locale: string }> 
  }
): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const pathName = 'team';

  const currentPath = locale === 'ja' ? `/${pathName}` : `/${locale}/${pathName}`;

  return {
    title: 'Team',
 
    alternates: {
      canonical: currentPath,
      languages: {
        'en': `/en/${pathName}`,
        'ja': `/${pathName}`,
        'x-default': `/${pathName}`,
      },
    },
  };
}

export default function Team() {
  const t = useTranslations('team');
  return (
    <>
      <div className="mt-[48px] xl:mt-[64px]" /> {/* ヘッダー分だけ下げる */}

      <section className="w-full relative">
        <div className="relative w-full aspect-[3/1] overflow-hidden">
          <Image
            src="/team-hero-image-team-page.png"
            alt="iGEM - Waseda logo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 300vw, 100vw"
          />
        </div>

        {/* <div className="absolute inset-0 bg-black/60 z-0" /> */} {/* 黒くしない */}
        <div className="absolute inset-0 bg-white/30 z-0" />

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

      <section className="section"> {/* この実装は真似しない方がいい */}


        <p className="text">
          {t.rich('intro', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>

        <h1 className="heading" id="wet">
          Wet
        </h1>
        <p className="text">
          {t.rich('wet1', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>
        <p className="text">
          {t.rich('wet2', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>
        <h2 className="subheadingsmall">
          {t('wetSubTitle1')}
        </h2>
        <p className="text">
          {t('wet3')}
        </p>
        <p className="text text-center font-bold">
          {t('wet4')}
        </p>
        <p className="text">
          {t('wet5')}
        </p>
        <Image src="/wet-fig-1.png" alt="wet-fig-1" className="img" width={850} height={503} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('wetFig1')}
        </p>
        <h2 className="subheadingsmall">
          {t('wetSubTitle2')}
        </h2>
        <p className="text">
          {t('wet6')}
        </p>
        <Image src="/wet-fig-2.png" alt="wet-fig-2" className="img" width={1134} height={665} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('wetFig2')}
        </p>
        <Image src="/wet-fig-3.png" alt="wet-fig-3" className="img" width={1452} height={1128} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('wetFig3')}
        </p>
        <h2 className="subheadingsmall">
          {t('wetSubTitle3')}
        </h2>
        <p className="text">
          {t.rich('wet7', {
            b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>,
            math: () => (
              <span className="mx-0.5 font-serif italic">
                N &times; 2<sup>n</sup>
              </span>
            )
          })}
        </p>
        <Image src="/wet-fig-4.png" alt="wet-fig-4" className="img" width={287} height={178} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('wetFig4')}
        </p>
        <h2 className="subheadingsmall">
          {t('wetSubTitle4')}
        </h2>
        <p className="text">
          {t('wet8')}
        </p>
        <Image src="/wet-fig-5.png" alt="wet-fig-5" className="img" width={998} height={687} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('wetFig5')}
        </p>
        <p className="text">
          {t.rich('wet9', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>

        <h1 className="heading" id="dry">
          Dry
        </h1>
        <p className="text">
          {t.rich('dry1', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>
        <p className="text">
          {t('dry2')}
        </p>
        <h2 className="subheadingsmall">
          {t('drySubTitle1')}
        </h2>
        <p className="text">
          {t('dry3')}
        </p>
        <Image src="/dry-fig-1.png" alt="dry-fig-1" className="img" width={1924} height={768} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('dryFig1')}
        </p>
        <p className="text">
          {t('dry4')}
        </p>
        <Image src="/dry-fig-2.png" alt="dry-fig-2" className="img" width={2608} height={1088} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('dryFig2')}
        </p>
        <p className="text">
          {t('dry5')}
        </p>
        <Image src="/dry-fig-3.png" alt="dry-fig-3" className="img" width={2466} height={1144} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('dryFig3')}
        </p>
        <p className="text">
          {t.rich('dry6', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>
        <h2 className="subheadingsmall">
          {t('drySubTitle2')}
        </h2>
        <p className="text">
          {t('dry7')}
        </p>
        <p className="text">
          {t('dry8')}
        </p>
        <Image src="/dry-fig-4.png" alt="dry-fig-4" className="img" width={1280} height={720} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('dryFig4')}
        </p>
        <p className="text">
          {t.rich('dry9', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>
        <h2 className="subheadingsmall">
          {t('drySubTitle3')}
        </h2>
        <p className="text">
          {t.rich('dry10', {a: (chunks) => <a href="https://tomoino.github.io/education-tool/" target="_blank" className="underline underline-offset-4 hover:text-yellow">{chunks}</a>})}
        </p>
        <Image src="/dry-fig-5.png" alt="dry-fig-5" className="img" width={1907} height={1231} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('dryFig5')}
        </p>
        <h2 className="subheadingsmall">
          {t('drySubTitle4')}
        </h2>
        <p className="text">
          {t('dry11')}
        </p>
        <Image src="/dry-fig-6.jpg" alt="dry-fig-6" className="img" width={4032} height={3024} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('dryFig6')}
        </p>
        <p className="text">
          {t.rich('dry12', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>

        <h1 className="heading" id="hp">
          Human Practice
        </h1>
        <p className="text">
          {t.rich('hp1', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>
        <p className="text">
          {t.rich('hp2', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>
        <p className="text">
          {t('hp3')}
        </p>
        <Image src="/hp-fig-1.png" alt="hp1" className="img" width={975} height={399} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('hpFig1')}
        </p>
        <p className="text">
          {t('hp4')}
        </p>
        <p className="text">
          {t('hp5')}
        </p>
        <Image src="/hp-fig-2.jpg" alt="hp2" className="img" width={4032} height={3024} sizes="(max-width: 768px) 300vw, 100vw" />
        <p className="text text-center font-bold">
          {t('hpFig2')}
        </p>
        <p className="text">
          {t.rich('hp6', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>

        <h1 className="heading" id="other">
          Wiki・Video・Design
        </h1>
        <h2 className="subheading">
          Wiki
        </h2>
        <p className="text">
          {t('wiki')}
        </p>
        <p className="text">
          {t.rich('frontend', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>
        <Image src="/design.png" alt="design" className="img" width={3572} height={1962} sizes="(max-width: 768px) 300vw, 100vw" />

        <h2 className="subheading">
          Video
        </h2>
        <p className="text">
          {t.rich('video', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
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
          Design
        </h2>
        <p className="text">
          {t.rich('design', {b: (chunks) => <span className="font-bold text-gray-900">{chunks}</span>})}
        </p>
        <Image src="/illustrator.png" alt="illustrator" className="img" width={4312} height={2962} sizes="(max-width: 768px) 300vw, 100vw" />

      </section>
    </>
  )
}