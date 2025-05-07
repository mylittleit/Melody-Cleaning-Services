import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  MoveRight,
  Brush,
  Sparkles,
  BrushIcon as Broom,
  Building,
  UtensilsCrossed,
  Heart,
  Store,
  Construction,
  PartyPopper,
  Bed,
  Armchair,
  Home,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="page-header">
        <Image src="/images/services-header.png" alt="Our Services" fill className="object-cover" />
        <div className="page-header-content">
          <h1 className="text-4xl font-bold text-white md:text-5xl">OUR SERVICES</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-700">
              At Melody Cleaning Services, we offer a comprehensive range of cleaning solutions tailored to meet the
              unique needs of our clients. Whether you need a one-time deep clean or regular maintenance, our
              experienced team is equipped to deliver exceptional results every time.
            </p>
          </div>
        </div>
      </section>

      {/* Domestic Cleaning Section with Background */}
      <section className="py-16">
        <div className="container">
          {/* Full-width header image for Domestic Cleaning */}
          <div className="domestic-header-bg mb-12 relative w-full overflow-hidden rounded-lg">
            <Image src="/images/sector-residential.png" alt="Domestic Cleaning" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-center text-3xl font-bold text-white z-10">DOMESTIC CLEANING</h2>
            </div>
          </div>

          {/* Domestic Cleaning Content with Background */}
          <div className="domestic-content-bg rounded-lg p-8 relative mb-16">
            <div className="domestic-content relative z-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Service 1 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <FileText className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">End of Tenancy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Comprehensive cleaning services for property transitions, ensuring your deposit is returned in
                      full. We clean every corner of your property to meet landlord and agency standards.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 2 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <MoveRight className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">Move-In/Move-Out</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Specialised cleaning to prepare your new home or leave your old one in perfect condition. We
                      ensure a fresh start in your new space or help you leave on good terms.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 3 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Brush className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">Carpet Cleaning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Professional carpet cleaning to remove stains, odors, and allergens for a fresher home. Our deep
                      cleaning methods reach deep into carpet fibers to extract dirt and bacteria.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 4 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Sparkles className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">Deep Clean</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Thorough cleaning of all areas, including hard-to-reach spots, for a completely refreshed space.
                      Perfect for seasonal cleaning or before special occasions.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 5 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Broom className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">Standard Cleaning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Regular maintenance cleaning to keep your home looking its best. We focus on high-traffic areas
                      and common surfaces to maintain cleanliness.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 6 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Home className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">General Housekeeping</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Ongoing cleaning services to maintain a tidy and organised home. Perfect for busy professionals
                      who want to come home to a clean space.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 7 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Bed className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">Mattress Cleaning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Expert cleaning to remove dust mites, allergens, and stains from mattresses. Improve your sleep
                      quality with a clean, fresh mattress.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 8 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Armchair className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">Upholstery Cleaning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Professional cleaning for sofas, chairs, and other upholstered furniture to remove dirt, stains,
                      and odors, extending the life of your furniture.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Cleaning Section with Background */}
      <section className="py-16">
        <div className="container">
          {/* Full-width header image for Commercial Cleaning */}
          <div className="commercial-header-bg mb-12 relative w-full overflow-hidden rounded-lg">
            <Image src="/images/sector-commercial.png" alt="Commercial Cleaning" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-center text-3xl font-bold text-white z-10">COMMERCIAL CLEANING</h2>
            </div>
          </div>

          {/* Commercial Cleaning Content with Background */}
          <div className="commercial-content-bg rounded-lg p-8 relative mb-16">
            <div className="commercial-content relative z-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Service 1 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Building className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">Office and Workshop</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Bespoke cleaning services for offices and workshops, creating a clean and productive environment
                      for your team.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 2 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <UtensilsCrossed className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">Restaurants and Hotels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Elite cleaning for hospitality venues, maintaining hygiene standards and ensuring guest
                      satisfaction.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 3 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Heart className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">Care Homes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Thorough and sensitive cleaning services for care homes, focusing on hygiene and safety for
                      residents and staff.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 4 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Store className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">Shop Cleaning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Retail space cleaning services to create an inviting environment for customers and maintain a
                      professional appearance.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialised Cleaning Section with Background */}
      <section className="py-16">
        <div className="container">
          {/* Full-width header image for Specialised Cleaning */}
          <div className="specialised-header-bg mb-12 relative w-full overflow-hidden rounded-lg">
            <Image src="/images/sector-construction.png" alt="Specialised Cleaning" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-center text-3xl font-bold text-white z-10">SPECIALISED CLEANING</h2>
            </div>
          </div>

          {/* Specialised Cleaning Content with Background */}
          <div className="specialised-content-bg rounded-lg p-8 relative">
            <div className="specialised-content relative z-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Service 1 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Construction className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">End of Construction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Post-construction cleaning to remove dust, debris, and make your new space ready for use. We
                      handle the tough cleanup so you can enjoy your newly built or renovated space.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Service 2 */}
                <Card className="service-card bg-white/90">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <PartyPopper className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl text-primary">Pre/Post Event</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-700">
                      Bespoke cleaning services before and after events to ensure your venue looks perfect for guests
                      and is quickly restored afterward. Perfect for parties, corporate events, and celebrations.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <Button className="mb-2 px-6 py-3 bg-primary text-secondary hover:bg-primary/90 mx-auto block">
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
