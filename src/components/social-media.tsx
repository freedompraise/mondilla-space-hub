import { IconProps } from '@phosphor-icons/react'
import React from 'react'

import {
  InstagramLogo,
  LinkedinLogo,
  PinterestLogo,
  TiktokLogo,
  XLogo,
  YoutubeLogo,
} from './icons'

interface SocialMediaIconProps {
  icon: React.ComponentType<IconProps>
  name: string
  href: string
}

const socialMediaList: SocialMediaIconProps[] = [
  {
    name: 'X',
    icon: XLogo,
    href: '#',
  },
  {
    name: 'Instagram',
    icon: InstagramLogo,
    href: '#',
  },
  {
    name: 'Pinterest',
    icon: PinterestLogo,
    href: '#',
  },
  {
    name: 'Linkedin',
    icon: LinkedinLogo,
    href: '#',
  },
  {
    name: 'Tiktok',
    icon: TiktokLogo,
    href: '#',
  },
  {
    name: 'Youtube',
    icon: YoutubeLogo,
    href: '#',
  },
]

function SocialMediaIcon({ icon: Icon, name }: SocialMediaIconProps) {
  return (
    <>
      <Icon weight="fill" className="h-6 w-6" />
      <span className="sr-only">{name}</span>
    </>
  )
}

export function SocialMediaList() {
  return (
    <div className="flex gap-3">
      {socialMediaList.map(({ href, icon, name }) => (
        <a
          className="text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/90 transition-colors"
          href={href}
          key={name}
          aria-label={name}
        >
          <SocialMediaIcon name={name} icon={icon} href={href} />
        </a>
      ))}
    </div>
  )
}
