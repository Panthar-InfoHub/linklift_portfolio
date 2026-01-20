"use client"

import Image from "next/image"
import Link from "next/link"
import { services } from "@/data/mockData"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Comprehensive digital marketing solutions for your business
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 50}>
              <Link href={`/services/${service.slug}`}>
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
                      Know More
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-white bg-black hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              View More
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
