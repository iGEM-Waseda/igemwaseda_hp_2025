import Image from "next/image"
import JumpToWiki from "@/components/projects/JumpToWiki"

export default function ProjectLogoRightSide({ children, year, bgColor, projectTitle, ProjectTitleColor }: {
   children: React.ReactNode, 
   year: string, 
   bgColor: string, 
   projectTitle: string, 
   ProjectTitleColor: string 
}) {
  return (
    <section className={`relative w-full ${bgColor}`} id={year}>
      <div className="grid grid-cols-1 md:grid-cols-3 md:aspect-[3/1]">
        <div className="md:hidden relative md:col-span-1 aspect-square md:aspect-auto">
          <Image 
            src={`/project-${year}.png`} 
            alt={`Project ${year}`} 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 300vw, 100vw"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-white/30" />

        <div className="z-20 flex flex-col items-center text-center justify-center w-full xl:px-4 md:col-span-2 aspect-auto">
          <div className="p-4 xl:p-8 flex flex-col items-center">
            <h3 className={`font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4.5vw] pb-4 xl:pb-8 leading-none tracking-tighter ${ProjectTitleColor}`}>
              {projectTitle}
            </h3>
            <p className="text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-[1.2vw] font-medium text-gray-800 leading-loose">
              {children}
            </p>
            <JumpToWiki href={Number(year) <= 2021 ? `https://${year}.igem.org/Team:Waseda` : `https://${year}.igem.wiki/waseda-tokyo/`} /> {/* 2022年からWikiのシステムが変わった */}
          </div>
        </div>

        <div className="hidden md:block relative md:col-span-1 aspect-square md:aspect-auto">
          <Image 
            src={`/project-${year}.png`} 
            alt={`Project ${year}`}  
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 300vw, 100vw"
          />
        </div>

      </div>
    </section>
  )
}