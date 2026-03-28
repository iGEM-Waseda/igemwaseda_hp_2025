import DonationClientPage from "@/components/donation/DonationClientPage";
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

  const pathName = 'donation';

  const currentPath = locale === 'ja' ? `/${pathName}` : `/${locale}/${pathName}`;

  return {
    title: 'Donation',
 
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

export default function Donation() {
  return <DonationClientPage />;
}