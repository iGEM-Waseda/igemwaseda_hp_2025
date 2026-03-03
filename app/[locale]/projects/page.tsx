import Image from "next/image";
import ProjectLogoLeftSide from "@/components/projects/ProjectLogoLeftSide";
import ProjectLogoRightSide from "@/components/projects/ProjectLogoRightSide";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations('projects');
  return (
    <>
      <div className="mt-[76px] xl:mt-[92px]" /> {/* ヘッダー分だけ下げる */}

      <section className="w-full relative bg-black grid grid-cols-3 aspect-[3/1]">
        <div className="relative h-full col-span-1" />
        <div className="relative w-full col-span-2 overflow-hidden">
          <Image 
            src="/project-hero-image.jpg"
            alt="iGEM - Waseda logo"
            fill
            className="object-cover" 
            sizes="(max-width: 768px) 300vw, 100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/65 z-0" />

        <div className="absolute inset-0 z-30 grid grid-cols-2 px-8 py-4 md:px-24">
          <div className="flex flex-col justify-center">
            <h3 
              className="font-heading-en font-black text-2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-yellow"
              style={{ fontFamily: '"Arial Black", sans-serif' }}
            >
              Projects
            </h3>
            <p className="text-sm md:text-base lg:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-yellow">
              プロジェクト
            </p>
          </div>
        </div>
      </section>

      <ProjectLogoLeftSide year="2024" bgColor="bg-[#a3bce2]" projectTitle="PET TWINS" ProjectTitleColor="text-[#004aad]"> {/* 2024 */}
        {t('2024')}
      </ProjectLogoLeftSide>

      <ProjectLogoRightSide year="2022" bgColor="bg-[#e4e0e0]" projectTitle="Cell Freedom" ProjectTitleColor="text-red-700"> {/* 2022 */}
        {t('2022')}
      </ProjectLogoRightSide>

      <ProjectLogoLeftSide year="2020" bgColor="bg-[#e6cd66]" projectTitle="Zombie vs Samurai" ProjectTitleColor="text-yellow-900"> {/* 2020 */}
        {t('2020')}
      </ProjectLogoLeftSide>

      <section className="relative w-full">
        <div className="flex flex-col items-center justify-center text-center aspect-square md:aspect-[3/1] w-full">
          <div className="flex flex-col items-center p-4 xl:p-8 xl:px-4 w-full">
            <h3 className="font-black text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7vw] pb-4 xl:pb-8 leading-none tracking-tighter text-black">
              2026
            </h3>
            <p className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4vw] pb-4 xl:pb-8 leading-none tracking-tighter font-bold text-gray-800">
              Coming Soon...
            </p>
          </div>
        </div>
      </section>
    </>
  );
}