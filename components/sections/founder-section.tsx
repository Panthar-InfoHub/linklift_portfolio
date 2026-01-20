import Image from "next/image"
import { LinkedinIcon, TwitterIcon, MailIcon } from "lucide-react"

export function FounderSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Details */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold text-lg mb-2">Meet the Founder</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Abhimanyu Singh Yadav</h2>
              <p className="text-xl text-primary font-medium mb-6">Founder & Chief Marketing Strategist</p>
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                With over 10 years of experience in digital marketing, Abhimanyu has helped hundreds of businesses
                transform their online presence and achieve remarkable growth.
              </p>
              <p>
                His passion for innovation and data-driven strategies has made him a recognized leader in the industry.
                From startups to Fortune 500 companies, Abhimanyu's expertise spans across all facets of digital
                marketing.
              </p>
              <p>
                When he's not crafting winning marketing campaigns, you can find him speaking at industry conferences,
                mentoring young entrepreneurs, or exploring new technologies that shape the future of digital commerce.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expertise & Achievements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span className="text-lg">Certified Digital Marketing Professional (CDMP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span className="text-lg">Generated over $50M in revenue for clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span className="text-lg">Featured speaker at Marketing Summit 2023</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 text-xl">•</span>
                  <span className="text-lg">Built and scaled 3 successful digital agencies</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="p-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                aria-label="Email"
              >
                <MailIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative lg:order-last">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/founder.jpg"
                  alt="Abhimanyu Singh Yadav - Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
