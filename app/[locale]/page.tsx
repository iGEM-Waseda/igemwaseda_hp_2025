import HomeClientPage from '@/components/home/HomeClientPage';
import { Metadata } from 'next';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  
  // 🌟 locale を使って、そのページの正しいURLだけを組み立てる
  const currentPath = locale === 'ja' ? `/` : `/${locale}/`;

  return {
    alternates: {
      canonical: currentPath,
      languages: {
        'en': `/en/`,
        'ja': `/`,
        'x-default': `/en/`,
      },
    },
  };
}

export default function Home() {
  return <HomeClientPage />;
}
