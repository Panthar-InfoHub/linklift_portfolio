"use client"

import { solutions } from "@/data/mockData"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-background to-primary-light/5">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Solution</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              A proven 4-step process that transforms your digital presence
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.id} delay={index * 100}>
              <div
                className={`p-8 rounded-xl bg-white border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden`}
              >
                {/* Step Number */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-primary/10 group-hover:scale-110 transition-transform duration-300" />

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-text-muted">{solution.description}</p>

                  {/* Step indicator */}
                  <div className="mt-6 inline-block">
                    <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
