"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface NavSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  {
    section: "SIGNIFICA",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Get a quote", href: "/quote" },
      { label: "B Corp", href: "/bcorp" },
    ],
  },
  {
    section: "HANDBOOK",
    links: [
      { label: "Handbook", href: "/handbook" },
      { label: "Playbook", href: "/playbook" },
      { label: "Mission and values", href: "/mission" },
      { label: "Culture", href: "/culture" },
      { label: "How we collaborate", href: "/collaborate" },
    ],
  },
  {
    section: "FOLLOW US",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "X", href: "https://x.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Behance", href: "https://behance.net" },
      { label: "Github", href: "https://github.com" },
      { label: "YouTube", href: "https://youtube.com" },
    ],
  },
]

export function NavSidebar({ isOpen, onClose }: NavSidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} aria-hidden="true" />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-sm bg-background z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 bg-background p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">stepham</h1>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-block px-4 py-2 bg-foreground text-background rounded-full font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Get in touch
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation Content */}
        <div className="p-6 space-y-8">
          {navItems.map((section) => (
            <div key={section.section}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {section.section}
              </h3>
              <nav className="space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
