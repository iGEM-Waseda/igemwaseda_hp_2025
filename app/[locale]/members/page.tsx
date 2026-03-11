'use client';

import { useTranslations } from "next-intl";
import { useState } from "react";
import MembersCard from "@/components/members/MembersCard";
import Image from "next/image";

export default function Members() {
  const t = useTranslations('members');
  const [isSortByYear, setIsSortByYear] = useState<boolean>(true);

  function handleClick() {
    setIsSortByYear(!isSortByYear);
  }

  return (
    <>
      <div className="mt-[48px] xl:mt-[64px]" /> {/* ヘッダー分だけ下げる */}

      <section className="w-full relative">
        <div className="w-full aspect-[3/1]">
          <div className="relative aspect-auto h-full">
            <Image 
              src="/members_hero_image_resized.png"
              alt="iGEM - Waseda Won the Village Prize at iGEM 2024"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 300vw, 100vw"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/65 z-0 block" />

        <div className="absolute inset-0 z-30 grid grid-cols-2 px-8 py-4 md:px-24">
          <div className="flex flex-col justify-center">
            <h3
              className="font-heading-en font-black text-2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-[5vw] font-black mb-1 leading-none tracking-tighter text-white"
              style={{ fontFamily: '"Arial Black", sans-serif' }}
            >
              Members
            </h3>
            <p className="text-sm md:text-base lg:text-xl lg:text-1.5xl xl:text-2xl 2xl:text-[1.5vw] font-bold tracking-widest text-white">
              メンバー
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <button className="text-base lg:text-xl font-bold text-gray-800 hover:text-yellow" onClick={handleClick}>
          <div className="grid grid-cols-2 gap-2 items-center">
            <p>{t('sortBy')}{isSortByYear ? t('year') : t('team')}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-transfer">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 10h-16l5.5 -6" /><path d="M4 14h16l-5.5 6" />
            </svg>
          </div>
        </button>

        {/* 掲載順は、それぞれの項目内で苗字の50音順。ただし幹事長などは先頭にした。 */}
        {isSortByYear && (
          <div>
            <h1 className="heading font-heading-en" style={{ fontFamily: '"Arial Black", Arial, sans-serif' }}>
              Senior(B4)
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
              <MembersCard 
                nameJa="川端 準" 
                nameEn="Jun Kawabata" 
                imgSrc="jun-kawabata.jpg" 
                membersCardProps={t.raw('junKawabata') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="高 子越" 
                nameEn="Shietsu Ko" 
                imgSrc="shietsu-ko.png" 
                membersCardProps={t.raw('shietsuKo') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="近藤 大介" 
                nameEn="Daisuke Koudo" 
                imgSrc="daisuke-kondo_v2.jpg" 
                membersCardProps={t.raw('daisukeKondo') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="戸川 樹" 
                nameEn="Itsuki Togawa" 
                imgSrc="itsuki-togawa.png" 
                membersCardProps={t.raw('itsukiTogawa') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="鳥山 優人" 
                nameEn="Yuto Toriyama" 
                imgSrc="yuto-toriyama.jpg" 
                membersCardProps={t.raw('yutoToriyama') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="前田 志帆" 
                nameEn="Shiho Maeda" 
                imgSrc="shiho-maeda.jpg" 
                membersCardProps={t.raw('shihoMaeda') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
            </div>

            <h1 className="heading" style={{ fontFamily: '"Arial Black", sans-serif' }}>
              Junior(B3)
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
              <MembersCard 
                nameJa="千葉 将博" 
                nameEn="Masahiro Chiba" 
                imgSrc="masahiro-chiba.png" 
                membersCardProps={t.raw('masahiroChiba') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="木村 遼生" 
                nameEn="Haruki Kimura" 
                imgSrc="ryosei-kimura.png" 
                membersCardProps={t.raw('harukiKimura') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="丸橋 慶吾" 
                nameEn="Keigo Marubashi" 
                imgSrc="keigo-marubashi.jpg" 
                membersCardProps={t.raw('keigoMarubashi') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="堀内 太登" 
                nameEn="Taito Horiuchi" 
                imgSrc="taita-horiuchi.jpg" 
                membersCardProps={t.raw('taitoHoriuchi') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="森 大樹" 
                nameEn="Daiki Mori" 
                imgSrc="daiki-mori.jpg" 
                membersCardProps={t.raw('taikiMori') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
            </div>

            <h1 className="heading" style={{ fontFamily: '"Arial Black", sans-serif' }}>
              Sophomore(B2)
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
              <MembersCard 
                nameJa="青山 渉子" 
                nameEn="Shoko Aoyama" 
                imgSrc="shoko-aoyama.jpg" 
                membersCardProps={t.raw('shokoAoyama') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="虻川 友輝" 
                nameEn="Tomoki Abukawa" 
                imgSrc="tomoki-abukawa.jpg" 
                membersCardProps={t.raw('tomokiAbukawa') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="石田 那央" 
                nameEn="Nao Ishida" 
                imgSrc="nao-ishida.jpg" 
                membersCardProps={t.raw('naoIshida') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="皆藤 華恋" 
                nameEn="Karen Kaito" 
                imgSrc="karen-kaito.jpg" 
                membersCardProps={t.raw('karenKaito') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="齋藤 愛果" 
                nameEn="Manaka Saito" 
                imgSrc="manaka-saito.jpg" 
                membersCardProps={t.raw('manakaSaito') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="下川 翠珠" 
                nameEn="Suzu Shimokawa" 
                imgSrc="suzu-shimokawa.jpeg" 
                membersCardProps={t.raw('suzuShimokawa') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="瀨川 智大" 
                nameEn="Tomohiro Segawa" 
                imgSrc="tomohiro-segawa.png" 
                membersCardProps={t.raw('tomohiroSegawa') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="田代 逞真" 
                nameEn="Takuma Tashiro" 
                imgSrc="takuma-tashiro.jpg" 
                membersCardProps={t.raw('takumaTashiro') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="内藤 千晶" 
                nameEn="Chiaki Naito" 
                imgSrc="chiaki-naito.jpg" 
                membersCardProps={t.raw('chiakiNaito') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="長瀨 颯太" 
                nameEn="Sota Nagase" 
                imgSrc="sota-nagase.jpg" 
                membersCardProps={t.raw('sotaNagase') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="長瀬 瑶莉" 
                nameEn="Yori Nagase" 
                imgSrc="yori-nagase.jpg" 
                membersCardProps={t.raw('yoriNagase') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="山田 瑛斗" 
                nameEn="Eito Yamada" 
                imgSrc="eito-yamada.jpg" 
                membersCardProps={t.raw('eitoYamada') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="山本 秋希" 
                nameEn="Aki Yamamoto" 
                imgSrc="aki-yamamoto.jpg" 
                membersCardProps={t.raw('akiYamamoto') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
            </div>

          </div>
        )}

        {!isSortByYear && (
          <div>
            <h1 className="heading font-heading-en" style={{ fontFamily: '"Arial Black", Arial, sans-serif' }}>
              Leaders
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
              <MembersCard 
                nameJa="千葉 将博" 
                nameEn="Masahiro Chiba" 
                imgSrc="masahiro-chiba.png" 
                membersCardProps={t.raw('masahiroChiba') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="木村 遼生" 
                nameEn="Haruki Kimura" 
                imgSrc="ryosei-kimura.png" 
                membersCardProps={t.raw('harukiKimura') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="丸橋 慶吾" 
                nameEn="Keigo Marubashi" 
                imgSrc="keigo-marubashi.jpg" 
                membersCardProps={t.raw('keigoMarubashi') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
            </div>

            <h1 className="heading" style={{ fontFamily: '"Arial Black", sans-serif' }}>
              Wet
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
              <MembersCard 
                nameJa="石田 那央" 
                nameEn="Nao Ishida" 
                imgSrc="nao-ishida.jpg" 
                membersCardProps={t.raw('naoIshida') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="木村 遼生" 
                nameEn="Haruki Kimura" 
                imgSrc="ryosei-kimura.png" 
                membersCardProps={t.raw('harukiKimura') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="高 子越" 
                nameEn="Shietsu Ko" 
                imgSrc="shietsu-ko.png" 
                membersCardProps={t.raw('shietsuKo') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="近藤 大介" 
                nameEn="Daisuke Koudo" 
                imgSrc="daisuke-kondo_v2.jpg" 
                membersCardProps={t.raw('daisukeKondo') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="齋藤 愛果" 
                nameEn="Manaka Saito" 
                imgSrc="manaka-saito.jpg" 
                membersCardProps={t.raw('manakaSaito') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="瀨川 智大" 
                nameEn="Tomohiro Segawa" 
                imgSrc="tomohiro-segawa.png" 
                membersCardProps={t.raw('tomohiroSegawa') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="千葉 将博" 
                nameEn="Masahiro Chiba" 
                imgSrc="masahiro-chiba.png" 
                membersCardProps={t.raw('masahiroChiba') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="内藤 千晶" 
                nameEn="Chiaki Naito" 
                imgSrc="chiaki-naito.jpg" 
                membersCardProps={t.raw('chiakiNaito') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="長瀨 颯太" 
                nameEn="Sota Nagase" 
                imgSrc="sota-nagase.jpg" 
                membersCardProps={t.raw('sotaNagase') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="長瀬 瑶莉" 
                nameEn="Yori Nagase" 
                imgSrc="yori-nagase.jpg" 
                membersCardProps={t.raw('yoriNagase') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="堀内 太登" 
                nameEn="Taito Horiuchi" 
                imgSrc="taita-horiuchi.jpg" 
                membersCardProps={t.raw('taitoHoriuchi') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="前田 志帆" 
                nameEn="Shiho Maeda" 
                imgSrc="shiho-maeda.jpg" 
                membersCardProps={t.raw('shihoMaeda') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="森 大樹" 
                nameEn="Daiki Mori" 
                imgSrc="daiki-mori.jpg" 
                membersCardProps={t.raw('taikiMori') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="山田 瑛斗" 
                nameEn="Eito Yamada" 
                imgSrc="eito-yamada.jpg" 
                membersCardProps={t.raw('eitoYamada') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="山本 秋希" 
                nameEn="Aki Yamamoto" 
                imgSrc="aki-yamamoto.jpg" 
                membersCardProps={t.raw('akiYamamoto') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
            </div>

            <h1 className="heading" style={{ fontFamily: '"Arial Black", sans-serif' }}>
              Dry
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
              <MembersCard 
                nameJa="青山 渉子" 
                nameEn="Shoko Aoyama" 
                imgSrc="shoko-aoyama.jpg" 
                membersCardProps={t.raw('shokoAoyama') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="虻川 友輝" 
                nameEn="Tomoki Abukawa" 
                imgSrc="tomoki-abukawa.jpg" 
                membersCardProps={t.raw('tomokiAbukawa') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="皆藤 華恋" 
                nameEn="Karen Kaito" 
                imgSrc="karen-kaito.jpg" 
                membersCardProps={t.raw('karenKaito') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="川端 準" 
                nameEn="Jun Kawabata" 
                imgSrc="jun-kawabata.jpg" 
                membersCardProps={t.raw('junKawabata') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="下川 翠珠" 
                nameEn="Suzu Shimokawa" 
                imgSrc="suzu-shimokawa.jpeg" 
                membersCardProps={t.raw('suzuShimokawa') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="田代 逞真" 
                nameEn="Takuma Tashiro" 
                imgSrc="takuma-tashiro.jpg" 
                membersCardProps={t.raw('takumaTashiro') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="戸川 樹" 
                nameEn="Itsuki Togawa" 
                imgSrc="itsuki-togawa.png" 
                membersCardProps={t.raw('itsukiTogawa') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="鳥山 優人" 
                nameEn="Yuto Toriyama" 
                imgSrc="yuto-toriyama.jpg" 
                membersCardProps={t.raw('yutoToriyama') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
            </div>

            <h1 className="heading" style={{ fontFamily: '"Arial Black", sans-serif' }}>
              HP
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
              <MembersCard 
                nameJa="皆藤 華恋" 
                nameEn="Karen Kaito" 
                imgSrc="karen-kaito.jpg" 
                membersCardProps={t.raw('karenKaito') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="川端 準" 
                nameEn="Jun Kawabata" 
                imgSrc="jun-kawabata.jpg" 
                membersCardProps={t.raw('junKawabata') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="木村 遼生" 
                nameEn="Haruki Kimura" 
                imgSrc="ryosei-kimura.png" 
                membersCardProps={t.raw('harukiKimura') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="近藤 大介" 
                nameEn="Daisuke Koudo" 
                imgSrc="daisuke-kondo_v2.jpg" 
                membersCardProps={t.raw('daisukeKondo') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="齋藤 愛果" 
                nameEn="Manaka Saito" 
                imgSrc="manaka-saito.jpg" 
                membersCardProps={t.raw('manakaSaito') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="千葉 将博" 
                nameEn="Masahiro Chiba" 
                imgSrc="masahiro-chiba.png" 
                membersCardProps={t.raw('masahiroChiba') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="内藤 千晶" 
                nameEn="Chiaki Naito" 
                imgSrc="chiaki-naito.jpg" 
                membersCardProps={t.raw('chiakiNaito') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="丸橋 慶吾" 
                nameEn="Keigo Marubashi" 
                imgSrc="keigo-marubashi.jpg" 
                membersCardProps={t.raw('keigoMarubashi') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="山田 瑛斗" 
                nameEn="Eito Yamada" 
                imgSrc="eito-yamada.jpg" 
                membersCardProps={t.raw('eitoYamada') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
            </div>

            <h1 className="heading" style={{ fontFamily: '"Arial Black", sans-serif' }}>
              Wiki・Video・Illustrator
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
              <MembersCard 
                nameJa="皆藤 華恋" 
                nameEn="Karen Kaito" 
                imgSrc="karen-kaito.jpg" 
                membersCardProps={t.raw('karenKaito') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="下川 翠珠" 
                nameEn="Suzu Shimokawa" 
                imgSrc="suzu-shimokawa.jpeg" 
                membersCardProps={t.raw('suzuShimokawa') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
              <MembersCard 
                nameJa="鳥山 優人" 
                nameEn="Yuto Toriyama" 
                imgSrc="yuto-toriyama.jpg" 
                membersCardProps={t.raw('yutoToriyama') as { role: string, department: string, highSchool: string, hobbies: string, message: string }}
              />
            </div>
          </div>
        )}

        <h1 className="heading" style={{ fontFamily: '"Arial Black", sans-serif' }}>
          Instructors
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
          <MembersCard 
            nameJa="朝日 透" 
            nameEn="Toru Asahi" 
            imgSrc="toru-asahi.png" 
            role={t('toruAsahi.role')}
            department={t('toruAsahi.department')}
          />
          <MembersCard 
            nameJa="木賀 大介" 
            nameEn="Daisuke Kiga" 
            imgSrc="daisuke-kiga.png" 
            role={t('daisukeKiga.role')}
            department={t('daisukeKiga.department')}
          />
        </div>

        <h1 className="heading" style={{ fontFamily: '"Arial Black", sans-serif' }}>
          Alumini(2024)
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 lg:gap-y-12">
          <MembersCard 
            nameJa="青沼 龍太朗" 
            nameEn="Ryutaro Aonuma" 
            imgSrc="ryutaro-aonuma.jpg" 
            role={t('ryutaroAonuma.role')}
            department={t('ryutaroAonuma.department')}
          />
          <MembersCard 
            nameJa="阿部 諒太" 
            nameEn="Ryota Abe" 
            imgSrc="ryota-abe.png" 
            role={t('ryotaAbe.role')}
            department={t('ryotaAbe.department')}
          />
          <MembersCard 
            nameJa="岡崎 ヴィクトリア 瞳子" 
            nameEn="Victoria Toko Okazaki" 
            imgSrc="tohko-victoria-okazaki.jpg" 
            role={t('vicky.role')}
            department={t('vicky.department')}
          />
          <MembersCard 
            nameJa="河津 樹里" 
            nameEn="Juri Kawazu" 
            imgSrc="juri-kawazu.jpg" 
            role={t('juriKawazu.role')}
            department={t('juriKawazu.department')}
          />
          <MembersCard 
            nameJa="佐々木 彩佳" 
            nameEn="Ayaka Sasaki" 
            imgSrc="ayaka-sasaki.jpg" 
            role={t('ayakaSasaki.role')}
            department={t('ayakaSasaki.department')}
          />
          <MembersCard 
            nameJa="清田 千遥" 
            nameEn="Chiharu Seida" 
            imgSrc="chiharu-kiyoda.png" 
            role={t('chiharuSeida.role')}
            department={t('chiharuSeida.department')}
          />
          <MembersCard 
            nameJa="束村 晴" 
            nameEn="Sei Tsukamura" 
            imgSrc="sei-tsukamura.jpg" 
            role={t('seiTsukamura.role')}
            department={t('seiTsukamura.department')}
          />
          <MembersCard 
            nameJa="中村 春香" 
            nameEn="Haruka Nakamura" 
            imgSrc="haruka-nakamura.png" 
            role={t('harukaNakamura.role')}
            department={t('harukaNakamura.department')}
          />
          <MembersCard 
            nameJa="難波 和佳奈" 
            nameEn="Wakana Namba" 
            imgSrc="wakana-nanba.jpg" 
            role={t('wakanaNamba.role')}
            department={t('wakanaNamba.department')}
          />
          <MembersCard 
            nameJa="林﨑 諒巡" 
            nameEn="Ryojun Hayashizaki" 
            imgSrc="ryojun-hayashizaki.jpg" 
            role={t('ryojunHayashizaki.role')}
            department={t('ryojunHayashizaki.department')}
          />
          <MembersCard 
            nameJa="半田 知世" 
            nameEn="Tomoyo Handa" 
            imgSrc="chiyo-handa.jpg" 
            role={t('tomoyoHanda.role')}
            department={t('tomoyoHanda.department')}
          />
          <MembersCard 
            nameJa="宮本 遼人" 
            nameEn="Ryoto Miyamoto" 
            imgSrc="ryoto-miyamoto.jpg" 
            role={t('ryotoMiyamoto.role')}
            department={t('ryotoMiyamoto.department')}
          />
          <MembersCard 
            nameJa="山本 翔太" 
            nameEn="Shota Yamamoto" 
            imgSrc="shota-yamamoto.png" 
            role={t('shotaYamamoto.role')}
            department={t('shotaYamamoto.department')}
          />
          <MembersCard 
            nameJa="横堀 襄" 
            nameEn="Jo Yokobori" 
            imgSrc="joseph-yokobori.jpg" 
            role={t('joYokobori.role')}
            department={t('joYokobori.department')}
          />
          <MembersCard 
            nameJa="渡辺 華" 
            nameEn="Hanna Watanabe" 
            imgSrc="hana-watanabe.jpg" 
            role={t('hannaWatanabe.role')}
            department={t('hannaWatanabe.department')}
          />
        </div>
        
      </section>
    </>
  );
}