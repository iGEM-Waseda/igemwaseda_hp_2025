import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('common');
  return (
    // 1. 親コンテナ: relativeを設定し、高さを画面いっぱい(h-screen)にする
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* 2. 背景画像レイヤー (最背面) */}
      <Image
        src="/home-hero-image.jpg" // publicフォルダ内の写真パスを指定
        alt="iGEM Waseda Background"
        fill // 親要素(section)いっぱいに広げる
        priority // トップページのメイン画像なので最優先で読み込む(重要!)
        className="object-cover object-center" // 隙間なく埋め、中央を基準にする
        quality={100} // 【追加】デフォルトの75から90に引き上げて画質を優先する
        sizes="(max-width: 768px) 300vw, 100vw" // 【追加】「この画像は常に画面幅100%で使うよ」とブラウザに教える
      />

      {/* 3. 黒(65%)のオーバーレイレイヤー (中間) */}
      {/* inset-0 は top-0 right-0 bottom-0 left-0 と同じ。bg-black/65で不透明度65%を実現 */}
      <div className="absolute inset-0 bg-black/65 z-0"></div>

      {/* 4. コンテンツレイヤー (最前面) */}
      {/* z-10 と relative をつけて、オーバーレイの上に文字が来るようにする */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          iGEM-Waseda
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 font-medium max-w-2xl">
          Synthetic Biology for a Better Future.
        </p>
        
        {/* アクションボタンなどをここに配置 */}
        <button className="mt-8 px-8 py-3 bg-[#b94047] text-white font-bold rounded-full hover:bg-opacity-90 transition-all">
          Explore Our Project
        </button>
      </div>
      
    </section>
  );
}
