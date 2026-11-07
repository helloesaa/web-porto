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
    desc: 'A custom Discord music bot made for listening together with friends.',
    longDesc:
      'Seish is a Discord music bot I built for my friends and me. It makes it easy to queue tracks, manage playlists, and listen together in voice channels without any hassle. It is still in development.',
    tags: ['Discord Bot', 'Music', 'Ongoing'],
    image: seishImg,
    link: null,
  },
  {
    id: 2,
    category: 'bot',
    title: 'Seish Music',
    desc: 'The Telegram version of Seish, with a room system and karaoke mode.',
    longDesc:
      'Seish Music brings the Seish experience to Telegram, with a lot more to enjoy. Beyond regular music playback, it adds an interactive room system and a built-in karaoke mode, so singing and listening with friends feels like a shared moment. It is still in development.',
    tags: ['Telegram Bot', 'Music & Karaoke', 'Ongoing'],
    image: seishTeleImg,
    link: null,
  },
  {
    id: 3,
    category: 'web',
    title: 'Courlex Store',
    desc: 'A digital marketplace for buying and selling digital goods.',
    longDesc:
      'Courlex Store is a web platform for browsing, buying, and selling digital products. Its clean, dark interface is designed to make exploring the catalog and completing a purchase feel simple and fast. It is still in development.',
    tags: ['Web App', 'Digital Store', 'Ongoing'],
    image: null,
    link: null,
  },
  {
    id: 4,
    category: 'web',
    title: 'SaiWrite',
    desc: 'A writing space where writers share their stories and readers discover them.',
    longDesc:
      'SaiWrite is a web platform where writers can put their stories into words and readers can explore what others have written. Its clean, dark interface keeps the focus on the writing itself. It is still in development.',
    tags: ['Web App', 'Writing Platform', 'Ongoing'],
    image: null,
    link: null,
  },
]