import type { Metadata } from "next";
import { notoJP } from "@/lib/fonts";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { setRequestLocale } from "next-intl/server";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
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

  const t = await getTranslations({ locale, namespace: 'common' });

  return {
    metadataBase: new URL('https://igemwaseda-hp-2025.vercel.app/'),
  
    title: {
      template: '%s - iGEM Waseda',
      default: 'iGEM Waseda',
    },

    description: t('description'),
    
    openGraph: {
      siteName: 'iGEM Waseda',
      type: 'website',
      images: ['/homeimage.png'],
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: {
        template: '%s - iGEM Waseda',
        default: 'iGEM Waseda',
      },
      description: t('description'),
      images: ['/homeimage.png'],
    },
  };
}

export function generateStaticParams() {
  return [{locale: 'ja'}, {locale: 'en'}];
}

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // 無効な言語の場合は404ページを表示
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // SSG対応
  setRequestLocale(locale);
  // 言語ファイルの読み込み
  const messages = await getMessages();

  return (
    <html lang={locale} style={{ colorScheme: 'light' }} className="scroll-pt-[48px] md:scroll-pt-[64px] scroll-smooth">
      <body className={`${notoJP.className} bg-white`}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header/>
            <main>
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
