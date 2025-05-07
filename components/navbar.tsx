"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Plus, Minus } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({})
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Reset expanded menus when closing the main menu
    if (isOpen) {
      setExpandedMenus({})
    }
  }

  const toggleSubmenu = (menu: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="Melody.png"
            alt="Melody Cleaning Services Logo"
            width={180}
            height={60}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <Link href="/services" className="text-sm font-medium hover:text-primary flex items-center">
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>

            {/* Dropdown Content */}
            <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              {/* Domestic Cleaning */}
              <div className="p-4 border-b">
                <div className="relative group/domestic">
                  <span className="font-medium text-primary mb-2 block hover:underline flex items-center justify-between cursor-pointer">
                    Domestic Cleaning
                    <Plus className="inline-block ml-1 h-4 w-4" />
                  </span>
                  <div className="hidden group-hover/domestic:block ml-4 mt-2">
                    <Link href="/services#domestic-end-of-tenancy" className="block py-1 text-sm hover:text-primary">
                      End of Tenancy
                    </Link>
                    <Link href="/services#domestic-move-in-out" className="block py-1 text-sm hover:text-primary">
                      Move-In/Move-Out
                    </Link>
                    <Link href="/services#domestic-carpet-cleaning" className="block py-1 text-sm hover:text-primary">
                      Carpet Cleaning
                    </Link>
                    <Link href="/services#domestic-deep-clean" className="block py-1 text-sm hover:text-primary">
                      Deep Clean
                    </Link>
                    <Link href="/services#domestic-standard-cleaning" className="block py-1 text-sm hover:text-primary">
                      Standard Cleaning
                    </Link>
                    <Link href="/services#domestic-housekeeping" className="block py-1 text-sm hover:text-primary">
                      General Housekeeping
                    </Link>
                    <Link href="/services#domestic-mattress-cleaning" className="block py-1 text-sm hover:text-primary">
                      Mattress Cleaning
                    </Link>
                    <Link
                      href="/services#domestic-upholstery-cleaning"
                      className="block py-1 text-sm hover:text-primary"
                    >
                      Upholstery Cleaning
                    </Link>
                  </div>
                </div>
              </div>

              {/* Commercial Cleaning */}
              <div className="p-4 border-b">
                <div className="relative group/commercial">
                  <span className="font-medium text-primary mb-2 block hover:underline flex items-center justify-between cursor-pointer">
                    Commercial Cleaning
                    <Plus className="inline-block ml-1 h-4 w-4" />
                  </span>
                  <div className="hidden group-hover/commercial:block ml-4 mt-2">
                    <Link href="/services#commercial-office-workshop" className="block py-1 text-sm hover:text-primary">
                      Office and Workshop
                    </Link>
                    <Link
                      href="/services#commercial-restaurants-hotels"
                      className="block py-1 text-sm hover:text-primary"
                    >
                      Restaurants and Hotels
                    </Link>
                    <Link href="/services#commercial-care-homes" className="block py-1 text-sm hover:text-primary">
                      Care Homes
                    </Link>
                    <Link href="/services#commercial-shop-cleaning" className="block py-1 text-sm hover:text-primary">
                      Shop Cleaning
                    </Link>
                  </div>
                </div>
              </div>

              {/* Specialised Cleaning */}
              <div className="p-4">
                <div className="relative group/specialised">
                  <span className="font-medium text-primary mb-2 block hover:underline flex items-center justify-between cursor-pointer">
                    Specialised Cleaning
                    <Plus className="inline-block ml-1 h-4 w-4" />
                  </span>
                  <div className="hidden group-hover/specialised:block ml-4 mt-2">
                    <Link
                      href="/services#specialised-end-of-construction"
                      className="block py-1 text-sm hover:text-primary"
                    >
                      End of Construction
                    </Link>
                    <Link href="/services#specialised-pre-post-event" className="block py-1 text-sm hover:text-primary">
                      Pre/Post Event
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/sectors" className="text-sm font-medium hover:text-primary">
            Sectors
          </Link>
          <Link href="/book" className="text-sm font-medium hover:text-primary">
            Book Online
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="flex md:hidden" onClick={toggleMenu} aria-label={isOpen ? "Close Menu" : "Open Menu"}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div ref={menuRef} className="fixed inset-0 z-50 flex flex-col bg-[#3A0162] pt-16 mobile-menu-container">
          <div className="container flex flex-col space-y-4 p-4">
            <Link href="/" className="py-2 text-lg font-medium text-[#9AEDB6] mobile-menu-item" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className="py-2 text-lg font-medium text-[#9AEDB6] mobile-menu-item"
              onClick={toggleMenu}
            >
              About Us
            </Link>

            {/* Services with submenu */}
            <div className="py-2 mobile-menu-item">
              <div
                className="flex items-center justify-between w-full text-lg font-medium text-[#9AEDB6] cursor-pointer"
                onClick={() => toggleSubmenu("services")}
              >
                <span>Services</span>
                {expandedMenus["services"] ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </div>

              <div
                className={`mt-2 ml-4 space-y-3 overflow-hidden transition-all duration-300 ${
                  expandedMenus["services"] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {/* Domestic Cleaning */}
                <div className="mobile-submenu-item">
                  <div
                    className="flex items-center justify-between w-full text-base font-medium text-[#9AEDB6] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleSubmenu("domestic")
                    }}
                  >
                    <span>Domestic Cleaning</span>
                    {expandedMenus["domestic"] ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>

                  <div
                    className={`ml-4 space-y-2 overflow-hidden transition-all duration-300 ${
                      expandedMenus["domestic"] ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <Link
                      href="/services#domestic-end-of-tenancy"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      End of Tenancy
                    </Link>
                    <Link
                      href="/services#domestic-move-in-out"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      Move-In/Move-Out
                    </Link>
                    <Link
                      href="/services#domestic-carpet-cleaning"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      Carpet Cleaning
                    </Link>
                    <Link
                      href="/services#domestic-deep-clean"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      Deep Clean
                    </Link>
                    <Link
                      href="/services#domestic-standard-cleaning"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      Standard Cleaning
                    </Link>
                    <Link
                      href="/services#domestic-housekeeping"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      General Housekeeping
                    </Link>
                    <Link
                      href="/services#domestic-mattress-cleaning"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      Mattress Cleaning
                    </Link>
                    <Link
                      href="/services#domestic-upholstery-cleaning"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      Upholstery Cleaning
                    </Link>
                  </div>
                </div>

                {/* Commercial Cleaning */}
                <div className="mobile-submenu-item">
                  <div
                    className="flex items-center justify-between w-full text-base font-medium text-[#9AEDB6] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleSubmenu("commercial")
                    }}
                  >
                    <span>Commercial Cleaning</span>
                    {expandedMenus["commercial"] ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>

                  <div
                    className={`ml-4 space-y-2 overflow-hidden transition-all duration-300 ${
                      expandedMenus["commercial"] ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <Link
                      href="/services#commercial-office-workshop"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      Office and Workshop
                    </Link>
                    <Link
                      href="/services#commercial-restaurants-hotels"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      Restaurants and Hotels
                    </Link>
                    <Link
                      href="/services#commercial-care-homes"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      Care Homes
                    </Link>
                    <Link
                      href="/services#commercial-shop-cleaning"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      Shop Cleaning
                    </Link>
                  </div>
                </div>

                {/* Specialised Cleaning */}
                <div className="mobile-submenu-item">
                  <div
                    className="flex items-center justify-between w-full text-base font-medium text-[#9AEDB6] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleSubmenu("specialised")
                    }}
                  >
                    <span>Specialised Cleaning</span>
                    {expandedMenus["specialised"] ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>

                  <div
                    className={`ml-4 space-y-2 overflow-hidden transition-all duration-300 ${
                      expandedMenus["specialised"] ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <Link
                      href="/services#specialised-end-of-construction"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      End of Construction
                    </Link>
                    <Link
                      href="/services#specialised-pre-post-event"
                      className="block py-1 text-sm text-[#9AEDB6]"
                      onClick={toggleMenu}
                    >
                      Pre/Post Event
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/sectors"
              className="py-2 text-lg font-medium text-[#9AEDB6] mobile-menu-item"
              onClick={toggleMenu}
            >
              Sectors
            </Link>
            <Link
              href="/book"
              className="py-2 text-lg font-medium text-[#9AEDB6] mobile-menu-item"
              onClick={toggleMenu}
            >
              Book Online
            </Link>
            <Link
              href="/contact"
              className="py-2 text-lg font-medium text-[#9AEDB6] mobile-menu-item"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
