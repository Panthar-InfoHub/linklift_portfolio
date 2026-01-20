import Link from "next/link"
import { services } from "@/data/mockData"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                LL
              </div>
              <span className="text-lg font-bold text-foreground">Link Lift</span>
            </div>
            <p className="text-sm text-text-muted">We grow brands with data-driven digital marketing strategies.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Solutions", "Work", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <ul className="space-y-2">
              {["Instagram", "LinkedIn", "Twitter", "Facebook"].map((social) => (
                <li key={social}>
                  <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-text-muted">
              Designed and Developed by{" "}
              <a
                href="https://www.pantharinfohub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:underline"
              >
                Panthar InfoHub Pvt. Ltd.
              </a>
            </p>
            <p className="text-sm text-text-muted">© {currentYear} Link Lift. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
