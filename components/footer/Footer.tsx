'use client';

import { Link } from '@/i18n/routing';
import { PageName, ProjectTabName, TeamTabName } from '@/components/navigationName';

export default function Footer() {
  const pages = PageName();
  const projectItems = ProjectTabName();
  const teamItems = TeamTabName();
  
  return (
    // 背景は画面幅100% (w-full)。えんじ色は早稲田っぽい深紅（#6A1E24）を仮置きしています。
    <footer className="w-full bg-[#5a131d] text-white py-16">
      
      {/* 中身は max-w-screen-2xl で最大幅を制限し、中央寄せ (mx-auto) */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">

        {/* 1. 巨大ロゴセクション */}
        <div className="mb-16 items-center justify-center text-center">
          {/* スマホでは text-6xl、PCでは text-[8rem] や text-[12rem] まで巨大化させます */}
          <Link href="/" className="inline-block text-7xl md:text-[8rem] lg:text-[11rem] font-black tracking-tighter leading-none hover:opacity-90 transition-opacity">
            iGEM-<span className="text-[#D4AF37]">W</span>aseda
          </Link>
        </div>

        {/* 2. リンクのグリッドセクション */}
        {/* スマホ: 1列 (grid-cols-1), タブレット: 2列, PC: 3列 に自動で切り替わります */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* 第1カラム：単独リンク群 */}
          <div className="flex flex-col space-y-5 text-lg font-medium tracking-wide">
            <Link href="/about" className="hover:text-gray-300 transition-colors w-fit">私たちについて</Link>
            <Link href="/members" className="hover:text-gray-300 transition-colors w-fit">メンバー</Link>
            <Link href="/recruitment" className="hover:text-gray-300 transition-colors w-fit">メンバー募集</Link>
            <Link href="/donation" className="hover:text-gray-300 transition-colors w-fit">寄付・協賛</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors w-fit">お問い合わせ</Link>
          </div>

          {/* 第2カラム：プロジェクト（2カラムのサブグリッド） */}
          <div>
            <h3 className="text-lg font-medium tracking-wide mb-5">プロジェクト</h3>
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-lg">
              <Link href="/projects/2027" className="hover:text-gray-300 transition-colors w-fit">2027</Link>
              <Link href="/projects/2026" className="hover:text-gray-300 transition-colors w-fit">2026</Link>
              <Link href="/projects/2024" className="hover:text-gray-300 transition-colors w-fit">2024</Link>
              <Link href="/projects/2022" className="hover:text-gray-300 transition-colors w-fit">2022</Link>
              <Link href="/projects/2020" className="hover:text-gray-300 transition-colors w-fit">2020</Link>
            </div>
          </div>

          {/* 第3カラム：チーム（2カラムのサブグリッド） */}
          <div className="relative">
            <h3 className="text-lg font-medium tracking-wide mb-5">チーム</h3>
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-lg">
              <Link href="/team/wet" className="hover:text-gray-300 transition-colors w-fit">Wet</Link>
              <Link href="/team/dry" className="hover:text-gray-300 transition-colors w-fit">Dry</Link>
              <Link href="/team/hp" className="hover:text-gray-300 transition-colors w-fit">HP</Link>
              <Link href="/team/other" className="hover:text-gray-300 transition-colors w-fit">Other</Link>
            </div>

            {/* PC版ではこの第3カラムの右下にSNSアイコンを配置（absoluteを使用） */}
            <div className="hidden lg:flex absolute bottom-0 right-0 gap-6">
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* 3. ボトムセクション（スマホ用SNSアイコン ＋ コピーライト） */}
        <div className="flex flex-col items-center justify-center pt-8 relative">
          
          {/* スマホ・タブレット版でのみ中央に表示されるSNSアイコン */}
          <div className="flex lg:hidden gap-8 mb-8">
            <SocialIcons />
          </div>

          {/* コピーライト（常に中央配置） */}
          <p className="text-sm tracking-wider font-light">
            &copy; 2026 iGEM Waseda
          </p>
        </div>

      </div>
    </footer>
  );
}

// SNSアイコンをまとめたコンポーネント（使い回しやすく切り出しました）
function SocialIcons() {
  return (
    <>
      {/* Instagram */}
      <a href="https://instagram.com/wasedaigem" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>

      {/* X (Twitter) */}
      <a href="https://x.com/wasedaigem" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="X (Twitter)">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      </a>

      {/* Mail */}
      <a href="mailto:contact@igem-waseda.jp" className="hover:opacity-70 transition-opacity" aria-label="Mail">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>
    </>
  )
}