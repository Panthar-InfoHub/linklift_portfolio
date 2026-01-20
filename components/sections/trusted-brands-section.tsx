"use client"

import Image from "next/image"
import { brandLogos, instagramCards } from "@/data/mockData"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function TrustedBrandsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background to-primary-light/5">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Brands We Have Worked With
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-16 text-center">
            Trusted by industry leaders worldwide
          </p>
        </ScrollReveal>

        <div className="mb-16 overflow-hidden">
          <div className="flex gap-6 animate-scroll-left">
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="rounded-lg h-32 flex items-center justify-center bg-white border border-border p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 flex-shrink-0 w-56"
              >
                <Image
                  src={brand.name || "/placeholder.svg"}
                  alt={brand.name}
                  width={200}
                  height={128}
                  className="object-contain max-h-28"
                />
              </div>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Instagram Creators We Have Worked With
          </h3>
        </ScrollReveal>

        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-right">
            {[...instagramCards, ...instagramCards].map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="relative group rounded-lg overflow-hidden aspect-square bg-border flex-shrink-0 w-40 h-40"
              >
                <Image
                  src={card.image || "/placeholder.svg?height=200&width=200"}
                  alt={`Instagram post ${card.id}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center text-white">
                    <p className="text-sm font-semibold">{card.likes} Likes</p>
                    <p className="text-xs text-white/80">{card.comments} Comments</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
