import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      links.forEach(link => {
        const el = document.getElementById(link.toLowerCase())
        if (el) {
          const top = el.offsetTop - 100
          const bottom = top + el.offsetHeight

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link.toLowerCase())
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 ${scrolled ? 'bg-black/90 backdrop-blur' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a href="#" className="text-indigo-400 font-mono">&lt;DC /&gt;</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map(link => {
            const id = link.toLowerCase()
            return (
              <li key={link}>
                <a
                  href={`#${id}`}
                  className={active === id ? 'text-indigo-400' : 'text-gray-400'}
                >
                  {link}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-6">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-300"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}