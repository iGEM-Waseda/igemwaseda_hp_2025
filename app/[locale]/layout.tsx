import type { Metadata } from "next";
import { roboto, notoJP } from "@/lib/fonts";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { setRequestLocale } from "next-intl/server";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "iGEM - Waseda",
  description: "iGEM - Wasedaは合成生物学の世界大会であるiGEMの早稲田大学代表チームです。生物を「プログラミング」し、実験で検証すること地域の健康や環境問題を解決することを目標としています。普段はサークルの形で活動しており、日々サーベイや実験に励んでいます。生物系・情報系など様々な分野の学生が活躍しています",
};

export function generateStaticParams() {
  return [{locale: 'ja'}, {locale: 'en'}];
}

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: {locale: string};
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

  const bodyFont = locale === 'ja' ? notoJP.className : notoJP.className; // とりあえず英語の本文もNotoにしておく
  console.log(`Locale: ${locale}, Body Font: ${bodyFont}`);

  return (
    <html lang={locale} style={{ colorScheme: 'light' }}>
      <body className={`${bodyFont} bg-white`}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header/>
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
