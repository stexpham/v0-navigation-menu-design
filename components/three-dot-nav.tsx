"use client"

import { useState } from "react"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavSidebar } from "./nav-sidebar"

export function ThreeDotNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 right-0 z-40 p-4">
        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-lg">
          {/* Logo section */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="font-bold text-gray-900">stepham</span>
          </div>

          {/* Menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(true)}
            className="h-8 w-8 ml-2"
            aria-label="Open navigation menu"
          >
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <NavSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
