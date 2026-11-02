import { FaInstagram, FaDiscord, FaLinkedinIn } from 'react-icons/fa6'
import { Mail } from 'lucide-react'

export const socials = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@isaa.logg',
    href: 'https://instagram.com/isaaa.log',
    icon: FaInstagram,
  },
  {
    id: 'discord',
    label: 'Discord',
    handle: 'alltoshitt',
    href: 'https://discord.com/users/alltoshitt',
    icon: FaDiscord,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'Annisaa Lukluil Jannah',
    href: 'http://linkedin.com/in/annisaa-luklu-il-j/',
    icon: FaLinkedinIn,
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'calllmegee@gmail.com',
    href: 'mailto:calllmegee@gmail.com',
    icon: Mail,
  },
]