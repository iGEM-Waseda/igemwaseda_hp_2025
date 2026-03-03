import { useTranslations } from 'next-intl';

export default function JumpToWiki({ href }: { href: string }) {
    const t = useTranslations('common');
  return (
    <a 
      href={href}
      target="_blank"
      className="p-4 xl:p-8 group flex items-center gap-2 text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-[1.2vw] font-medium text-gray-800 hover:text-[#dbae07] transition-colors w-fit"
    >
      {t('wiki')}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        &gt;
      </span>
    </a>
  )
}