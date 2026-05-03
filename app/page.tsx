"use client"

import * as React from "react"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <EditorNavbar
        sidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen((open) => !open)}
      />
      <div className="relative flex min-h-0 flex-1 flex-col">
        <ProjectSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="flex min-h-[calc(100vh-3.5rem)] flex-1 items-center justify-center p-6 text-sm text-muted-foreground">
          Editor canvas
        </main>
      </div>
    </div>
  )
}
