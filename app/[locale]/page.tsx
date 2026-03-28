import HomeClientPage from '@/components/home/HomeClientPage';
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
