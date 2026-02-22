import Image from "next/image";

export default function HeroImage() {
  return (
    // relativeを設定し、高さを画面いっぱいにする
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      <Image
        src="/home-hero-image.jpg"
        alt="iGEM - Waseda Hero Image"
        fill // 親要素いっぱいに広げる
        priority
        className="object-cover object-center"
        sizes="(max-width: 768px) 300vw, 100vw"
      />

      {/* 不透明度65% */}
      <div className="absolute inset-0 bg-black/65 z-0"></div>

      <div className="relative z-10 text-center px-2 flex flex-col items-center">
        <p className="text-[3.2vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] text-[#dbae07] font-medium">
          iGEM 2024 Top 10 Worldwide / Gold Medalist
        </p>
        <h1 className="font-heading-en leading-none my-3 sm:my-2 xl:my-0 text-[12vw] font-black text-white tracking-tight" style={{ fontFamily: '"Arial Black", sans-serif', fontWeight: 900 }}>
          iGEM-<span className="text-[#8f1727]">W</span>aseda
        </h1>
        <p className="font-heading-en text-[3.25vw] sm:text-[3.2vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw] text-white font-medium" style={{ fontFamily: '"Arial Black", sans-serif', fontWeight: 900 }}>
          Waseda University Synthetic Biology Team
        </p>
      </div>
    </section>
  );
}
