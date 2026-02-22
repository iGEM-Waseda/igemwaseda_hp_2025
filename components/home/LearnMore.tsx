import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

export default function LearnMore({ href }: { href: string }) {
  const t = useTranslations('home');
  return (
    <Link 
      href={href}
      className="group flex items-center gap-2 text-sm md:text-base font-bold text-gray-900 hover:text-[#dbae07] transition-colors w-fit mb-4 md:mb-0"
    >
      {t('detail')}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        &gt;
      </span>
    </Link>
  )
}