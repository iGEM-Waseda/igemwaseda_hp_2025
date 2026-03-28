import RecruitmentClientPage from "@/components/RecruitmentClientPage";
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

  const pathName = 'recruitment';

  const currentPath = locale === 'ja' ? `/${pathName}` : `/${locale}/${pathName}`;

  return {
    title: 'Recruitment',
 
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

export default function Recruitment() {
  return <RecruitmentClientPage />;
}