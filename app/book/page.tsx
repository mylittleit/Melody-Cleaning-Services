"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  serviceType: z.string({
    required_error: "Please select a service type.",
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  time: z.string({
    required_error: "Please select a preferred time.",
  }),
  message: z.string().optional(),
})

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Convert the date to a string for JSON serialization
      const formData = {
        ...values,
        date: format(values.date, "yyyy-MM-dd"),
      }

      // Send the data to our API endpoint
      const response = await fetch("/api/submit-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        form.reset()
      } else {
        throw new Error(data.message || "Failed to submit booking")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "There was a problem submitting your booking. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="page-header">
        <Image src="/images/book-header.png" alt="Book Online" fill className="object-cover" />
        <div className="page-header-content">
          <h1 className="text-4xl font-bold text-white md:text-5xl">BOOK ONLINE</h1>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-center text-lg text-gray-700">
              Fill out the form below to book our cleaning services. We'll get back to you as soon as possible to
              confirm your booking and provide a quote.
            </p>

            {isSuccess ? (
              <div className="rounded-lg bg-green-50 p-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-green-600">Booking Request Submitted!</h3>
                <p className="text-green-600">
                  Thank you for your booking request. We'll contact you shortly to confirm the details and provide a
                  quote.
                </p>
                <Button
                  className="mt-4 bg-primary text-secondary hover:bg-primary/90"
                  onClick={() => setIsSuccess(false)}
                >
                  Book Another Service
                </Button>
              </div>
            ) : (
              <div className="form-container rounded-lg p-8">
                <div className="mb-6 -mt-8 -mx-8 bg-primary p-4 text-center">
                  <h2 className="text-2xl font-bold text-secondary">BOOKING FORM</h2>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+44 123 456 7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="end-of-tenancy">End of Tenancy</SelectItem>
                                <SelectItem value="move-in-out">Move-In/Move-Out</SelectItem>
                                <SelectItem value="carpet-cleaning">Carpet Cleaning</SelectItem>
                                <SelectItem value="deep-clean">Deep Clean</SelectItem>
                                <SelectItem value="standard-cleaning">Standard Cleaning</SelectItem>
                                <SelectItem value="housekeeping">General Housekeeping</SelectItem>
                                <SelectItem value="mattress-cleaning">Mattress Cleaning</SelectItem>
                                <SelectItem value="upholstery-cleaning">Upholstery Cleaning</SelectItem>
                                <SelectItem value="office-workshop">Office and Workshop</SelectItem>
                                <SelectItem value="restaurants-hotels">Restaurants and Hotels</SelectItem>
                                <SelectItem value="care-homes">Care Homes</SelectItem>
                                <SelectItem value="shop-cleaning">Shop Cleaning</SelectItem>
                                <SelectItem value="end-of-construction">End of Construction</SelectItem>
                                <SelectItem value="pre-post-event">Pre/Post Event</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St, London" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Preferred Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                                  >
                                    {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                                <SelectItem value="evening">Evening (4pm - 8pm)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide any additional details about your cleaning needs"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Include any specific requirements or areas that need special attention.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        className="rounded-full bg-primary px-8 py-2 text-secondary hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "PROCEED"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
