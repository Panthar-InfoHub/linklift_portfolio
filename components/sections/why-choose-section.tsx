"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function WhyChooseSection() {
  const reasons = [
    {
      id: 1,
      title: "Expert Team",
      description: "A dedicated digital marketing team that connects with clients, understands their brand and challenges, and works hands-on to plan, execute, and grow together.",
    },
    {
      id: 2,
      title: "Proven Results",
      description: "We focus on meaningful results, not instant claims. A three-month working period helps us plan better, execute properly, and show genuine progress in reach, engagement, and leads.",
    },
    {
      id: 3,
      title: "Custom Solutions",
      description: "We understand our clients first, and then design strategies that align with their goals and connect with their audience.",
    },
    {
      id: 4,
      title: "Performance Reporting",
      description: "Clear updates, meaningful data, and no hidden metrics. In three months, we’ll show measurable growth and real progress.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Why Choose Link Lift</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-16 text-center">
            See how we help brands grow their digital presence
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Video Section */}
          <ScrollReveal delay={100}>
            <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Link Lift - Digital Marketing Success"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>

          {/* Reasons Section */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className="p-6 rounded-xl bg-gradient-to-r from-primary-light/20 to-secondary-light/20 border border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-text-muted">{reason.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
