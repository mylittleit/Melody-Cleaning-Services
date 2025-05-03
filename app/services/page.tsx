import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  MoveRight,
  Brush,
  Sparkles,
  Broom,
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
      <section className="hero-section relative h-[300px] w-full">
        <img
          src="/Services.png"
          alt="Header background"
          className="absolute w-full h-full object-cover"
        />
        <div className="hero-content container flex h-full flex-col items-center justify-center text-center relative z-10 bg-black/50">
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

      {/* Domestic Cleaning Banner */}
      <section
        className="relative flex items-center justify-center h-[300px] w-full bg-cover bg-center mb-16"
        style={{ backgroundImage: "url('/Domestic.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h2 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center">
          Domestic Cleaning
        </h2>
      </section>

      {/* Services Grid - Domestic */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Domestic Cards */}
            <Card>
              <CardHeader>
                <Home className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Home Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Comprehensive cleaning for every room in your house.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bed className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Bedroom Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Dusting, vacuuming, and tidying to create a relaxing environment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <UtensilsCrossed className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Kitchen Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Deep cleaning for counters, appliances, and cabinets.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Armchair className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Living Room Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Dusting and vacuuming to keep your living space fresh and inviting.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commercial Cleaning Banner */}
      <section
        className="relative flex items-center justify-center h-[300px] w-full bg-cover bg-center mb-16"
        style={{ backgroundImage: "url('/Commercial.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h2 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center">
          Commercial Cleaning
        </h2>
      </section>

      {/* Services Grid - Commercial */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Commercial Cards */}
            <Card>
              <CardHeader>
                <Building className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Office Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Regular cleaning to maintain a productive workspace.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Store className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Retail Store Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Keeping your retail space spotless and welcoming.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Healthcare Facility Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Specialized cleaning to maintain hygienic environments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <UtensilsCrossed className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Restaurant Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Maintaining cleanliness in dining and kitchen areas.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialised Cleaning Banner */}
      <section
        className="relative flex items-center justify-center h-[300px] w-full bg-cover bg-center mb-16"
        style={{ backgroundImage: "url('/Specialised.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h2 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center">
          Specialised Cleaning
        </h2>
      </section>

      {/* Services Grid - Specialised */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Specialised Cards */}
            <Card>
              <CardHeader>
                <Construction className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Post-Construction Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Thorough cleaning after renovation or construction projects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <PartyPopper className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Event Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Cleanup services before, during, and after your event.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brush className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Deep Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  In-depth cleaning targeting hidden dirt and grime.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sparkles className="text-primary mx-auto h-12 w-12" />
                <CardTitle className="text-center">Move-In/Move-Out Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Making sure your old or new home is spotless.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
          }
