import Image from "next/image";
import { useTranslations } from 'next-intl';
import HeroImage from "@/components/home/HeroImage";

export default function Home() {
  const t = useTranslations('common');
  return (
    <HeroImage />
  );
}
