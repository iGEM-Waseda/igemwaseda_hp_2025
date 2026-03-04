import Image from "next/image";
import ProjectLogoLeftSide from "@/components/projects/ProjectLogoLeftSide";
import ProjectLogoRightSide from "@/components/projects/ProjectLogoRightSide";
import { useTranslations } from "next-intl";
import { PrizesBadgeProps } from "@/components/types"

export default function Projects() {
  const t = useTranslations('projects');
  const prizes2024: PrizesBadgeProps[] = [
    { prizeName: "Top10 Undergrad", prizeIconSrc: "/top10.avif"},
    { prizeName: "Gold Medal", prizeIconSrc: "/gold-medal.avif"},
    { prizeName: "Best Bioremediation Project", prizeIconSrc: "https://static.igem.org/websites/common/2022/icons/village/bioremediation.svg"},
    { prizeName: "Best New Composite Part", prizeIconSrc: "https://static.igem.org/websites/common/2023/icons/awards/best-new-composite-part.svg"},
    { prizeName: "Best Model Nominee", prizeIconSrc: "https://static.igem.org/websites/common/2023/icons/awards/best-model.svg"},
    { prizeName: "Best Wiki Nominee", prizeIconSrc: "https://static.igem.org/websites/common/2023/icons/awards/best-wiki.svg"}
  ]
  const prizes2022: PrizesBadgeProps[] = [
    { prizeName: "Gold Medal", prizeIconSrc: "/gold-medal.avif"},
    { prizeName: "Best Foundational Advance Project Nominee", prizeIconSrc: "https://static.igem.org/websites/common/2022/icons/village/foundational-advance.svg"}
  ]
  const prizes2020: PrizesBadgeProps[] = [
    { prizeName: "Gold Medal", prizeIconSrc: "/gold-medal.avif"},
    { prizeName: "Best Information Processing Project", prizeIconSrc: "https://static.igem.org/websites/common/2022/icons/village/informationprocessing.svg"},
    { prizeName: "Best Education", prizeIconSrc: "https://static.igem.org/websites/common/2023/icons/awards/best-education.svg"}
  ]

  return (
    <>
      <div className="mt-[48px] xl:mt-[64px]" /> {/* ヘッダー分だけ下げる */}

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

      <ProjectLogoLeftSide year="2024" bgColor="bg-[#a3bce2]" projectTitle="PET TWINS" ProjectTitleColor="text-[#004aad]" PrizesBadgeArray={prizes2024}> {/* 2024 */}
        {t('2024')}
      </ProjectLogoLeftSide>

      <ProjectLogoRightSide year="2022" bgColor="bg-[#e4e0e0]" projectTitle="Cell Freedom" ProjectTitleColor="text-red-700" PrizesBadgeArray={prizes2022}> {/* 2022 */}
        {t('2022')}
      </ProjectLogoRightSide>

      <ProjectLogoLeftSide year="2020" bgColor="bg-[#e6cd66]" projectTitle="Zombie vs Samurai" ProjectTitleColor="text-yellow-900" PrizesBadgeArray={prizes2020}> {/* 2020 */}
        {t('2020')}
      </ProjectLogoLeftSide>

      <section className="relative w-full">
        <div className="flex flex-col items-center justify-center text-center aspect-square md:aspect-[5/2] w-full">
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