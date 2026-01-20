"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/data/mockData"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function FaqSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background to-primary-light/5">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-text-muted">Everything you need to know about our services</p>
          </div>
        </ScrollReveal>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.id} delay={index * 50}>
              <AccordionItem value={`item-${faq.id}`} className="border-border">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted">{faq.answer}</AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
