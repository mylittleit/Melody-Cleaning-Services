import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle,
  Clock,
  Leaf,
  Users,
  Shield,
  Coins,
  FileText,
  Bed,
  Sparkles,
  UtensilsCrossed,
  Construction,
  Brush,
  MapPin,
} from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner with updated header image */}
      <section className="page-header">
        <Image src="/Aboutpage.png" alt="About Us" fill className="object-cover" />
        <div className="page-header-content">
          <h1 className="text-4xl font-bold text-white md:text-5xl">ABOUT US</h1>
        </div>
      </section>

      {/* About Us Content */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-lg text-gray-700">
              Melody Cleaning Services is a professional cleaning company dedicated to providing high-quality cleaning
              services to homes and businesses across the UK. With our team of experienced and trained professionals, we
              deliver exceptional results that exceed our clients' expectations. We take pride in our attention to
              detail and commitment to customer satisfaction.
            </p>
            <p className="mb-8 text-lg text-gray-700">
              Founded with a passion for cleanliness and customer satisfaction, we are focused on becoming one of the
              most trusted cleaning services in the region. Our attention to detail, use of eco-friendly products, and
              personalised approach set us apart from other cleaning companies.
            </p>

            <div className="mb-12 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90">
                <Link href="/book">Get a Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-secondary"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals with updated purpose section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          {/* Full-width header image for OUR PURPOSE */}
          <div className="purpose-header-bg mb-12 relative w-full overflow-hidden rounded-lg">
            <Image src="/Purpose.png" alt="Our Purpose" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white z-10">OUR PURPOSE</h2>
            </div>
          </div>

          {/* Purpose content with background image */}
          <div className="purpose-content-bg rounded-lg p-8 relative">
            <div className="purpose-content relative z-10">
              <div className="mb-16">
                <div className="mb-6 flex items-center">
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-white">
                  Our mission is to provide exceptional cleaning services that enhance the quality of life for our
                  clients. We aim to create cleaner, healthier, and more comfortable environments through our
                  professional cleaning solutions, while maintaining the highest standards of service and customer care.
                </p>
              </div>

              <div className="mb-16">
                <div className="mb-6 flex items-center">
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-lg text-white">
                  We envision becoming the leading cleaning service provider in the UK, recognised for our excellence,
                  reliability, and customer-focused approach. We strive to set new standards in the cleaning industry
                  through innovation, sustainability, and continuous improvement.
                </p>
              </div>

              <div className="mb-16">
                <div className="mb-6 flex items-center">
                  <h2 className="text-3xl font-bold text-white">Our Goals & Objectives</h2>
                </div>
                <p className="mb-6 text-lg text-white">
                  At Melody Cleaning Services, we have set clear goals to guide our growth and service delivery:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                  <li>Deliver consistent, high-quality cleaning services that meet or exceed industry standards</li>
                  <li>Expand our service offerings to meet the evolving needs of our clients</li>
                  <li>Maintain a team of well-trained, professional staff who share our values</li>
                  <li>Minimise our environmental footprint through sustainable practices and products</li>
                  <li>Build long-term relationships with our clients based on trust and satisfaction</li>
                  <li>Continuously improve our processes and services through feedback and innovation</li>
                </ul>
              </div>

              <div>
                <div className="mb-6 flex items-center">
                  <h2 className="text-3xl font-bold text-white">How We Operate</h2>
                </div>
                <p className="mb-6 text-lg text-gray-700">
                  At Melody Cleaning Services, we follow a systematic approach to ensure consistent quality and customer
                  satisfaction:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
                  <li>
                    Initial Consultation: We begin with a thorough assessment of your cleaning needs and requirements.
                  </li>
                  <li>
                    Customised Plan: We develop a tailored cleaning plan specific to your property and preferences.
                  </li>
                  <li>
                    Team Assignment: We assign experienced and trained cleaning professionals who specialise in your
                    required services.
                  </li>
                  <li>
                    Quality Execution: Our team executes the cleaning plan with attention to detail and using
                    appropriate techniques.
                  </li>
                  <li>Quality Check: We conduct a thorough inspection to ensure all areas meet our high standards.</li>
                  <li>Feedback Collection: We actively seek your feedback to continuously improve our services.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-700">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-primary">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We conduct our business with honesty, transparency, and ethical practices in all our interactions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-primary">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive for excellence in every cleaning job, paying attention to the smallest details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-primary">Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We are dependable and consistent, always delivering on our promises to our clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-primary">Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We prioritise our customers' needs and satisfaction above all else.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-700">What sets Melody Cleaning Services apart</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Users className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl text-primary">Experienced Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Our cleaning professionals are fully trained, insured, and background-checked, with years of
                  experience in the industry.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl text-primary">Customised Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  We tailor our cleaning services to meet your specific needs, whether it's a one-time deep clean or
                  regular maintenance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl text-primary">Quality Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  We stand behind our work with a 100% satisfaction guarantee on all our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center">
                <Leaf className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl text-primary">Eco-Friendly Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  We use environmentally friendly cleaning products that are safe for your family, pets, and the planet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center">
                <Coins className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl text-primary">Competitive Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  We offer fair and transparent pricing with no hidden fees or surprises.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center">
                <Clock className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl text-primary">Reliable Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  We arrive on time, every time, and complete our work efficiently without compromising on quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary">What We Do</h2>
            <p className="mt-4 text-lg text-gray-700">Our comprehensive range of cleaning services</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">End of Tenancy</h3>
              <p className="mb-4 text-gray-600">
                Comprehensive cleaning services for property transitions, ensuring your deposit is returned in full.
              </p>
              <Button className="px-6 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Brush className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Carpet Cleaning</h3>
              <p className="mb-4 text-gray-600">
                Professional carpet cleaning to remove stains, odors, and allergens for a fresher home.
              </p>
              <Button className="px-6 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Deep Clean</h3>
              <p className="mb-4 text-gray-600">
                Thorough cleaning of all areas, including hard-to-reach spots, for a completely refreshed space.
              </p>
              <Button className="px-6 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <UtensilsCrossed className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Restaurants and Hotels</h3>
              <p className="mb-4 text-gray-600">
                Specialised cleaning for hospitality venues, maintaining hygiene standards and guest satisfaction.
              </p>
              <Button className="px-6 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Construction className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">End of Construction</h3>
              <p className="mb-4 text-gray-600">
                Post-construction cleaning to remove dust, debris, and make your new space ready for use.
              </p>
              <Button className="px-6 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Bed className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Mattress Cleaning</h3>
              <p className="mb-4 text-gray-600">
                Specialised cleaning to remove dust mites, allergens, and stains from mattresses.
              </p>
              <Button className="px-6 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Hours */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary">We Are Here</h2>
            <p className="mt-4 text-lg text-gray-700">Serving clients across the United Kingdom</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4865204.804292891!2d-7.7218376684090815!3d54.12416090494634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sus!4v1714665600000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-6 w-6 text-primary" />
                <h3 className="mb-6 text-2xl font-bold text-primary">Our Service Area</h3>
              </div>
              <p className="mb-4 text-gray-600">We provide our cleaning services in:</p>
              <ul className="mb-8 space-y-2 text-gray-600">
                <li>• London</li>
                <li>• Kent</li>
                <li>• M25</li>
              </ul>
              <p className="mb-8 text-gray-600">
                We also cater to clients further afield, ensuring flexibility and availability wherever our expertise is
                needed.
              </p>

              <div className="flex items-center">
                <Clock className="mr-2 h-6 w-6 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-primary">Opening Hours</h3>
              </div>
              <p className="text-gray-600">
                Monday - Sunday
                <br />
                8:00am - 10:00pm
              </p>

              <div className="mt-8">
                <h3 className="mb-4 flex items-center text-2xl font-bold text-primary">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61575544748505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary p-3 text-secondary hover:bg-primary/90"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/melodycleaningservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary p-3 text-secondary hover:bg-primary/90"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/melodycleaningservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary p-3 text-secondary hover:bg-primary/90"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@melodycleaningservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary p-3 text-secondary hover:bg-primary/90"
                  >
                    <FaTiktok className="h-6 w-6" />
                    <span className="sr-only">TikTok</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
