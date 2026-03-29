import RecruitmentClientPage from "@/components/RecruitmentClientPage";
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

  const pathName = 'recruitment';

  const currentPath = locale === 'ja' ? `/${pathName}` : `/${locale}/${pathName}`;
  
  const t = await getTranslations({ locale, namespace: 'home.home' });

  return {
    title: 'Recruitment',
    description: t('recruitment'),
 
    alternates: {
      canonical: currentPath,
      languages: {
        'en': `/en/${pathName}`,
        'ja': `/${pathName}`,
        'x-default': `/${pathName}`,
      },
    },

    twitter: {
      description: t('recruitment'),
    },
  };
}

export default function Recruitment() {
  return <RecruitmentClientPage />;
}