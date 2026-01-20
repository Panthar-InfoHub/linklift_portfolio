import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { services } from "@/data/mockData"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Our Services - Link Lift",
  description: "Explore our comprehensive digital marketing services.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-light/10 to-background">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link key={service.id} href={`/services/${service.slug}`}>
                  <div className="group h-full rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-border">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-text-muted mb-4">{service.description}</p>

                      <button className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-300">
                        Learn More
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary text-black">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg md:text-xl mb-10 text-black font-medium leading-relaxed">
              Contact us today for a free consultation and let's discuss how we can help your business grow.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-10 py-5 rounded-lg font-bold text-lg bg-black text-white hover:shadow-2xl transition-all duration-300 hover:scale-110 "
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
