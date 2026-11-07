import logo from '../assets/logo.png'

export default function Logo({ className = 'h-12 md:h-14' }) {
  return <img src={logo} alt="Annisaa" className={`w-auto ${className}`} />
}