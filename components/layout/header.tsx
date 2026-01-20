"use client"

import { useEffect } from "react"

import { useState } from "react"

import Link from "next/link"
import Image from "next/image"
import { navigationLinks } from "@/data/mockData"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const headerCards = [
  {
    id: 1,
    title: "Personal Brands",
    subtitle: "Build authentic connections",
    icon: "👤",
    color: "bg-purple-light",
  },
  {
    id: 2,
    title: "Funded Startups",
    subtitle: "Scale with strategy",
    icon: "🚀",
    color: "bg-pink-light",
  },
  {
    id: 3,
    title: "Crypto Ventures",
    subtitle: "Navigate the blockchain",
    icon: "₿",
    color: "bg-yellow-light",
  },
  {
    id: 4,
    title: "E-Commerce",
    subtitle: "Drive conversions",
    icon: "🛍️",
    color: "bg-cyan-light",
  },
  {
    id: 5,
    title: "Content Creators",
    subtitle: "Monetize your audience",
    icon: "📹",
    color: "bg-purple-light",
  },
  {
    id: 6,
    title: "Agencies",
    subtitle: "Scale your services",
    icon: "🏢",
    color: "bg-pink-light",
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState("")
  const [purpose, setPurpose] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePayment = () => {
    console.log("Payment Details:", { amount, purpose, phone, email })
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/linklift-logo.png"
              alt="LinkLift Media"
              width={200}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Pay Now button with Dialog */}
          <div className="hidden lg:flex items-center gap-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="px-6 py-2 rounded-lg font-semibold text-white bg-black hover:shadow-lg hover:shadow-black/30 transition-all duration-300 hover:scale-105">
                  Pay Now
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Payment Details</DialogTitle>
                  <DialogDescription>Enter your payment information to complete the transaction</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="amount" className="text-sm font-medium">
                      Amount to Pay (INR)
                    </label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="purpose" className="text-sm font-medium">
                      Purpose of Payment
                    </label>
                    <Input
                      id="purpose"
                      type="text"
                      placeholder="Enter purpose"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Customer Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Customer Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <button
                    onClick={handlePayment}
                    className="w-full px-6 py-2 rounded-lg font-semibold text-white bg-black hover:shadow-lg hover:shadow-black/30 transition-all duration-300"
                  >
                    Make Payment
                  </button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  )
}
