import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Presentational shell matching `components/ui/dialog` token usage
 * (`bg-popover`, `ring-foreground/10`, `muted` footer) for future modal content.
 * Does not render a dialog root, portal, or overlay.
 */

export function EditorDialogPatternRoot({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="editor-dialog-pattern-root"
      className={cn(
        "grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 sm:max-w-sm",
        className
      )}
      {...props}
    />
  )
}

export function EditorDialogPatternHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="editor-dialog-pattern-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

export function EditorDialogPatternTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="editor-dialog-pattern-title"
      className={cn(
        "font-heading text-base leading-none font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

export function EditorDialogPatternDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="editor-dialog-pattern-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export function EditorDialogPatternFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="editor-dialog-pattern-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t border-border bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}
