import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="hero-section relative h-[300px] w-full">
        <div className="hero-content container flex h-full flex-col items-center justify-center text-center">
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

      {/* Services Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Domestic Cleaning</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-end-of-tenancy.png" alt="End of Tenancy" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">End of Tenancy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Comprehensive cleaning services for property transitions, ensuring your deposit is returned in full.
                  We clean every corner of your property to meet landlord and agency standards.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 2 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-move-in.png" alt="Move-In/Move-Out" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Move-In/Move-Out</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Specialized cleaning to prepare your new home or leave your old one in perfect condition. We ensure a
                  fresh start in your new space or help you leave on good terms.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 3 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-carpet.png" alt="Carpet Cleaning" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Carpet Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Professional carpet cleaning to remove stains, odors, and allergens for a fresher home. Our deep
                  cleaning methods reach deep into carpet fibers to extract dirt and bacteria.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
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
                  Perfect for seasonal cleaning or before special occasions.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 5 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-standard.png" alt="Standard Cleaning" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Standard Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Regular maintenance cleaning to keep your home looking its best. We focus on high-traffic areas and
                  common surfaces to maintain cleanliness.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 6 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-housekeeping.png" alt="General Housekeeping" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">General Housekeeping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Ongoing cleaning services to maintain a tidy and organized home. Perfect for busy professionals who
                  want to come home to a clean space.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 7 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-mattress.png" alt="Mattress Cleaning" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Mattress Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Specialized cleaning to remove dust mites, allergens, and stains from mattresses. Improve your sleep
                  quality with a clean, fresh mattress.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 8 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-upholstery.png" alt="Upholstery Cleaning" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Upholstery Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Professional cleaning for sofas, chairs, and other upholstered furniture to remove dirt, stains, and
                  odors, extending the life of your furniture.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Commercial Cleaning */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Commercial Cleaning</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Service 1 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-office.png" alt="Office and Workshop" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Office and Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Professional cleaning services for offices and workshops, creating a clean and productive environment
                  for your team.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 2 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-restaurants.png" alt="Restaurants and Hotels" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Restaurants and Hotels</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Specialized cleaning for hospitality venues, maintaining hygiene standards and ensuring guest
                  satisfaction.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 3 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-care-homes.png" alt="Care Homes" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Care Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Thorough and sensitive cleaning services for care homes, focusing on hygiene and safety for residents
                  and staff.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 4 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-shop.png" alt="Shop Cleaning" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">Shop Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Retail space cleaning services to create an inviting environment for customers and maintain a
                  professional appearance.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Cleaning */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Specialized Cleaning</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Service 1 */}
            <Card className="service-card">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <Image src="/images/service-construction.png" alt="End of Construction" width={50} height={50} />
                </div>
                <CardTitle className="text-center text-xl text-primary">End of Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Post-construction cleaning to remove dust, debris, and make your new space ready for use. We handle
                  the tough cleanup so you can enjoy your newly built or renovated space.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Service 2 */}
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
                  restored afterward. Perfect for parties, corporate events, and celebrations.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
