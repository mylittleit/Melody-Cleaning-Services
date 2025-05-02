import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12">
      <div className="container pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Melody Cleaning Services</h3>
            <p className="mb-4 text-sm text-gray-600">
              Professional cleaning services across the UK. We provide high-quality cleaning solutions for both domestic
              and commercial clients.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61575544748505"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/melodycleaningservices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/melodycleaningservices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@melodycleaningservices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <FaTiktok className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/domestic/end-of-tenancy" className="text-gray-600 hover:text-primary">
                  End of Tenancy
                </Link>
              </li>
              <li>
                <Link href="/services/domestic/deep-clean" className="text-gray-600 hover:text-primary">
                  Deep Clean
                </Link>
              </li>
              <li>
                <Link href="/services/commercial/restaurants-hotels" className="text-gray-600 hover:text-primary">
                  Restaurants and Hotels
                </Link>
              </li>
              <li>
                <Link href="/services/domestic/carpet-cleaning" className="text-gray-600 hover:text-primary">
                  Carpet Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/specialised/end-of-construction" className="text-gray-600 hover:text-primary">
                  End of Construction
                </Link>
              </li>
              <li>
                <Link href="/services/specialised/pre-post-event" className="text-gray-600 hover:text-primary">
                  Pre/Post Event
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="text-gray-600 hover:text-primary">
                  Sectors
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-gray-600 hover:text-primary">
                  Book Online
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a href="mailto:melodycleaningservices@gmail.com">melodycleaningservices@gmail.com</a>
              </li>
              <li className="text-gray-600">
                <strong>Phone:</strong> <a href="tel:07453581984">07453581984</a>
              </li>
              <li className="text-gray-600">
                <strong>Hours:</strong> Mon-Sun: 8am-10pm
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6">
        <div className="container flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0 md:text-left">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Melody Cleaning Services. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-gray-600 hover:text-primary">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
