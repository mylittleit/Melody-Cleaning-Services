import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Home,
  Building,
  UtensilsCrossed,
  Heart,
  Store,
  GraduationCap,
  Construction,
  PartyPopper,
  Factory,
} from "lucide-react"

export default function SectorsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="page-header">
        <Image src="/Slide5.png" alt="Sectors We Serve" fill className="object-cover" />
        <div className="page-header-content">
          <h1 className="text-4xl font-bold text-white md:text-5xl">SECTORS WE SERVE</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-12">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-700">
              At Melody Cleaning Services, we provide diversed cleaning solutions across a wide range of sectors. Our
              experienced team understands the unique requirements of each industry and delivers tailored services to
              meet those specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Sector 1 */}
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <Home className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-center text-xl text-primary">Residential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  We provide comprehensive cleaning services for homes, apartments, estates, and rental properties,
                  ensuring a clean and healthy living environment for families and individuals.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button className="bg-primary text-secondary hover:bg-primary/90">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sector 2 */}
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <Building className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-center text-xl text-primary">Commercial Offices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  We help maintain clean, professional workspaces that boost productivity and create a positive
                  impression for clients and employees alike.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button className="bg-primary text-secondary hover:bg-primary/90">
                    <Link href="/services#commercial-office-workshop">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sector 3 */}
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <UtensilsCrossed className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-center text-xl text-primary">Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Our specialised cleaning services for hotels, restaurants, cafes, and other hospitality spaces help
                  maintain the highest standards of cleanliness and hygiene for guest satisfaction.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button className="bg-primary text-secondary hover:bg-primary/90">
                    <Link href="/services#commercial-restaurants-hotels">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sector 4 */}
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <Heart className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-center text-xl text-primary">Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  We provide thorough cleaning and sanitisation for medical facilities, clinics, and care homes,
                  adhering to strict health and safety protocols.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button className="bg-primary text-secondary hover:bg-primary/90">
                    <Link href="/services#commercial-care-homes">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sector 5 */}
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <Store className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-center text-xl text-primary">Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Our cleaning services for shops and retail spaces help create an inviting environment for customers
                  and maintain a professional appearance.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button className="bg-primary text-secondary hover:bg-primary/90">
                    <Link href="/services#commercial-shop-cleaning">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sector 6 */}
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <GraduationCap className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-center text-xl text-primary">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  We provide comprehensive cleaning services for schools, colleges, and universities, creating a clean
                  and healthy learning environment.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button className="bg-primary text-secondary hover:bg-primary/90">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sector 7 */}
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <Construction className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-center text-xl text-primary">Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Our post-construction cleaning services help prepare newly built or renovated spaces for occupation,
                  removing dust, debris, and construction residue.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button className="bg-primary text-secondary hover:bg-primary/90">
                    <Link href="/services#specialised-end-of-construction">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sector 8 */}
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <PartyPopper className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-center text-xl text-primary">Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  We provide pre and post-event cleaning services for venues of all sizes, ensuring spaces are pristine
                  before guests arrive and quickly restored afterward.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button className="bg-primary text-secondary hover:bg-primary/90">
                    <Link href="/services#specialised-pre-post-event">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sector 9 */}
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary p-4">
                  <Factory className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-center text-xl text-primary">Industrial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Our exceptional cleaning services for factories, warehouses, and industrial facilities help maintain
                  safety standards and operational efficiency.
                </p>
                <div className="mt-6 flex justify-center">
                  <Button className="bg-primary text-secondary hover:bg-primary/90">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="rounded-lg bg-primary p-8 text-center shadow-lg">
            <h2 className="mb-4 text-3xl font-bold text-secondary">Need a Customised Cleaning Solution?</h2>
            <p className="mb-8 text-lg text-white">
              Contact us today to discuss your specific requirements. Our team will create a tailored cleaning plan for
              your sector.
            </p>
            <Button size="lg" variant="secondary" className="bg-secondary text-primary hover:bg-secondary/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
