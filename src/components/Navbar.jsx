import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end
                className={({ isActive }) =>
                  `transition-colors hover:text-brand ${
                    isActive ? 'text-brand' : 'text-paper/70'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden w-10 h-10 grid place-items-center text-paper hover:text-brand transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-ink/95 text-base"
          >
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-3 transition-colors hover:text-brand ${
                      isActive ? 'text-brand' : 'text-paper/70'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}