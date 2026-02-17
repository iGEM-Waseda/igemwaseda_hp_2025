import { Link } from '@/i18n/routing';
import { PageName, ProjectTabName, TeamTabName } from '@/components/navigationName';
import DropdownNavItem from '@/components/header/DropdownNavItem';

export default function NavBar() {
  const pages = PageName();
  const projectItems = ProjectTabName();
  const teamItems = TeamTabName();
  const listClassName = "text-gray-700 text-sm xl:text-lg font-medium transition-colors hover:text-[#b94047]"

  return (
    <nav className="hidden min-[1025px]:flex space-x-3 xl:space-x-6">
      <Link href={pages[0].href} className={listClassName}>
        {pages[0].label}
      </Link>

      <DropdownNavItem label={pages[1].label} items={projectItems} />
      <DropdownNavItem label={pages[2].label} items={teamItems} />

      <Link href={pages[3].href} className={listClassName}>
        {pages[3].label}
      </Link>
      <Link href={pages[4].href} className={listClassName}>
        {pages[4].label}
      </Link>
      <Link href={pages[5].href} className={listClassName}>
        {pages[5].label}
      </Link>
      <Link href={pages[6].href} className={listClassName}>
        {pages[6].label}
      </Link>
    </nav>

);
}