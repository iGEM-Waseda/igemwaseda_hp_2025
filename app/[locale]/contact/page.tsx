import Image from "next/image"
import TwitterButton from "@/components/TwitterButton"
import InstagramButton from "@/components/InstagramButton"
import { useTranslations } from "next-intl"

export default function Contact() {
  const t = useTranslations('contact');
  return (
    <>
      <div className="mt-[76px] xl:mt-[92px]" /> {/* ヘッダー分だけ下げる */}

      <section className="w-full relative"> 
        <div className="w-full grid grid-cols-2 aspect-[3/1] overflow-hidden">
          <div className="relative h-full" />
          <div className="relative h-full">
            <Image 
              src="/iGEM-Waseda_home_logo.png"
              alt="iGEM - Waseda logo"
              fill
              className="object-contain pr-8 md:pr-24"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="absolute inset-0 z-30 grid grid-cols-2 px-8 py-4 md:px-24">
          <div className="flex flex-col justify-center">
            <h2 
              className="font-heading-en font-black text-2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-white"
              style={{ fontFamily: '"Arial Black", sans-serif' }}
            >
              Contact
            </h2>
            <p className="text-sm md:text-base lg:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-white">
              お問い合わせ
            </p>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-medium mb-16 md:mb-24">
          {t('contact')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col item-center mb-12 md:mb-16">
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-medium mb-8 md:mb-12">
              {t('mail')}
            </h2>
            <a href="mailto:igemwaseda2020@gmail.com" className="text-sm sm:text-base md:text-xl lg:text-2xl underline text-gray-800 hover:text-yellow">
              igemwaseda2020@gmail.com
            </a>
          </div>

          <div className="flex flex-col item-center">
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-medium mb-8 md:mb-12">
              {t('sns')}
            </h2>
            <div className="flex item-center justify-center gap-4 lg:gap-6">
              <TwitterButton textColor="text-gray-800" hoverColor="hover:text-yellow" />
              <InstagramButton textColor="text-gray-800" hoverColor="hover:text-yellow" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}