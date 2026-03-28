import RecruitmentClientPage from "@/components/RecruitmentClientPage";
import { Metadata } from 'next';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
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