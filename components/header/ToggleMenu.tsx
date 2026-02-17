import { PageName } from '@/components/navigationName';

export default function ToggleMenu() {
  const pages = PageName();

  // ホバー or クリック後のドロップダウンメニューの実装はまだ
  return (
    <div className="flex min-[1025px]:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#b94047] icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />
      </svg>
    </div>
  );
}