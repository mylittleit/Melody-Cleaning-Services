import Link from "next/link"
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
  Armchair,
  Sparkles,
  UtensilsCrossed,
  Construction,
  MoveRight,
  Brush,
} from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="hero-section relative h-[300px] w-full">
        <div className="hero-content container flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">ABOUT US</h1>
        </div>
      </section>

      {/* About Us Content */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-lg text-gray-700">
              Melody Cleaning Services is a professional cleaning company dedicated to providing high-quality cleaning services to homes and businesses across the UK. With our team of experienced and trained professionals, we deliver exceptional results that exceed our clients' expectations. We take pride in our attention to detail and commitment to customer satisfaction.
            </p>
            <p className="mb-8 text-lg text-gray-700">
              Founded with a passion for cleanliness and customer satisfaction, we are focused on becoming one of the most
              trusted cleaning services in the region. Our attention to detail, use of eco-friendly products, and
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

      {/* Mission, Vision, Goals */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="relative mb-12 h-[200px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-primary/80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-secondary">OUR PURPOSE</h2>
            </div>
          </div>

          <div className="mb-16">
            <div className="mb-6 flex items-center">
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700">
              Our mission is to provide exceptional cleaning services that enhance the quality of life for our clients. We aim to create cleaner, healthier, and more comfortable environments through our professional cleaning solutions, while maintaining the highest standards of service and customer care.
            </p>
          </div>

          <div className="mb-16">
            <div className="mb-6 flex items-center">
              <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700">
              We envision becoming the leading cleaning service provider in the UK, recognised for our excellence, reliability, and customer-focused approach. We strive to set new standards in the cleaning industry through innovation, sustainability, and continuous improvement.
            </p>
          </div>

          <div>
            <div className="mb-6 flex items-center">
              <h2 className="text-3xl font-bold text-primary">Our Goals & Objectives</h2>
            </div>
            <p className="mb-6 text-lg text-gray-700">
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
              <h2 className="text-3xl font-bold text-primary">How We Operate</h2>
            </div>
            <p className="mb-6 text-lg text-gray-700">
              At Melody Cleaning Services, we follow a systematic approach to ensure consistent quality and customer satisfaction:
            </p>
            <ul className="ml-6 list-disc space-y-2 text-lg text-gray-700">
              <li>Initial Consultation: We begin with a thorough assessment of your cleaning needs and requirements.</li>
              <li>Customised Plan: We develop a tailored cleaning plan specific to your property and preferences.</li>
              <li>Team Assignment: We assign experienced and trained cleaning professionals who specialise in your required services.</li>
              <li>Quality Execution: Our team executes the cleaning plan with attention to detail and using appropriate techniques.</li>
              <li>Quality Check: We conduct a thorough inspection to ensure all areas meet our high standards.</li>
              <li>Feedback Collection: We actively seek your feedback to continuously improve our services.</li>
            </ul>
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
                <CardTitle className="text-xl text-primary">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We are committed to environmentally friendly practices and products in all our operations.
                </p>
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
                <CardTitle className="mt-4 text-xl text-primary">Customized Solutions</CardTitle>
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
              <Button className="bg-primary text-secondary hover:bg-primary/90">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <MoveRight className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Move-In/Move-Out</h3>
              <p className="mb-4 text-gray-600">
                Specialized cleaning to prepare your new home or leave your old one in perfect condition.
              </p>
              <Button className="bg-primary text-secondary hover:bg-primary/90">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Brush className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Carpet Cleaning</h3>
              <p className="mb-4 text-gray-600">
                Professional carpet cleaning to remove stains, odors, and allergens for a fresher home.
              </p>
              <Button className="bg-primary text-secondary hover:bg-primary/90">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Sparkles className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Deep Clean</h3>
              <p className="mb-4 text-gray-600">
                Thorough cleaning of all areas, including hard-to-reach spots, for a completely refreshed space.
              </p>
              <Button className="bg-primary text-secondary hover:bg-primary/90">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <UtensilsCrossed className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Restaurants and Hotels</h3>
              <p className="mb-4 text-gray-600">
                Specialized cleaning for hospitality venues, maintaining hygiene standards and guest satisfaction.
              </p>
              <Button className="bg-primary text-secondary hover:bg-primary/90">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Construction className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">End of Construction</h3>
              <p className="mb-4 text-gray-600">
                Post-construction cleaning to remove dust, debris, and make your new space ready for use.
              </p>
              <Button className="bg-primary text-secondary hover:bg-primary/90">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 7 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Bed className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Mattress Cleaning</h3>
              <p className="mb-4 text-gray-600">
                Specialized cleaning to remove dust mites, allergens, and stains from mattresses.
              </p>
              <Button className="bg-primary text-secondary hover:bg-primary/90">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>

            {/* Service 8 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Armchair className="h-10 w-10 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-primary">Upholstery Cleaning</h3>
              <p className="mb-4 text-gray-600">
                Professional cleaning for sofas, chairs, and other upholstered furniture.
              </p>
              <Button className="bg-primary text-secondary hover:bg-primary/90">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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

            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold text-primary">Opening Hours</h3>
                <p className="text-gray-600">Monday – Sunday</p>
                <p className="text-gray-600">8:00AM – 10:00PM</p>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-primary">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61575544748505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <div className="rounded-full bg-primary/10 p-3">
                      <Facebook className="h-6 w-6" />
                    </div>
                  </Link>
                  <Link
                    href="https://www.instagram.com/melodycleaningservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <div className="rounded-full bg-primary/10 p-3">
                      <Instagram className="h-6 w-6" />
                    </div>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/melodycleaningservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <div className="rounded-full bg-primary/10 p-3">
                      <Linkedin className="h-6 w-6" />
                    </div>
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@melodycleaningservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <div className="rounded-full bg-primary/10 p-3">
                      <FaTiktok className="h-6 w-6" />
                    </div>
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
