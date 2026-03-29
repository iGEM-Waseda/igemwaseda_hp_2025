import MembersClientPage from "@/components/members/MembersClientPage";
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

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
  
  const t = await getTranslations({ locale, namespace: 'home.home' });

  return {
    title: 'Members',
    description: t('members'),
 
    alternates: {
      canonical: currentPath,
      languages: {
        'en': `/en/${pathName}`,
        'ja': `/${pathName}`,
        'x-default': `/${pathName}`,
      },
    },

    twitter: {
      description: t('members'),
    },
  };
}

export default function Members() {
  return <MembersClientPage />;
}