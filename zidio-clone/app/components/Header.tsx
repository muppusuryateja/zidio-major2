'use client'

import Link from 'next/link'
import { useContext, useState } from 'react'
import { MobileMenuContext } from '../layout'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const { isOpen, setIsOpen } = useContext(MobileMenuContext)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Programs', 
      href: '/programs',
      dropdown: [
        { name: 'Web Development', href: '/programs#web-development' },
        { name: 'Mobile App Development', href: '/programs#mobile-app-development' },
        { name: 'Data Science', href: '/programs#data-science' },
        { name: 'UI/UX Design', href: '/programs#ui-ux-design' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">Zidio</Link>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button 
                      className="text-gray-800 hover:text-primary flex items-center"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="text-gray-800 hover:text-primary">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <Link href="/apply" className="hidden md:block btn-primary">
            Apply Now
          </Link>
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button 
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex justify-between items-center"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {dropdownOpen && item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </>
              ) : (
                <Link href={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link href="/apply" className="block px-4 py-2 text-sm btn-primary">
            Apply Now
          </Link>
        </div>
      )}
    </header>
  )
}

