
import seishImg from '../assets/Seish-Dc.png'
import seishTeleImg from '../assets/Seish-Tele.png'

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'bot', label: 'Bots' },
  { id: 'web', label: 'Web' },
  { id: 'design', label: 'Graphic Design' },
]

export const projects = [
  {
    id: 1,
    category: 'bot',
    title: 'Seish',
    desc: 'A custom Discord music bot built for hanging out and listening together.',
    longDesc:
      'Seish is a custom Discord music bot created so my friends and I can easily queue tracks, manage playlists, and listen to music together in voice channels without any hassle. Currently in ongoing development.',
    tags: ['Discord Bot', 'Music', 'Ongoing'],
    image: seishImg,
    link: null,
  },
  {
    id: 2,
    category: 'bot',
    title: 'Seish Music',
    desc: 'An upgraded Telegram version of Seish featuring a room system and karaoke mode.',
    longDesc:
      'Bringing the Seish experience to Telegram with major upgrades. Beyond standard music playback, Seish Music introduces an interactive room system and a built-in karaoke feature, making it much more fun to sing and listen together with friends.',
    tags: ['Telegram Bot', 'Music & Karaoke', 'Ongoing'],
    image: seishTeleImg,
    link: null,
  },
  {
    id: 3,
    category: 'web',
    title: 'Courlex Store',
    desc: 'A digital marketplace web project for buying and selling digital goods.',
    longDesc:
      'Courlex Store is an ongoing web platform designed for browsing and purchasing digital products. Built with a clean, dark-themed interface to make exploring catalogs and transactions simple and fast.',
    tags: ['Web App', 'Digital Store', 'Ongoing'],
    image: null,
    link: null,
  },
    {
    id: 4,
    category: 'web',
    title: 'SaiWrite',
    desc: 'A digital marketplace web project for buying and selling digital goods.',
    longDesc:
      'SaiWrite is an ongoing web platform designed for browsing and purchasing digital products. Built with a clean, dark-themed interface to make exploring catalogs and transactions simple and fast.',
    tags: ['Web App', 'Digital Store', 'Ongoing'],
    image: null,
    link: null,
  },
]