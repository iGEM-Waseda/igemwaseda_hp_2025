import { Roboto, Noto_Sans_JP } from 'next/font/google';

export const roboto = Roboto({ // とりあえず
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto'
});

export const notoJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-notojp'
});
