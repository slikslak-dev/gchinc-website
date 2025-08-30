"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`h-9 w-9 px-0 transition-all duration-300 hover:bg-primary/10 hover:scale-110 ${
            isOpen ? 'bg-primary/10 scale-110' : ''
          }`}
        >
          <Sun className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'rotate-180 scale-125 text-primary' 
              : 'rotate-0 scale-100 dark:-rotate-90 dark:scale-0'
          }`} />
          <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-in-out ${
            isOpen 
              ? '-rotate-180 scale-125 text-primary' 
              : 'rotate-90 scale-0 dark:rotate-0 dark:scale-100'
          }`} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="cursor-pointer transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
        >
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="cursor-pointer transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
        >
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="cursor-pointer transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary"
        >
          <div className="mr-2 h-4 w-4 rounded-sm border-2 border-current" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}