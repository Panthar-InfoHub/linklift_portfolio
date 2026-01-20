"use client"

import { useState, useEffect } from "react"
import { Share2, Target, MapPin, Megaphone, Globe, Search, Video, Palette, FileText, MessageCircle, DollarSign, Users, Mail } from "lucide-react"

export function HeroSection() {
  const [animateText, setAnimateText] = useState(false)

  useEffect(() => {
    setAnimateText(true)
  }, [])

  const services = [
    {
      title: "Social Media Management",
      description: "Build visibility & engagement",
      icon: Share2,
      bgColor: "bg-pink-100",
      textColor: "text-pink-400",
    },
    {
      title: "Meta Ads",
      description: "Generate leads & inquiries",
      icon: Target,
      bgColor: "bg-blue-100",
      textColor: "text-blue-400",
    },
    {
      title: "Google My Business",
      description: "Improve local SEO",
      icon: MapPin,
      bgColor: "bg-green-100",
      textColor: "text-green-400",
    },
    {
      title: "GMB Ads",
      description: "Local search advertising",
      icon: Megaphone,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      title: "Website",
      description: "Professional web design",
      icon: Globe,
      bgColor: "bg-purple-100",
      textColor: "text-purple-400",
    },
    {
      title: "SEO",
      description: "Drive organic traffic",
      icon: Search,
      bgColor: "bg-teal-100",
      textColor: "text-teal-400",
    },
    {
      title: "Video Editing",
      description: "Engaging social content",
      icon: Video,
      bgColor: "bg-red-100",
      textColor: "text-red-400",
    },
    {
      title: "Graphic Designing",
      description: "Attractive brand creatives",
      icon: Palette,
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-400",
    },
    {
      title: "Company Profile",
      description: "Showcase your business",
      icon: FileText,
      bgColor: "bg-orange-100",
      textColor: "text-orange-400",
    },
    {
      title: "WhatsApp Marketing",
      description: "Direct customer outreach",
      icon: MessageCircle,
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-400",
    },
  ]

  return (
    <section id="home" className="min-h-screen bg-background pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div
            className={`transition-all duration-700 ${animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Tagline */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-stone-400" />
              <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Scale Your Brand</p>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-black mb-8 leading-tight text-black">
              Helping Entrepreneurs build organic brands as niche authorities
            </h1>

            {/* Description */}
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Scaling brands for niche authorities with world class organic content. Currently working with personal
              brands, funded startups, Crypto/trading ventures and much more.
            </p>

            {/* CTA Button */}
            <button className="bg-black text-yellow-400 font-bold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 mb-6 text-lg">
              Book a Discovery Call
            </button>

            {/* Footer Text */}
            <p className="text-stone-500 italic text-sm">It's Free</p>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative max-h-[600px] overflow-hidden">
              <div
                className="space-y-3"
                style={{
                  animation: "scrollVertical 15s linear infinite",
                }}
              >
                {/* First set of tiles */}
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={`first-${index}`}
                      className={`${service.bgColor} rounded-xl p-4 transition-all duration-300 hover:shadow-md transform`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-white bg-opacity-50 flex-shrink-0`}>
                          <Icon className={`w-5 h-5 ${service.textColor}`} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-gray-800 text-base">{service.title}</h3>
                          <p className="text-gray-500 text-xs">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {/* Duplicate set for seamless loop */}
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={`second-${index}`}
                      className={`${service.bgColor} rounded-xl p-4 transition-all duration-300 hover:shadow-md transform`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-white bg-opacity-50 flex-shrink-0`}>
                          <Icon className={`w-5 h-5 ${service.textColor}`} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-gray-800 text-base">{service.title}</h3>
                          <p className="text-gray-500 text-xs">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
