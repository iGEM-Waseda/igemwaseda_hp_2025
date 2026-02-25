'use client';

import { Link } from '@/i18n/routing';
import { PageName, ProjectTabName, TeamTabName } from '@/components/navigationName';
import TwitterButton from '@/components/TwitterButton';
import InstagramButton from '@/components/InstagramButton';
import MailButton from '@/components/MailButton';

export default function Footer() {
  const pages = PageName();
  const projectItems = ProjectTabName();
  const teamItems = TeamTabName();
  
  return (
    <footer className="w-full bg-[#5a131d] text-white py-12"> {/* フッターの色は#5a131d */}
      <div className="max-w-screen-2xl mx-auto px-8">
        <div 
          className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 w-full text-center overflow-hidden"
          style={{ containerType: 'inline-size' }}
        >
          <Link 
            href="/" 
            className="font-heading-en antialiased inline-block tracking-tighter leading-none hover:opacity-90 transition-opacity whitespace-nowrap text-[13.3cqw] md:text-[13.9cqw] lg:text-[14cqw] xl:text-[14.4cqw]" // ゴリ押し
            style={{ 
              fontFamily: '"Arial Black", sans-serif', 
              fontWeight: 900 
            }}
          >
            iGEM-<span className="text-yellow">W</span>aseda
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 md:mb-12 lg:mb-16">
          
          <div className="flex flex-col space-y-5 text-sm sm:text-base md:text-lg font-medium tracking-wide">
            <Link href={pages[0].href} className="hover:text-yellow transition-colors w-fit">{pages[0].label}</Link>
            <Link href={pages[3].href} className="hover:text-yellow transition-colors w-fit">{pages[3].label}</Link>
            <Link href={pages[4].href} className="hover:text-yellow transition-colors w-fit">{pages[4].label}</Link>
            <Link href={pages[5].href} className="hover:text-yellow transition-colors w-fit">{pages[5].label}</Link>
            <Link href={pages[6].href} className="hover:text-yellow transition-colors w-fit">{pages[6].label}</Link>
          </div>

          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-medium tracking-wide mb-5">{pages[1].label}</h3>
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-sm sm:text-base md:text-lg">
              <Link href={projectItems[0].href} className="hover:text-yellow transition-colors w-fit">{projectItems[0].label}</Link>
              <Link href={projectItems[1].href} className="hover:text-yellow transition-colors w-fit">{projectItems[1].label}</Link>
              <Link href={projectItems[2].href} className="hover:text-yellow transition-colors w-fit">{projectItems[2].label}</Link>
              <Link href={projectItems[3].href} className="hover:text-yellow transition-colors w-fit">{projectItems[3].label}</Link>
            </div>
          </div>

          <div className="relative">
            <h3 className="text-sm sm:text-base md:text-lg font-medium tracking-wide mb-5">{pages[2].label}</h3>
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-sm sm:text-base md:text-lg">
              <Link href={teamItems[0].href} className="hover:text-yellow transition-colors w-fit">{teamItems[0].label}</Link>
              <Link href={teamItems[1].href} className="hover:text-yellow transition-colors w-fit">{teamItems[1].label}</Link>
              <Link href={teamItems[2].href} className="hover:text-yellow transition-colors w-fit">{teamItems[2].label}</Link>
              <Link href={teamItems[3].href} className="hover:text-yellow transition-colors w-fit">{teamItems[3].label}</Link>
              <Link href={teamItems[4].href} className="hover:text-yellow transition-colors w-fit">{teamItems[4].label}</Link>
            </div>

            <div className="hidden lg:flex absolute bottom-0 right-0 gap-6">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-8 relative">
          <div className="flex lg:hidden gap-8 mb-8">
            <SocialIcons />
          </div>
          <p className="text-sm tracking-wider font-light">
            &copy; 2026 iGEM - Waseda
          </p>
        </div>

      </div>
    </footer>
  );
}

function SocialIcons() {
  return (
    <>
      <TwitterButton textColor='text-white' hoverColor='hover:text-yellow' />
      <InstagramButton textColor='text-white' hoverColor='hover:text-yellow' />
      <MailButton textColor='text-white' hoverColor='hover:text-yellow' />
    </>
  )
}