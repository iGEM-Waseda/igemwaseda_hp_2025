import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('common');

  const pages = [
    { href : '/about', label: t('navigation.aboutUs') },
    { href : '/projects', label: t('navigation.projects') },
    { href : '/team', label: t('navigation.team') },
    { href : '/members', label: t('navigation.members') },
    { href : '/recruitment', label: t('navigation.recruitment') },
    { href : '/donation', label: t('navigation.donation') },
    { href : '/contact', label: t('navigation.contact') }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-white sticky top-0 z-50 shadow-md">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-center py-2 md:py-4">
            <div className="h-15 w-[240px] overflow-hidden relative">

              <Link href="/">
                <Image
                  src="/iGEM-Waseda_home_logo.png"
                  alt="iGEM Waseda Logo"
                  fill // 親要素いっぱいに広げる
                  className="object-cover object-center" // 上下左右を中央合わせでトリミング
                />
              </Link>
            </div>

            <div className="flex items-center space-x-15">
              <ul className="flex space-x-6">
                {pages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="text-gray-700 text-lg font-medium hover:text-[#b94047]">
                      {page.label}
                    </Link>
                    {/* <span className="text-gray-700 text-lg font-medium hover:text-[#b94047]"> */}
                    {/* {page.label}
                    </span> */}
                  </li>
                ))}
              </ul>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world text-gray-700 hover:text-[#b94047]">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" />
              </svg>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}