"use client"
import { createContext, useContext, useState, ReactNode } from "react"

type SidebarContextType = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

// Create context with default values
export const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

interface SidebarProviderProps {
  children: ReactNode;
}

// Create provider component
export function SidebarProvider({ children }: SidebarProviderProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

// Custom hook to use the sidebar context
export function useSidebar(): SidebarContextType {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}