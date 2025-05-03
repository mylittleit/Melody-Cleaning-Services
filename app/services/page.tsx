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
        className="relative h-[250px] w-full bg-cover bg-center flex items-center justify-center mb-16"
        style={{ backgroundImage: "url('/Domestic.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h2 className="relative z-10 text-4xl font-bold text-purple-600 md:text-5xl text-center">
          Domestic Cleaning
        </h2>
      </section>

      {/* Services Grid - Domestic */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Home className="h-10 w-10 text-purple-600" />
                <CardTitle>End of Tenancy</CardTitle>
                <CardDescription>Move out hassle-free with our thorough end-of-tenancy cleaning services.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <MoveRight className="h-10 w-10 text-purple-600" />
                <CardTitle>Move-In and Move-Out</CardTitle>
                <CardDescription>Ensure a fresh start or smooth transition with our move-in/move-out cleaning expertise.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Brush className="h-10 w-10 text-purple-600" />
                <CardTitle>Deep Clean</CardTitle>
                <CardDescription>Experience a top-to-bottom deep clean for a healthier and fresher home environment.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-purple-600" />
                <CardTitle>Standard Cleaning</CardTitle>
                <CardDescription>Keep your home sparkling clean with our regular standard cleaning services.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-purple-600" />
                <CardTitle>General Housekeeping</CardTitle>
                <CardDescription>Reliable and attentive housekeeping support for your everyday home maintenance needs.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Bed className="h-10 w-10 text-purple-600" />
                <CardTitle>Mattresses Cleaning</CardTitle>
                <CardDescription>Promote a healthier sleep environment with our professional mattress cleaning services.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Armchair className="h-10 w-10 text-purple-600" />
                <CardTitle>Upholstery Cleaning</CardTitle>
                <CardDescription>Revive and refresh your furniture with our specialized upholstery cleaning solutions.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-purple-600" />
                <CardTitle>Carpet Cleaning</CardTitle>
                <CardDescription>Restore the beauty and hygiene of your carpets with our expert carpet cleaning service.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Commercial Cleaning Banner */}
      <section
        className="relative h-[250px] w-full bg-cover bg-center flex items-center justify-center mb-16"
        style={{ backgroundImage: "url('/Commercial.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h2 className="relative z-10 text-4xl font-bold text-purple-600 md:text-5xl text-center">
          Commercial Cleaning
        </h2>
      </section>

      {/* Services Grid - Commercial */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Building className="h-10 w-10 text-purple-600" />
                <CardTitle>Office and Workplace Cleaning</CardTitle>
                <CardDescription>Create a healthier and more productive environment with our office cleaning services.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <UtensilsCrossed className="h-10 w-10 text-purple-600" />
                <CardTitle>Restaurants and Hotels</CardTitle>
                <CardDescription>Deliver exceptional first impressions with our hospitality sector cleaning expertise.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-purple-600" />
                <CardTitle>Care Home</CardTitle>
                <CardDescription>Ensure a safe and sanitary environment for residents with specialized cleaning for care homes.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Store className="h-10 w-10 text-purple-600" />
                <CardTitle>Shop Cleaning</CardTitle>
                <CardDescription>Keep your store immaculate and welcoming with our professional retail cleaning services.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialised Cleaning Banner */}
      <section
        className="relative h-[250px] w-full bg-cover bg-center flex items-center justify-center mb-16"
        style={{ backgroundImage: "url('/Specialised.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h2 className="relative z-10 text-4xl font-bold text-purple-600 md:text-5xl text-center">
          Specialised Cleaning
        </h2>
      </section>

      {/* Services Grid - Specialised */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <Construction className="h-10 w-10 text-purple-600" />
                <CardTitle>End of Construction</CardTitle>
                <CardDescription>Post-construction cleaning for a polished and ready-to-use space.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <PartyPopper className="h-10 w-10 text-purple-600" />
                <CardTitle>Pre/Post Event Cleanup</CardTitle>
                <CardDescription>Make events stress-free with our efficient pre-event setup and post-event cleanup services.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
