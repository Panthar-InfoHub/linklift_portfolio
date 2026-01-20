"use client"

import { useEffect, useState } from "react"
import { achievements } from "@/data/mockData"

function Counter({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = (currentTime - startTime) / duration
      if (progress < 1) {
        setCount(Math.floor(end * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}</span>
}

export function AchievementsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Placeholder */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-primary flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <p className="text-white font-semibold">Watch Our Story</p>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Why Choose Link Lift?</h2>

            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-primary-light/10 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">
                  <Counter end={250} duration={1500} />+
                </div>
                <p className="text-foreground font-semibold">{achievements.clientsServed} Clients</p>
              </div>

              <div className="p-6 rounded-lg bg-secondary-light/10 border border-secondary/20">
                <div className="text-3xl font-bold text-secondary mb-2">
                  <Counter end={500} duration={1500} />+
                </div>
                <p className="text-foreground font-semibold">{achievements.campaignsLaunched} Campaigns</p>
              </div>

              <div className="p-6 rounded-lg bg-accent-light/10 border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">
                  <Counter end={120} duration={1500} />%
                </div>
                <p className="text-foreground font-semibold">{achievements.roiGrowth} ROI Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
