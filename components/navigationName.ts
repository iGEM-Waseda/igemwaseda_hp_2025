"use client";

import { useTranslations } from 'next-intl';

export function PageName() {
  const t = useTranslations('common');
  const pages = [
    { href : '/about', label: t('navigation.aboutUs') },
    { href : '/projects', label: t('navigation.projects.projects') },
    { href : '/team', label: t('navigation.team.team') },
    { href : '/members', label: t('navigation.members') },
    { href : '/recruitment', label: t('navigation.recruitment') },
    { href : '/donation', label: t('navigation.donation') },
    { href : '/contact', label: t('navigation.contact') }
  ]

  return pages;
}

export function ProjectTabName() {
  const t = useTranslations('common');
  const projectLink = "/projects";
  const projectItems = [
    { href : projectLink, label: t('navigation.projects.top') },
    { href : `${projectLink}#2024`, label: "2024" },
    { href : `${projectLink}#2022`, label: "2022" },
    { href : `${projectLink}#2020`, label: "2020" }
  ]

  return projectItems;
}

export function TeamTabName() {
  const t = useTranslations('common');
  const teamLink = "/team";
  const projectItems = [
    { href : teamLink, label: t('navigation.team.top') },
    { href : `${teamLink}#wet`, label: "Wet" },
    { href : `${teamLink}#dry`, label: "Dry" },
    { href : `${teamLink}#hp`, label: "HP" },
    { href : `${teamLink}#other`, label: "Other" }
  ]

  return projectItems;
}
