import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Phone, Mail, Facebook, Instagram, Linkedin, Leaf, Users } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function Home() {
  return (
    <>
      {/* Hero Section with Video Background */}
<section className="hero-section relative h-[600px] w-full overflow-hidden">
  {/* Background Video */}
  <video 
    className="absolute top-0 left-0 h-full w-full object-cover"
    src="/Hero.mp4" 
    autoPlay
    loop
    muted
    playsInline
    style={{ width: "100%", maxWidth: "100%", height: "auto" }}
  />
</section>

      {/* Dual Button Section */}
      <section className="bg-white py-8">
        <div className="container flex flex-col items-center justify-center space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            size="lg"
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-secondary sm:w-auto"
          >
            <Link href="/contact">We Are Hiring</Link>
          </Button>
          <Button size="lg" className="w-full bg-primary text-secondary hover:bg-primary/90 sm:w-auto">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
              <Image src="About.png" alt="About Melody Cleaning Services" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">About Us</h2>
              <p className="mb-6 text-gray-700">
                Melody Cleaning Services is a premier cleaning company in the UK, dedicated to providing exceptional
                cleaning solutions for both residential and commercial clients. With our team of experienced
                professionals and commitment to quality, we ensure spotless results every time.
              </p>
              <Button className="self-start bg-primary text-secondary hover:bg-primary/90">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Our Services</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 h-24 w-24 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <Image src="Tenancy.png" alt="End of Tenancy" width={96} height={96}
                    className="object-cover w-full h-full"/>
                </div>
                <CardTitle className="text-center text-xl text-primary">End of Tenancy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Comprehensive cleaning services for property transitions, ensuring your deposit is returned in full.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="mb-2 w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 2 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 h-24 w-24 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <Image src="End.png" alt="End of Construction" width={96} height={96}
                    className="object-cover w-full h-full"/>
                </div>
                <CardTitle className="text-center text-xl text-primary">End of Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Post-construction cleaning to remove dust, debris, and make your new space ready for use.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="mb-2 w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 3 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 h-24 w-24 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                  <Image src="Restaurant.png" alt="Restaurants and Hotels" width={96} height={96}
                    className="object-cover w-full h-full"/>
                </div>
                <CardTitle className="text-center text-xl text-primary">Restaurants and Hotels</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Specialised cleaning for hospitality venues, maintaining hygiene standards and guest satisfaction.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="mb-2 w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 4 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-deep-clean.png" alt="Deep Clean" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Deep Clean</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Thorough cleaning of all areas, including hard-to-reach spots, for a completely refreshed space.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="mb-2 w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 5 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-carpet.png" alt="Carpet Cleaning" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Carpet Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Professional carpet cleaning to remove stains, odors, and allergens for a fresher home.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="mb-2 w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 6 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-event.png" alt="Pre/Post Event" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Pre/Post Event</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Cleaning services before and after events to ensure your venue looks perfect for guests and is quickly
                  restored afterward.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="mb-2 w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-10 flex justify-center">
            <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90">
              <Link href="/services">Find Out More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Why Choose Us</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl">Quality Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We stand behind our work with a 100% satisfaction guarantee on all our services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <Clock className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl">Reliable & Punctual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team arrives on time, every time, respecting your schedule and commitments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <Leaf className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl">Eco-Friendly Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We use environmentally friendly cleaning products that are safe for your family and pets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <Users className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4 text-xl">Experienced Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our cleaning professionals are fully trained, insured, and background-checked.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Contact Us</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <Phone className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">07453581984</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <Mail className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  <a href="mailto:melodycleaningservices@gmail.com">melodycleaningservices@gmail.com</a>
                </p>
                <p className="text-gray-600">
                  <a href="mailto:info@melodycleaningservices.com">info@melodycleaningservices.com</a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <Clock className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Opening Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Monday - Sunday: 8:00am - 10:00pm</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="mb-6 text-center text-xl font-bold text-primary">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61575544748505"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Facebook className="h-8 w-8" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/melodycleaningservices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Instagram className="h-8 w-8" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/melodycleaningservices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <Linkedin className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@melodycleaningservices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                <FaTiktok className="h-8 w-8" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
                }
