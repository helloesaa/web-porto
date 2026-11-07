import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 flex flex-col items-center text-center">
        <Link to="/">
          <Logo className="h-20 md:h-24" />
        </Link>
        <p className="text-paper/50 text-sm mt-5 max-w-sm leading-relaxed">
          Developer & designer building bots, websites and visuals with care.
        </p>
        <p className="text-paper/30 text-xs mt-10">
          © {new Date().getFullYear()} Annisaa. All rights reserved.
        </p>
      </div>
    </footer>
  )
}