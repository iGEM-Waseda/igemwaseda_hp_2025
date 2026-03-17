'use client';

import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";

export default function LearnMore({ href, textColor }: { href: string, textColor?: string }) {
  const t = useTranslations('home');
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        className={`group flex items-center gap-2 text-sm md:text-base font-bold ${textColor ? textColor : "text-gray-900"} hover:text-[#dbae07] transition-colors w-fit mb-4 md:mb-0`}
      >
        {t('detail')}
        <motion.span
          className="inline-block transition-transform duration-200 group-hover:translate-x-1"
        >
          &gt;
        </motion.span>
      </Link>
    </motion.div>
  )
}