"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export type ProjectSidebarProps = {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export function ProjectSidebar({
  isOpen,
  onClose,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      id="project-sidebar"
      aria-hidden={!isOpen}
      aria-label="Projects"
      className={cn(
        "fixed top-14 left-0 z-40 flex h-[calc(100vh-3.5rem)] w-[min(100vw,20rem)] flex-col border-r border-border bg-card shadow-xl transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border px-3 py-2.5">
        <h2 className="text-sm font-medium text-foreground">Projects</h2>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close projects sidebar"
        >
          <X className="size-4" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="flex min-h-0 flex-1 flex-col gap-0 px-3 pt-3">
        <TabsList className="w-full shrink-0">
          <TabsTrigger value="my-projects" className="flex-1">
            My Projects
          </TabsTrigger>
          <TabsTrigger value="shared" className="flex-1">
            Shared
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="my-projects"
          className="mt-3 min-h-0 flex-1 overflow-auto"
        >
          <p className="rounded-lg border border-dashed border-border bg-muted/30 px-3 py-8 text-center text-sm text-muted-foreground">
            No projects yet
          </p>
        </TabsContent>
        <TabsContent value="shared" className="mt-3 min-h-0 flex-1 overflow-auto">
          <p className="rounded-lg border border-dashed border-border bg-muted/30 px-3 py-8 text-center text-sm text-muted-foreground">
            Nothing shared with you yet
          </p>
        </TabsContent>
      </Tabs>

      <div className="mt-auto border-t border-border p-3">
        <Button type="button" className="w-full gap-2" variant="default">
          <Plus className="size-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
