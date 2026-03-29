import DonationClientPage from "@/components/donation/DonationClientPage";
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

  const pathName = 'donation';

  const currentPath = locale === 'ja' ? `/${pathName}` : `/${locale}/${pathName}`;
  
  const t = await getTranslations({ locale, namespace: 'home.home' });

  return {
    title: 'Donations and Sponsorship',
    description: t('donation'),
 
    alternates: {
      canonical: currentPath,
      languages: {
        'en': `/en/${pathName}`,
        'ja': `/${pathName}`,
        'x-default': `/${pathName}`,
      },
    },

    twitter: {
      description: t('donation'),
    },
  };
}

export default function Donation() {
  return <DonationClientPage />;
}