"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Melody Cleaning Services Logo"
            width={150}
            height={50}
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="flex items-center text-sm font-medium hover:text-primary">
                Services
                <Plus className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span className="flex items-center">
                      Domestic Cleaning
                      <Plus className="ml-1 h-4 w-4" />
                    </span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/services#domestic-end-of-tenancy">End of Tenancy</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services#domestic-move-in-out">Move-In/Move-Out</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services#domestic-carpet-cleaning">Carpet Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services#domestic-deep-clean">Deep Clean</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services#domestic-standard-cleaning">Standard Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services#domestic-housekeeping">General Housekeeping</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services#domestic-mattress-cleaning">Mattress Cleaning</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services#domestic-upholstery-cleaning">Upholstery Cleaning</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span className="flex items-center">
                      Commercial Cleaning
                      <Plus className="ml-1 h-4 w-4" />
                    </span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/services#commercial-office-workshop">Office and Workshop</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services#commercial-restaurants-hotels">Restaurants and Hotels</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services#commercial-care-homes">Care Homes</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services#commercial-shop-cleaning">Shop Cleaning</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span className="flex items-center">
                      Specialised Cleaning
                      <Plus className="ml-1 h-4 w-4" />
                    </span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/services#specialised-end-of-construction">End of Construction</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services#specialised-pre-post-event">Pre/Post Event</Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
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
        <div className="fixed inset-0 z-50 flex flex-col bg-primary pt-16">
          <div className="container flex flex-col space-y-4 p-4">
            <Link href="/" className="py-2 text-lg font-medium text-secondary" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="py-2 text-lg font-medium text-secondary" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/services" className="py-2 text-lg font-medium text-secondary" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/sectors" className="py-2 text-lg font-medium text-secondary" onClick={toggleMenu}>
              Sectors
            </Link>
            <Link href="/book" className="py-2 text-lg font-medium text-secondary" onClick={toggleMenu}>
              Book Online
            </Link>
            <Link href="/contact" className="py-2 text-lg font-medium text-secondary" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
