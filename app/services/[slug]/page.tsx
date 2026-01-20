import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { services } from "@/data/mockData"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Service Details - Link Lift",
  description: "Explore our digital marketing services in detail.",
}

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-light/20 via-background to-secondary-light/20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary-light/20 blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary-light/20 blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{service.title}</h1>
                <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed">{service.description}</p>
                <div className="flex gap-4">
                  <Link href={"#cta"}>
                  <button  className="px-10 py-5 rounded-lg font-bold text-lg text-white bg-black   bg-gradient-primary hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    Get Started
                  </button>
                  </Link>
                  <Link
                    href="/services"
                    className="px-10 py-5 rounded-lg font-bold text-lg text-white border-2 bg-black hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    Back to Services
                  </Link>
                </div>
              </div>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8  bg-background to-primary-light/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Benefits of {service.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-white hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-green-600 font-bold flex-shrink-0 text-xl">
                      ✓
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">{benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Process</h2>

            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start p-8 rounded-lg border  border-border hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-black font-bold text-2xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground pt-2">{step}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary-light/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Pricing Plans</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-xl border transition-all duration-300 ${
                    index === 1
                      ? "border-primary bg-gradient-to-br from-primary-light/10 to-background shadow-xl scale-105"
                      : "border-border bg-background hover:shadow-lg"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.tier}</h3>
                  <p className="text-sm text-text-muted mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-text-muted ml-2">/month</span>
                  </div>

                  <button
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                      index === 1
                        ? "bg-gradient-primary bg-primary text-white hover:shadow-2xl hover:scale-105"
                        : "border-2 border-primary text-primary hover:bg-primary/5 font-bold"
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section id="cta"  className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary bg-background text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-lg md:text-xl mb-10 text-black font-medium leading-relaxed">
              Let{"'"}s discuss how we can help your business achieve its goals.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-10 py-5 rounded-lg font-bold text-lg bg-primary text-white hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
