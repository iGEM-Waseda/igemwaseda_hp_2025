import { Link } from '@/i18n/routing';

export default function JumpToDonationSectionById({ children, id }: { children: React.ReactNode, id: string }) {
  return (
    <Link 
      href={`/donation#${id}`}
      className="py-2 group flex items-center gap-2 text-sm md:text-base lg:text-lg font-medium text-gray-800 hover:text-[#dbae07] transition-colors w-fit"
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-1">
        &gt;
      </span>
    </Link>
  )
}