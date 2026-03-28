import MembersClientPage from "@/components/members/MembersClientPage";
import { Metadata } from 'next';

export async function generateMetadata(
  props: { 
    params: Promise<{ locale: string }> 
  }
): Promise<Metadata> {
  const params = await props.params;

  const {
    locale
  } = params;

  const pathName = 'members';

  const currentPath = locale === 'ja' ? `/${pathName}` : `/${locale}/${pathName}`;

  return {
    title: 'Members',
 
    alternates: {
      canonical: currentPath,
      languages: {
        'en': `/en/${pathName}`,
        'ja': `/${pathName}`,
        'x-default': `/${pathName}`,
      },
    },
  };
}

export default function Members() {
  return <MembersClientPage />;
}