// contentlayer.config.js
import fs2 from "fs";
import path2 from "path";
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import { getHighlighter, loadTheme } from "shiki";
import { visit as visit3 } from "unist-util-visit";

// lib/rehype-component.ts
import fs from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// __registry__/index.tsx
import * as React from "react";
var Index = {
  "default": {
    "accordion": {
      name: "accordion",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/accordion")),
      files: ["registry/default/ui/accordion.tsx"]
    },
    "alert": {
      name: "alert",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/alert")),
      files: ["registry/default/ui/alert.tsx"]
    },
    "alert-dialog": {
      name: "alert-dialog",
      type: "components:ui",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/ui/alert-dialog")),
      files: ["registry/default/ui/alert-dialog.tsx"]
    },
    "aspect-ratio": {
      name: "aspect-ratio",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/aspect-ratio")),
      files: ["registry/default/ui/aspect-ratio.tsx"]
    },
    "avatar": {
      name: "avatar",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/avatar")),
      files: ["registry/default/ui/avatar.tsx"]
    },
    "badge": {
      name: "badge",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/badge")),
      files: ["registry/default/ui/badge.tsx"]
    },
    "button": {
      name: "button",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/button")),
      files: ["registry/default/ui/button.tsx"]
    },
    "calendar": {
      name: "calendar",
      type: "components:ui",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/ui/calendar")),
      files: ["registry/default/ui/calendar.tsx"]
    },
    "card": {
      name: "card",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/card")),
      files: ["registry/default/ui/card.tsx"]
    },
    "checkbox": {
      name: "checkbox",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/checkbox")),
      files: ["registry/default/ui/checkbox.tsx"]
    },
    "collapsible": {
      name: "collapsible",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/collapsible")),
      files: ["registry/default/ui/collapsible.tsx"]
    },
    "command": {
      name: "command",
      type: "components:ui",
      registryDependencies: ["dialog"],
      component: React.lazy(() => import("@/registry/default/ui/command")),
      files: ["registry/default/ui/command.tsx"]
    },
    "context-menu": {
      name: "context-menu",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/context-menu")),
      files: ["registry/default/ui/context-menu.tsx"]
    },
    "dialog": {
      name: "dialog",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/dialog")),
      files: ["registry/default/ui/dialog.tsx"]
    },
    "dropdown-menu": {
      name: "dropdown-menu",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/dropdown-menu")),
      files: ["registry/default/ui/dropdown-menu.tsx"]
    },
    "form": {
      name: "form",
      type: "components:ui",
      registryDependencies: ["button", "label"],
      component: React.lazy(() => import("@/registry/default/ui/form")),
      files: ["registry/default/ui/form.tsx"]
    },
    "hover-card": {
      name: "hover-card",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/hover-card")),
      files: ["registry/default/ui/hover-card.tsx"]
    },
    "input": {
      name: "input",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/input")),
      files: ["registry/default/ui/input.tsx"]
    },
    "label": {
      name: "label",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/label")),
      files: ["registry/default/ui/label.tsx"]
    },
    "menubar": {
      name: "menubar",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/menubar")),
      files: ["registry/default/ui/menubar.tsx"]
    },
    "navigation-menu": {
      name: "navigation-menu",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/navigation-menu")),
      files: ["registry/default/ui/navigation-menu.tsx"]
    },
    "popover": {
      name: "popover",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/popover")),
      files: ["registry/default/ui/popover.tsx"]
    },
    "progress": {
      name: "progress",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/progress")),
      files: ["registry/default/ui/progress.tsx"]
    },
    "radio-group": {
      name: "radio-group",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/radio-group")),
      files: ["registry/default/ui/radio-group.tsx"]
    },
    "scroll-area": {
      name: "scroll-area",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/scroll-area")),
      files: ["registry/default/ui/scroll-area.tsx"]
    },
    "select": {
      name: "select",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/select")),
      files: ["registry/default/ui/select.tsx"]
    },
    "separator": {
      name: "separator",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/separator")),
      files: ["registry/default/ui/separator.tsx"]
    },
    "sheet": {
      name: "sheet",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/sheet")),
      files: ["registry/default/ui/sheet.tsx"]
    },
    "skeleton": {
      name: "skeleton",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/skeleton")),
      files: ["registry/default/ui/skeleton.tsx"]
    },
    "slider": {
      name: "slider",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/slider")),
      files: ["registry/default/ui/slider.tsx"]
    },
    "switch": {
      name: "switch",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/switch")),
      files: ["registry/default/ui/switch.tsx"]
    },
    "table": {
      name: "table",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/table")),
      files: ["registry/default/ui/table.tsx"]
    },
    "tabs": {
      name: "tabs",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/tabs")),
      files: ["registry/default/ui/tabs.tsx"]
    },
    "textarea": {
      name: "textarea",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/textarea")),
      files: ["registry/default/ui/textarea.tsx"]
    },
    "toast": {
      name: "toast",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/toast")),
      files: ["registry/default/ui/toast.tsx", "registry/default/ui/use-toast.ts", "registry/default/ui/toaster.tsx"]
    },
    "toggle": {
      name: "toggle",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/toggle")),
      files: ["registry/default/ui/toggle.tsx"]
    },
    "tooltip": {
      name: "tooltip",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/ui/tooltip")),
      files: ["registry/default/ui/tooltip.tsx"]
    },
    "accordion-demo": {
      name: "accordion-demo",
      type: "components:example",
      registryDependencies: ["accordion"],
      component: React.lazy(() => import("@/registry/default/example/accordion-demo")),
      files: ["registry/default/example/accordion-demo.tsx"]
    },
    "alert-demo": {
      name: "alert-demo",
      type: "components:example",
      registryDependencies: ["alert"],
      component: React.lazy(() => import("@/registry/default/example/alert-demo")),
      files: ["registry/default/example/alert-demo.tsx"]
    },
    "alert-destructive": {
      name: "alert-destructive",
      type: "components:example",
      registryDependencies: ["alert"],
      component: React.lazy(() => import("@/registry/default/example/alert-destructive")),
      files: ["registry/default/example/alert-destructive.tsx"]
    },
    "alert-dialog-demo": {
      name: "alert-dialog-demo",
      type: "components:example",
      registryDependencies: ["alert-dialog", "button"],
      component: React.lazy(() => import("@/registry/default/example/alert-dialog-demo")),
      files: ["registry/default/example/alert-dialog-demo.tsx"]
    },
    "aspect-ratio-demo": {
      name: "aspect-ratio-demo",
      type: "components:example",
      registryDependencies: ["aspect-ratio"],
      component: React.lazy(() => import("@/registry/default/example/aspect-ratio-demo")),
      files: ["registry/default/example/aspect-ratio-demo.tsx"]
    },
    "avatar-demo": {
      name: "avatar-demo",
      type: "components:example",
      registryDependencies: ["avatar"],
      component: React.lazy(() => import("@/registry/default/example/avatar-demo")),
      files: ["registry/default/example/avatar-demo.tsx"]
    },
    "badge-demo": {
      name: "badge-demo",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(() => import("@/registry/default/example/badge-demo")),
      files: ["registry/default/example/badge-demo.tsx"]
    },
    "badge-destructive": {
      name: "badge-destructive",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(() => import("@/registry/default/example/badge-destructive")),
      files: ["registry/default/example/badge-destructive.tsx"]
    },
    "badge-outline": {
      name: "badge-outline",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(() => import("@/registry/default/example/badge-outline")),
      files: ["registry/default/example/badge-outline.tsx"]
    },
    "badge-secondary": {
      name: "badge-secondary",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(() => import("@/registry/default/example/badge-secondary")),
      files: ["registry/default/example/badge-secondary.tsx"]
    },
    "button-demo": {
      name: "button-demo",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/example/button-demo")),
      files: ["registry/default/example/button-demo.tsx"]
    },
    "button-secondary": {
      name: "button-secondary",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/example/button-secondary")),
      files: ["registry/default/example/button-secondary.tsx"]
    },
    "button-destructive": {
      name: "button-destructive",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/example/button-destructive")),
      files: ["registry/default/example/button-destructive.tsx"]
    },
    "button-outline": {
      name: "button-outline",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/example/button-outline")),
      files: ["registry/default/example/button-outline.tsx"]
    },
    "button-ghost": {
      name: "button-ghost",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/example/button-ghost")),
      files: ["registry/default/example/button-ghost.tsx"]
    },
    "button-link": {
      name: "button-link",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/example/button-link")),
      files: ["registry/default/example/button-link.tsx"]
    },
    "button-with-icon": {
      name: "button-with-icon",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/example/button-with-icon")),
      files: ["registry/default/example/button-with-icon.tsx"]
    },
    "button-loading": {
      name: "button-loading",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/example/button-loading")),
      files: ["registry/default/example/button-loading.tsx"]
    },
    "button-icon": {
      name: "button-icon",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/example/button-icon")),
      files: ["registry/default/example/button-icon.tsx"]
    },
    "button-as-child": {
      name: "button-as-child",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/example/button-as-child")),
      files: ["registry/default/example/button-as-child.tsx"]
    },
    "calendar-demo": {
      name: "calendar-demo",
      type: "components:example",
      registryDependencies: ["calendar"],
      component: React.lazy(() => import("@/registry/default/example/calendar-demo")),
      files: ["registry/default/example/calendar-demo.tsx"]
    },
    "calendar-form": {
      name: "calendar-form",
      type: "components:example",
      registryDependencies: ["calendar", "form", "popover"],
      component: React.lazy(() => import("@/registry/default/example/calendar-form")),
      files: ["registry/default/example/calendar-form.tsx"]
    },
    "card-demo": {
      name: "card-demo",
      type: "components:example",
      registryDependencies: ["card", "button", "switch"],
      component: React.lazy(() => import("@/registry/default/example/card-demo")),
      files: ["registry/default/example/card-demo.tsx"]
    },
    "card-with-form": {
      name: "card-with-form",
      type: "components:example",
      registryDependencies: ["button", "card", "input", "label", "select"],
      component: React.lazy(() => import("@/registry/default/example/card-with-form")),
      files: ["registry/default/example/card-with-form.tsx"]
    },
    "checkbox-demo": {
      name: "checkbox-demo",
      type: "components:example",
      registryDependencies: ["checkbox"],
      component: React.lazy(() => import("@/registry/default/example/checkbox-demo")),
      files: ["registry/default/example/checkbox-demo.tsx"]
    },
    "checkbox-disabled": {
      name: "checkbox-disabled",
      type: "components:example",
      registryDependencies: ["checkbox"],
      component: React.lazy(() => import("@/registry/default/example/checkbox-disabled")),
      files: ["registry/default/example/checkbox-disabled.tsx"]
    },
    "checkbox-form-multiple": {
      name: "checkbox-form-multiple",
      type: "components:example",
      registryDependencies: ["checkbox", "form"],
      component: React.lazy(() => import("@/registry/default/example/checkbox-form-multiple")),
      files: ["registry/default/example/checkbox-form-multiple.tsx"]
    },
    "checkbox-form-single": {
      name: "checkbox-form-single",
      type: "components:example",
      registryDependencies: ["checkbox", "form"],
      component: React.lazy(() => import("@/registry/default/example/checkbox-form-single")),
      files: ["registry/default/example/checkbox-form-single.tsx"]
    },
    "checkbox-with-text": {
      name: "checkbox-with-text",
      type: "components:example",
      registryDependencies: ["checkbox"],
      component: React.lazy(() => import("@/registry/default/example/checkbox-with-text")),
      files: ["registry/default/example/checkbox-with-text.tsx"]
    },
    "collapsible-demo": {
      name: "collapsible-demo",
      type: "components:example",
      registryDependencies: ["collapsible"],
      component: React.lazy(() => import("@/registry/default/example/collapsible-demo")),
      files: ["registry/default/example/collapsible-demo.tsx"]
    },
    "combobox-demo": {
      name: "combobox-demo",
      type: "components:example",
      registryDependencies: ["command"],
      component: React.lazy(() => import("@/registry/default/example/combobox-demo")),
      files: ["registry/default/example/combobox-demo.tsx"]
    },
    "combobox-dropdown-menu": {
      name: "combobox-dropdown-menu",
      type: "components:example",
      registryDependencies: ["command", "dropdown-menu", "button"],
      component: React.lazy(() => import("@/registry/default/example/combobox-dropdown-menu")),
      files: ["registry/default/example/combobox-dropdown-menu.tsx"]
    },
    "combobox-form": {
      name: "combobox-form",
      type: "components:example",
      registryDependencies: ["command", "form"],
      component: React.lazy(() => import("@/registry/default/example/combobox-form")),
      files: ["registry/default/example/combobox-form.tsx"]
    },
    "combobox-popover": {
      name: "combobox-popover",
      type: "components:example",
      registryDependencies: ["combobox", "popover"],
      component: React.lazy(() => import("@/registry/default/example/combobox-popover")),
      files: ["registry/default/example/combobox-popover.tsx"]
    },
    "command-demo": {
      name: "command-demo",
      type: "components:example",
      registryDependencies: ["command"],
      component: React.lazy(() => import("@/registry/default/example/command-demo")),
      files: ["registry/default/example/command-demo.tsx"]
    },
    "command-dialog": {
      name: "command-dialog",
      type: "components:example",
      registryDependencies: ["command", "dialog"],
      component: React.lazy(() => import("@/registry/default/example/command-dialog")),
      files: ["registry/default/example/command-dialog.tsx"]
    },
    "context-menu-demo": {
      name: "context-menu-demo",
      type: "components:example",
      registryDependencies: ["context-menu"],
      component: React.lazy(() => import("@/registry/default/example/context-menu-demo")),
      files: ["registry/default/example/context-menu-demo.tsx"]
    },
    "data-table-demo": {
      name: "data-table-demo",
      type: "components:example",
      registryDependencies: ["data-table"],
      component: React.lazy(() => import("@/registry/default/example/data-table-demo")),
      files: ["registry/default/example/data-table-demo.tsx"]
    },
    "date-picker-demo": {
      name: "date-picker-demo",
      type: "components:example",
      registryDependencies: ["button", "calendar", "popover"],
      component: React.lazy(() => import("@/registry/default/example/date-picker-demo")),
      files: ["registry/default/example/date-picker-demo.tsx"]
    },
    "date-picker-form": {
      name: "date-picker-form",
      type: "components:example",
      registryDependencies: ["button", "calendar", "form", "popover"],
      component: React.lazy(() => import("@/registry/default/example/date-picker-form")),
      files: ["registry/default/example/date-picker-form.tsx"]
    },
    "date-picker-with-presets": {
      name: "date-picker-with-presets",
      type: "components:example",
      registryDependencies: ["button", "calendar", "popover", "select"],
      component: React.lazy(() => import("@/registry/default/example/date-picker-with-presets")),
      files: ["registry/default/example/date-picker-with-presets.tsx"]
    },
    "date-picker-with-range": {
      name: "date-picker-with-range",
      type: "components:example",
      registryDependencies: ["button", "calendar", "popover"],
      component: React.lazy(() => import("@/registry/default/example/date-picker-with-range")),
      files: ["registry/default/example/date-picker-with-range.tsx"]
    },
    "dialog-demo": {
      name: "dialog-demo",
      type: "components:example",
      registryDependencies: ["dialog"],
      component: React.lazy(() => import("@/registry/default/example/dialog-demo")),
      files: ["registry/default/example/dialog-demo.tsx"]
    },
    "dropdown-menu-demo": {
      name: "dropdown-menu-demo",
      type: "components:example",
      registryDependencies: ["dropdown-menu"],
      component: React.lazy(() => import("@/registry/default/example/dropdown-menu-demo")),
      files: ["registry/default/example/dropdown-menu-demo.tsx"]
    },
    "dropdown-menu-checkboxes": {
      name: "dropdown-menu-checkboxes",
      type: "components:example",
      registryDependencies: ["dropdown-menu", "checkbox"],
      component: React.lazy(() => import("@/registry/default/example/dropdown-menu-checkboxes")),
      files: ["registry/default/example/dropdown-menu-checkboxes.tsx"]
    },
    "dropdown-menu-radio-group": {
      name: "dropdown-menu-radio-group",
      type: "components:example",
      registryDependencies: ["dropdown-menu", "radio-group"],
      component: React.lazy(() => import("@/registry/default/example/dropdown-menu-radio-group")),
      files: ["registry/default/example/dropdown-menu-radio-group.tsx"]
    },
    "hover-card-demo": {
      name: "hover-card-demo",
      type: "components:example",
      registryDependencies: ["hover-card"],
      component: React.lazy(() => import("@/registry/default/example/hover-card-demo")),
      files: ["registry/default/example/hover-card-demo.tsx"]
    },
    "input-demo": {
      name: "input-demo",
      type: "components:example",
      registryDependencies: ["input"],
      component: React.lazy(() => import("@/registry/default/example/input-demo")),
      files: ["registry/default/example/input-demo.tsx"]
    },
    "input-disabled": {
      name: "input-disabled",
      type: "components:example",
      registryDependencies: ["input"],
      component: React.lazy(() => import("@/registry/default/example/input-disabled")),
      files: ["registry/default/example/input-disabled.tsx"]
    },
    "input-file": {
      name: "input-file",
      type: "components:example",
      registryDependencies: ["input"],
      component: React.lazy(() => import("@/registry/default/example/input-file")),
      files: ["registry/default/example/input-file.tsx"]
    },
    "input-form": {
      name: "input-form",
      type: "components:example",
      registryDependencies: ["input", "button", "form"],
      component: React.lazy(() => import("@/registry/default/example/input-form")),
      files: ["registry/default/example/input-form.tsx"]
    },
    "input-with-button": {
      name: "input-with-button",
      type: "components:example",
      registryDependencies: ["input", "button"],
      component: React.lazy(() => import("@/registry/default/example/input-with-button")),
      files: ["registry/default/example/input-with-button.tsx"]
    },
    "input-with-label": {
      name: "input-with-label",
      type: "components:example",
      registryDependencies: ["input", "button", "label"],
      component: React.lazy(() => import("@/registry/default/example/input-with-label")),
      files: ["registry/default/example/input-with-label.tsx"]
    },
    "input-with-text": {
      name: "input-with-text",
      type: "components:example",
      registryDependencies: ["input", "button", "label"],
      component: React.lazy(() => import("@/registry/default/example/input-with-text")),
      files: ["registry/default/example/input-with-text.tsx"]
    },
    "label-demo": {
      name: "label-demo",
      type: "components:example",
      registryDependencies: ["label"],
      component: React.lazy(() => import("@/registry/default/example/label-demo")),
      files: ["registry/default/example/label-demo.tsx"]
    },
    "menubar-demo": {
      name: "menubar-demo",
      type: "components:example",
      registryDependencies: ["menubar"],
      component: React.lazy(() => import("@/registry/default/example/menubar-demo")),
      files: ["registry/default/example/menubar-demo.tsx"]
    },
    "navigation-menu-demo": {
      name: "navigation-menu-demo",
      type: "components:example",
      registryDependencies: ["navigation-menu"],
      component: React.lazy(() => import("@/registry/default/example/navigation-menu-demo")),
      files: ["registry/default/example/navigation-menu-demo.tsx"]
    },
    "popover-demo": {
      name: "popover-demo",
      type: "components:example",
      registryDependencies: ["popover"],
      component: React.lazy(() => import("@/registry/default/example/popover-demo")),
      files: ["registry/default/example/popover-demo.tsx"]
    },
    "progress-demo": {
      name: "progress-demo",
      type: "components:example",
      registryDependencies: ["progress"],
      component: React.lazy(() => import("@/registry/default/example/progress-demo")),
      files: ["registry/default/example/progress-demo.tsx"]
    },
    "radio-group-demo": {
      name: "radio-group-demo",
      type: "components:example",
      registryDependencies: ["radio-group"],
      component: React.lazy(() => import("@/registry/default/example/radio-group-demo")),
      files: ["registry/default/example/radio-group-demo.tsx"]
    },
    "radio-group-form": {
      name: "radio-group-form",
      type: "components:example",
      registryDependencies: ["radio-group", "form"],
      component: React.lazy(() => import("@/registry/default/example/radio-group-form")),
      files: ["registry/default/example/radio-group-form.tsx"]
    },
    "scroll-area-demo": {
      name: "scroll-area-demo",
      type: "components:example",
      registryDependencies: ["scroll-area"],
      component: React.lazy(() => import("@/registry/default/example/scroll-area-demo")),
      files: ["registry/default/example/scroll-area-demo.tsx"]
    },
    "select-demo": {
      name: "select-demo",
      type: "components:example",
      registryDependencies: ["select"],
      component: React.lazy(() => import("@/registry/default/example/select-demo")),
      files: ["registry/default/example/select-demo.tsx"]
    },
    "select-form": {
      name: "select-form",
      type: "components:example",
      registryDependencies: ["select"],
      component: React.lazy(() => import("@/registry/default/example/select-form")),
      files: ["registry/default/example/select-form.tsx"]
    },
    "separator-demo": {
      name: "separator-demo",
      type: "components:example",
      registryDependencies: ["separator"],
      component: React.lazy(() => import("@/registry/default/example/separator-demo")),
      files: ["registry/default/example/separator-demo.tsx"]
    },
    "sheet-demo": {
      name: "sheet-demo",
      type: "components:example",
      registryDependencies: ["sheet"],
      component: React.lazy(() => import("@/registry/default/example/sheet-demo")),
      files: ["registry/default/example/sheet-demo.tsx"]
    },
    "sheet-side": {
      name: "sheet-side",
      type: "components:example",
      registryDependencies: ["sheet"],
      component: React.lazy(() => import("@/registry/default/example/sheet-side")),
      files: ["registry/default/example/sheet-side.tsx"]
    },
    "skeleton-demo": {
      name: "skeleton-demo",
      type: "components:example",
      registryDependencies: ["skeleton"],
      component: React.lazy(() => import("@/registry/default/example/skeleton-demo")),
      files: ["registry/default/example/skeleton-demo.tsx"]
    },
    "slider-demo": {
      name: "slider-demo",
      type: "components:example",
      registryDependencies: ["slider"],
      component: React.lazy(() => import("@/registry/default/example/slider-demo")),
      files: ["registry/default/example/slider-demo.tsx"]
    },
    "switch-demo": {
      name: "switch-demo",
      type: "components:example",
      registryDependencies: ["switch"],
      component: React.lazy(() => import("@/registry/default/example/switch-demo")),
      files: ["registry/default/example/switch-demo.tsx"]
    },
    "switch-form": {
      name: "switch-form",
      type: "components:example",
      registryDependencies: ["switch", "form"],
      component: React.lazy(() => import("@/registry/default/example/switch-form")),
      files: ["registry/default/example/switch-form.tsx"]
    },
    "table-demo": {
      name: "table-demo",
      type: "components:example",
      registryDependencies: ["table"],
      component: React.lazy(() => import("@/registry/default/example/table-demo")),
      files: ["registry/default/example/table-demo.tsx"]
    },
    "tabs-demo": {
      name: "tabs-demo",
      type: "components:example",
      registryDependencies: ["tabs"],
      component: React.lazy(() => import("@/registry/default/example/tabs-demo")),
      files: ["registry/default/example/tabs-demo.tsx"]
    },
    "textarea-demo": {
      name: "textarea-demo",
      type: "components:example",
      registryDependencies: ["textarea"],
      component: React.lazy(() => import("@/registry/default/example/textarea-demo")),
      files: ["registry/default/example/textarea-demo.tsx"]
    },
    "textarea-disabled": {
      name: "textarea-disabled",
      type: "components:example",
      registryDependencies: ["textarea"],
      component: React.lazy(() => import("@/registry/default/example/textarea-disabled")),
      files: ["registry/default/example/textarea-disabled.tsx"]
    },
    "textarea-form": {
      name: "textarea-form",
      type: "components:example",
      registryDependencies: ["textarea", "form"],
      component: React.lazy(() => import("@/registry/default/example/textarea-form")),
      files: ["registry/default/example/textarea-form.tsx"]
    },
    "textarea-with-button": {
      name: "textarea-with-button",
      type: "components:example",
      registryDependencies: ["textarea", "button"],
      component: React.lazy(() => import("@/registry/default/example/textarea-with-button")),
      files: ["registry/default/example/textarea-with-button.tsx"]
    },
    "textarea-with-label": {
      name: "textarea-with-label",
      type: "components:example",
      registryDependencies: ["textarea", "label"],
      component: React.lazy(() => import("@/registry/default/example/textarea-with-label")),
      files: ["registry/default/example/textarea-with-label.tsx"]
    },
    "textarea-with-text": {
      name: "textarea-with-text",
      type: "components:example",
      registryDependencies: ["textarea", "label"],
      component: React.lazy(() => import("@/registry/default/example/textarea-with-text")),
      files: ["registry/default/example/textarea-with-text.tsx"]
    },
    "toast-demo": {
      name: "toast-demo",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/default/example/toast-demo")),
      files: ["registry/default/example/toast-demo.tsx"]
    },
    "toast-destructive": {
      name: "toast-destructive",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/default/example/toast-destructive")),
      files: ["registry/default/example/toast-destructive.tsx"]
    },
    "toast-simple": {
      name: "toast-simple",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/default/example/toast-simple")),
      files: ["registry/default/example/toast-simple.tsx"]
    },
    "toast-with-action": {
      name: "toast-with-action",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/default/example/toast-with-action")),
      files: ["registry/default/example/toast-with-action.tsx"]
    },
    "toast-with-title": {
      name: "toast-with-title",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/default/example/toast-with-title")),
      files: ["registry/default/example/toast-with-title.tsx"]
    },
    "toggle-demo": {
      name: "toggle-demo",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/default/example/toggle-demo")),
      files: ["registry/default/example/toggle-demo.tsx"]
    },
    "toggle-disabled": {
      name: "toggle-disabled",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/default/example/toggle-disabled")),
      files: ["registry/default/example/toggle-disabled.tsx"]
    },
    "toggle-lg": {
      name: "toggle-lg",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/default/example/toggle-lg")),
      files: ["registry/default/example/toggle-lg.tsx"]
    },
    "toggle-outline": {
      name: "toggle-outline",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/default/example/toggle-outline")),
      files: ["registry/default/example/toggle-outline.tsx"]
    },
    "toggle-sm": {
      name: "toggle-sm",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/default/example/toggle-sm")),
      files: ["registry/default/example/toggle-sm.tsx"]
    },
    "toggle-with-text": {
      name: "toggle-with-text",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/default/example/toggle-with-text")),
      files: ["registry/default/example/toggle-with-text.tsx"]
    },
    "tooltip-demo": {
      name: "tooltip-demo",
      type: "components:example",
      registryDependencies: ["tooltip"],
      component: React.lazy(() => import("@/registry/default/example/tooltip-demo")),
      files: ["registry/default/example/tooltip-demo.tsx"]
    },
    "typography-blockquote": {
      name: "typography-blockquote",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-blockquote")),
      files: ["registry/default/example/typography-blockquote.tsx"]
    },
    "typography-demo": {
      name: "typography-demo",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-demo")),
      files: ["registry/default/example/typography-demo.tsx"]
    },
    "typography-h1": {
      name: "typography-h1",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-h1")),
      files: ["registry/default/example/typography-h1.tsx"]
    },
    "typography-h2": {
      name: "typography-h2",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-h2")),
      files: ["registry/default/example/typography-h2.tsx"]
    },
    "typography-h3": {
      name: "typography-h3",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-h3")),
      files: ["registry/default/example/typography-h3.tsx"]
    },
    "typography-h4": {
      name: "typography-h4",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-h4")),
      files: ["registry/default/example/typography-h4.tsx"]
    },
    "typography-inline-code": {
      name: "typography-inline-code",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-inline-code")),
      files: ["registry/default/example/typography-inline-code.tsx"]
    },
    "typography-large": {
      name: "typography-large",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-large")),
      files: ["registry/default/example/typography-large.tsx"]
    },
    "typography-lead": {
      name: "typography-lead",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-lead")),
      files: ["registry/default/example/typography-lead.tsx"]
    },
    "typography-list": {
      name: "typography-list",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-list")),
      files: ["registry/default/example/typography-list.tsx"]
    },
    "typography-muted": {
      name: "typography-muted",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-muted")),
      files: ["registry/default/example/typography-muted.tsx"]
    },
    "typography-p": {
      name: "typography-p",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-p")),
      files: ["registry/default/example/typography-p.tsx"]
    },
    "typography-small": {
      name: "typography-small",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-small")),
      files: ["registry/default/example/typography-small.tsx"]
    },
    "typography-table": {
      name: "typography-table",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/typography-table")),
      files: ["registry/default/example/typography-table.tsx"]
    },
    "mode-toggle": {
      name: "mode-toggle",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/mode-toggle")),
      files: ["registry/default/example/mode-toggle.tsx"]
    },
    "cards": {
      name: "cards",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/default/example/cards")),
      files: ["registry/default/example/cards/cards.tsx"]
    }
  },
  "new-york": {
    "accordion": {
      name: "accordion",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/accordion")),
      files: ["registry/new-york/ui/accordion.tsx"]
    },
    "alert": {
      name: "alert",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/alert")),
      files: ["registry/new-york/ui/alert.tsx"]
    },
    "alert-dialog": {
      name: "alert-dialog",
      type: "components:ui",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/ui/alert-dialog")),
      files: ["registry/new-york/ui/alert-dialog.tsx"]
    },
    "aspect-ratio": {
      name: "aspect-ratio",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/aspect-ratio")),
      files: ["registry/new-york/ui/aspect-ratio.tsx"]
    },
    "avatar": {
      name: "avatar",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/avatar")),
      files: ["registry/new-york/ui/avatar.tsx"]
    },
    "badge": {
      name: "badge",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/badge")),
      files: ["registry/new-york/ui/badge.tsx"]
    },
    "button": {
      name: "button",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/button")),
      files: ["registry/new-york/ui/button.tsx"]
    },
    "calendar": {
      name: "calendar",
      type: "components:ui",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/ui/calendar")),
      files: ["registry/new-york/ui/calendar.tsx"]
    },
    "card": {
      name: "card",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/card")),
      files: ["registry/new-york/ui/card.tsx"]
    },
    "checkbox": {
      name: "checkbox",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/checkbox")),
      files: ["registry/new-york/ui/checkbox.tsx"]
    },
    "collapsible": {
      name: "collapsible",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/collapsible")),
      files: ["registry/new-york/ui/collapsible.tsx"]
    },
    "command": {
      name: "command",
      type: "components:ui",
      registryDependencies: ["dialog"],
      component: React.lazy(() => import("@/registry/new-york/ui/command")),
      files: ["registry/new-york/ui/command.tsx"]
    },
    "context-menu": {
      name: "context-menu",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/context-menu")),
      files: ["registry/new-york/ui/context-menu.tsx"]
    },
    "dialog": {
      name: "dialog",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/dialog")),
      files: ["registry/new-york/ui/dialog.tsx"]
    },
    "dropdown-menu": {
      name: "dropdown-menu",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/dropdown-menu")),
      files: ["registry/new-york/ui/dropdown-menu.tsx"]
    },
    "form": {
      name: "form",
      type: "components:ui",
      registryDependencies: ["button", "label"],
      component: React.lazy(() => import("@/registry/new-york/ui/form")),
      files: ["registry/new-york/ui/form.tsx"]
    },
    "hover-card": {
      name: "hover-card",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/hover-card")),
      files: ["registry/new-york/ui/hover-card.tsx"]
    },
    "input": {
      name: "input",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/input")),
      files: ["registry/new-york/ui/input.tsx"]
    },
    "label": {
      name: "label",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/label")),
      files: ["registry/new-york/ui/label.tsx"]
    },
    "menubar": {
      name: "menubar",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/menubar")),
      files: ["registry/new-york/ui/menubar.tsx"]
    },
    "navigation-menu": {
      name: "navigation-menu",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/navigation-menu")),
      files: ["registry/new-york/ui/navigation-menu.tsx"]
    },
    "popover": {
      name: "popover",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/popover")),
      files: ["registry/new-york/ui/popover.tsx"]
    },
    "progress": {
      name: "progress",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/progress")),
      files: ["registry/new-york/ui/progress.tsx"]
    },
    "radio-group": {
      name: "radio-group",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/radio-group")),
      files: ["registry/new-york/ui/radio-group.tsx"]
    },
    "scroll-area": {
      name: "scroll-area",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/scroll-area")),
      files: ["registry/new-york/ui/scroll-area.tsx"]
    },
    "select": {
      name: "select",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/select")),
      files: ["registry/new-york/ui/select.tsx"]
    },
    "separator": {
      name: "separator",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/separator")),
      files: ["registry/new-york/ui/separator.tsx"]
    },
    "sheet": {
      name: "sheet",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/sheet")),
      files: ["registry/new-york/ui/sheet.tsx"]
    },
    "skeleton": {
      name: "skeleton",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/skeleton")),
      files: ["registry/new-york/ui/skeleton.tsx"]
    },
    "slider": {
      name: "slider",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/slider")),
      files: ["registry/new-york/ui/slider.tsx"]
    },
    "switch": {
      name: "switch",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/switch")),
      files: ["registry/new-york/ui/switch.tsx"]
    },
    "table": {
      name: "table",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/table")),
      files: ["registry/new-york/ui/table.tsx"]
    },
    "tabs": {
      name: "tabs",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/tabs")),
      files: ["registry/new-york/ui/tabs.tsx"]
    },
    "textarea": {
      name: "textarea",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/textarea")),
      files: ["registry/new-york/ui/textarea.tsx"]
    },
    "toast": {
      name: "toast",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/toast")),
      files: ["registry/new-york/ui/toast.tsx", "registry/new-york/ui/use-toast.ts", "registry/new-york/ui/toaster.tsx"]
    },
    "toggle": {
      name: "toggle",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/toggle")),
      files: ["registry/new-york/ui/toggle.tsx"]
    },
    "tooltip": {
      name: "tooltip",
      type: "components:ui",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/ui/tooltip")),
      files: ["registry/new-york/ui/tooltip.tsx"]
    },
    "accordion-demo": {
      name: "accordion-demo",
      type: "components:example",
      registryDependencies: ["accordion"],
      component: React.lazy(() => import("@/registry/new-york/example/accordion-demo")),
      files: ["registry/new-york/example/accordion-demo.tsx"]
    },
    "alert-demo": {
      name: "alert-demo",
      type: "components:example",
      registryDependencies: ["alert"],
      component: React.lazy(() => import("@/registry/new-york/example/alert-demo")),
      files: ["registry/new-york/example/alert-demo.tsx"]
    },
    "alert-destructive": {
      name: "alert-destructive",
      type: "components:example",
      registryDependencies: ["alert"],
      component: React.lazy(() => import("@/registry/new-york/example/alert-destructive")),
      files: ["registry/new-york/example/alert-destructive.tsx"]
    },
    "alert-dialog-demo": {
      name: "alert-dialog-demo",
      type: "components:example",
      registryDependencies: ["alert-dialog", "button"],
      component: React.lazy(() => import("@/registry/new-york/example/alert-dialog-demo")),
      files: ["registry/new-york/example/alert-dialog-demo.tsx"]
    },
    "aspect-ratio-demo": {
      name: "aspect-ratio-demo",
      type: "components:example",
      registryDependencies: ["aspect-ratio"],
      component: React.lazy(() => import("@/registry/new-york/example/aspect-ratio-demo")),
      files: ["registry/new-york/example/aspect-ratio-demo.tsx"]
    },
    "avatar-demo": {
      name: "avatar-demo",
      type: "components:example",
      registryDependencies: ["avatar"],
      component: React.lazy(() => import("@/registry/new-york/example/avatar-demo")),
      files: ["registry/new-york/example/avatar-demo.tsx"]
    },
    "badge-demo": {
      name: "badge-demo",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(() => import("@/registry/new-york/example/badge-demo")),
      files: ["registry/new-york/example/badge-demo.tsx"]
    },
    "badge-destructive": {
      name: "badge-destructive",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(() => import("@/registry/new-york/example/badge-destructive")),
      files: ["registry/new-york/example/badge-destructive.tsx"]
    },
    "badge-outline": {
      name: "badge-outline",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(() => import("@/registry/new-york/example/badge-outline")),
      files: ["registry/new-york/example/badge-outline.tsx"]
    },
    "badge-secondary": {
      name: "badge-secondary",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(() => import("@/registry/new-york/example/badge-secondary")),
      files: ["registry/new-york/example/badge-secondary.tsx"]
    },
    "button-demo": {
      name: "button-demo",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/example/button-demo")),
      files: ["registry/new-york/example/button-demo.tsx"]
    },
    "button-secondary": {
      name: "button-secondary",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/example/button-secondary")),
      files: ["registry/new-york/example/button-secondary.tsx"]
    },
    "button-destructive": {
      name: "button-destructive",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/example/button-destructive")),
      files: ["registry/new-york/example/button-destructive.tsx"]
    },
    "button-outline": {
      name: "button-outline",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/example/button-outline")),
      files: ["registry/new-york/example/button-outline.tsx"]
    },
    "button-ghost": {
      name: "button-ghost",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/example/button-ghost")),
      files: ["registry/new-york/example/button-ghost.tsx"]
    },
    "button-link": {
      name: "button-link",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/example/button-link")),
      files: ["registry/new-york/example/button-link.tsx"]
    },
    "button-with-icon": {
      name: "button-with-icon",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/example/button-with-icon")),
      files: ["registry/new-york/example/button-with-icon.tsx"]
    },
    "button-loading": {
      name: "button-loading",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/example/button-loading")),
      files: ["registry/new-york/example/button-loading.tsx"]
    },
    "button-icon": {
      name: "button-icon",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/example/button-icon")),
      files: ["registry/new-york/example/button-icon.tsx"]
    },
    "button-as-child": {
      name: "button-as-child",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/new-york/example/button-as-child")),
      files: ["registry/new-york/example/button-as-child.tsx"]
    },
    "calendar-demo": {
      name: "calendar-demo",
      type: "components:example",
      registryDependencies: ["calendar"],
      component: React.lazy(() => import("@/registry/new-york/example/calendar-demo")),
      files: ["registry/new-york/example/calendar-demo.tsx"]
    },
    "calendar-form": {
      name: "calendar-form",
      type: "components:example",
      registryDependencies: ["calendar", "form", "popover"],
      component: React.lazy(() => import("@/registry/new-york/example/calendar-form")),
      files: ["registry/new-york/example/calendar-form.tsx"]
    },
    "card-demo": {
      name: "card-demo",
      type: "components:example",
      registryDependencies: ["card", "button", "switch"],
      component: React.lazy(() => import("@/registry/new-york/example/card-demo")),
      files: ["registry/new-york/example/card-demo.tsx"]
    },
    "card-with-form": {
      name: "card-with-form",
      type: "components:example",
      registryDependencies: ["button", "card", "input", "label", "select"],
      component: React.lazy(() => import("@/registry/new-york/example/card-with-form")),
      files: ["registry/new-york/example/card-with-form.tsx"]
    },
    "checkbox-demo": {
      name: "checkbox-demo",
      type: "components:example",
      registryDependencies: ["checkbox"],
      component: React.lazy(() => import("@/registry/new-york/example/checkbox-demo")),
      files: ["registry/new-york/example/checkbox-demo.tsx"]
    },
    "checkbox-disabled": {
      name: "checkbox-disabled",
      type: "components:example",
      registryDependencies: ["checkbox"],
      component: React.lazy(() => import("@/registry/new-york/example/checkbox-disabled")),
      files: ["registry/new-york/example/checkbox-disabled.tsx"]
    },
    "checkbox-form-multiple": {
      name: "checkbox-form-multiple",
      type: "components:example",
      registryDependencies: ["checkbox", "form"],
      component: React.lazy(() => import("@/registry/new-york/example/checkbox-form-multiple")),
      files: ["registry/new-york/example/checkbox-form-multiple.tsx"]
    },
    "checkbox-form-single": {
      name: "checkbox-form-single",
      type: "components:example",
      registryDependencies: ["checkbox", "form"],
      component: React.lazy(() => import("@/registry/new-york/example/checkbox-form-single")),
      files: ["registry/new-york/example/checkbox-form-single.tsx"]
    },
    "checkbox-with-text": {
      name: "checkbox-with-text",
      type: "components:example",
      registryDependencies: ["checkbox"],
      component: React.lazy(() => import("@/registry/new-york/example/checkbox-with-text")),
      files: ["registry/new-york/example/checkbox-with-text.tsx"]
    },
    "collapsible-demo": {
      name: "collapsible-demo",
      type: "components:example",
      registryDependencies: ["collapsible"],
      component: React.lazy(() => import("@/registry/new-york/example/collapsible-demo")),
      files: ["registry/new-york/example/collapsible-demo.tsx"]
    },
    "combobox-demo": {
      name: "combobox-demo",
      type: "components:example",
      registryDependencies: ["command"],
      component: React.lazy(() => import("@/registry/new-york/example/combobox-demo")),
      files: ["registry/new-york/example/combobox-demo.tsx"]
    },
    "combobox-dropdown-menu": {
      name: "combobox-dropdown-menu",
      type: "components:example",
      registryDependencies: ["command", "dropdown-menu", "button"],
      component: React.lazy(() => import("@/registry/new-york/example/combobox-dropdown-menu")),
      files: ["registry/new-york/example/combobox-dropdown-menu.tsx"]
    },
    "combobox-form": {
      name: "combobox-form",
      type: "components:example",
      registryDependencies: ["command", "form"],
      component: React.lazy(() => import("@/registry/new-york/example/combobox-form")),
      files: ["registry/new-york/example/combobox-form.tsx"]
    },
    "combobox-popover": {
      name: "combobox-popover",
      type: "components:example",
      registryDependencies: ["combobox", "popover"],
      component: React.lazy(() => import("@/registry/new-york/example/combobox-popover")),
      files: ["registry/new-york/example/combobox-popover.tsx"]
    },
    "command-demo": {
      name: "command-demo",
      type: "components:example",
      registryDependencies: ["command"],
      component: React.lazy(() => import("@/registry/new-york/example/command-demo")),
      files: ["registry/new-york/example/command-demo.tsx"]
    },
    "command-dialog": {
      name: "command-dialog",
      type: "components:example",
      registryDependencies: ["command", "dialog"],
      component: React.lazy(() => import("@/registry/new-york/example/command-dialog")),
      files: ["registry/new-york/example/command-dialog.tsx"]
    },
    "context-menu-demo": {
      name: "context-menu-demo",
      type: "components:example",
      registryDependencies: ["context-menu"],
      component: React.lazy(() => import("@/registry/new-york/example/context-menu-demo")),
      files: ["registry/new-york/example/context-menu-demo.tsx"]
    },
    "data-table-demo": {
      name: "data-table-demo",
      type: "components:example",
      registryDependencies: ["data-table"],
      component: React.lazy(() => import("@/registry/new-york/example/data-table-demo")),
      files: ["registry/new-york/example/data-table-demo.tsx"]
    },
    "date-picker-demo": {
      name: "date-picker-demo",
      type: "components:example",
      registryDependencies: ["button", "calendar", "popover"],
      component: React.lazy(() => import("@/registry/new-york/example/date-picker-demo")),
      files: ["registry/new-york/example/date-picker-demo.tsx"]
    },
    "date-picker-form": {
      name: "date-picker-form",
      type: "components:example",
      registryDependencies: ["button", "calendar", "form", "popover"],
      component: React.lazy(() => import("@/registry/new-york/example/date-picker-form")),
      files: ["registry/new-york/example/date-picker-form.tsx"]
    },
    "date-picker-with-presets": {
      name: "date-picker-with-presets",
      type: "components:example",
      registryDependencies: ["button", "calendar", "popover", "select"],
      component: React.lazy(() => import("@/registry/new-york/example/date-picker-with-presets")),
      files: ["registry/new-york/example/date-picker-with-presets.tsx"]
    },
    "date-picker-with-range": {
      name: "date-picker-with-range",
      type: "components:example",
      registryDependencies: ["button", "calendar", "popover"],
      component: React.lazy(() => import("@/registry/new-york/example/date-picker-with-range")),
      files: ["registry/new-york/example/date-picker-with-range.tsx"]
    },
    "dialog-demo": {
      name: "dialog-demo",
      type: "components:example",
      registryDependencies: ["dialog"],
      component: React.lazy(() => import("@/registry/new-york/example/dialog-demo")),
      files: ["registry/new-york/example/dialog-demo.tsx"]
    },
    "dropdown-menu-demo": {
      name: "dropdown-menu-demo",
      type: "components:example",
      registryDependencies: ["dropdown-menu"],
      component: React.lazy(() => import("@/registry/new-york/example/dropdown-menu-demo")),
      files: ["registry/new-york/example/dropdown-menu-demo.tsx"]
    },
    "dropdown-menu-checkboxes": {
      name: "dropdown-menu-checkboxes",
      type: "components:example",
      registryDependencies: ["dropdown-menu", "checkbox"],
      component: React.lazy(() => import("@/registry/new-york/example/dropdown-menu-checkboxes")),
      files: ["registry/new-york/example/dropdown-menu-checkboxes.tsx"]
    },
    "dropdown-menu-radio-group": {
      name: "dropdown-menu-radio-group",
      type: "components:example",
      registryDependencies: ["dropdown-menu", "radio-group"],
      component: React.lazy(() => import("@/registry/new-york/example/dropdown-menu-radio-group")),
      files: ["registry/new-york/example/dropdown-menu-radio-group.tsx"]
    },
    "hover-card-demo": {
      name: "hover-card-demo",
      type: "components:example",
      registryDependencies: ["hover-card"],
      component: React.lazy(() => import("@/registry/new-york/example/hover-card-demo")),
      files: ["registry/new-york/example/hover-card-demo.tsx"]
    },
    "input-demo": {
      name: "input-demo",
      type: "components:example",
      registryDependencies: ["input"],
      component: React.lazy(() => import("@/registry/new-york/example/input-demo")),
      files: ["registry/new-york/example/input-demo.tsx"]
    },
    "input-disabled": {
      name: "input-disabled",
      type: "components:example",
      registryDependencies: ["input"],
      component: React.lazy(() => import("@/registry/new-york/example/input-disabled")),
      files: ["registry/new-york/example/input-disabled.tsx"]
    },
    "input-file": {
      name: "input-file",
      type: "components:example",
      registryDependencies: ["input"],
      component: React.lazy(() => import("@/registry/new-york/example/input-file")),
      files: ["registry/new-york/example/input-file.tsx"]
    },
    "input-form": {
      name: "input-form",
      type: "components:example",
      registryDependencies: ["input", "button", "form"],
      component: React.lazy(() => import("@/registry/new-york/example/input-form")),
      files: ["registry/new-york/example/input-form.tsx"]
    },
    "input-with-button": {
      name: "input-with-button",
      type: "components:example",
      registryDependencies: ["input", "button"],
      component: React.lazy(() => import("@/registry/new-york/example/input-with-button")),
      files: ["registry/new-york/example/input-with-button.tsx"]
    },
    "input-with-label": {
      name: "input-with-label",
      type: "components:example",
      registryDependencies: ["input", "button", "label"],
      component: React.lazy(() => import("@/registry/new-york/example/input-with-label")),
      files: ["registry/new-york/example/input-with-label.tsx"]
    },
    "input-with-text": {
      name: "input-with-text",
      type: "components:example",
      registryDependencies: ["input", "button", "label"],
      component: React.lazy(() => import("@/registry/new-york/example/input-with-text")),
      files: ["registry/new-york/example/input-with-text.tsx"]
    },
    "label-demo": {
      name: "label-demo",
      type: "components:example",
      registryDependencies: ["label"],
      component: React.lazy(() => import("@/registry/new-york/example/label-demo")),
      files: ["registry/new-york/example/label-demo.tsx"]
    },
    "menubar-demo": {
      name: "menubar-demo",
      type: "components:example",
      registryDependencies: ["menubar"],
      component: React.lazy(() => import("@/registry/new-york/example/menubar-demo")),
      files: ["registry/new-york/example/menubar-demo.tsx"]
    },
    "navigation-menu-demo": {
      name: "navigation-menu-demo",
      type: "components:example",
      registryDependencies: ["navigation-menu"],
      component: React.lazy(() => import("@/registry/new-york/example/navigation-menu-demo")),
      files: ["registry/new-york/example/navigation-menu-demo.tsx"]
    },
    "popover-demo": {
      name: "popover-demo",
      type: "components:example",
      registryDependencies: ["popover"],
      component: React.lazy(() => import("@/registry/new-york/example/popover-demo")),
      files: ["registry/new-york/example/popover-demo.tsx"]
    },
    "progress-demo": {
      name: "progress-demo",
      type: "components:example",
      registryDependencies: ["progress"],
      component: React.lazy(() => import("@/registry/new-york/example/progress-demo")),
      files: ["registry/new-york/example/progress-demo.tsx"]
    },
    "radio-group-demo": {
      name: "radio-group-demo",
      type: "components:example",
      registryDependencies: ["radio-group"],
      component: React.lazy(() => import("@/registry/new-york/example/radio-group-demo")),
      files: ["registry/new-york/example/radio-group-demo.tsx"]
    },
    "radio-group-form": {
      name: "radio-group-form",
      type: "components:example",
      registryDependencies: ["radio-group", "form"],
      component: React.lazy(() => import("@/registry/new-york/example/radio-group-form")),
      files: ["registry/new-york/example/radio-group-form.tsx"]
    },
    "scroll-area-demo": {
      name: "scroll-area-demo",
      type: "components:example",
      registryDependencies: ["scroll-area"],
      component: React.lazy(() => import("@/registry/new-york/example/scroll-area-demo")),
      files: ["registry/new-york/example/scroll-area-demo.tsx"]
    },
    "select-demo": {
      name: "select-demo",
      type: "components:example",
      registryDependencies: ["select"],
      component: React.lazy(() => import("@/registry/new-york/example/select-demo")),
      files: ["registry/new-york/example/select-demo.tsx"]
    },
    "select-form": {
      name: "select-form",
      type: "components:example",
      registryDependencies: ["select"],
      component: React.lazy(() => import("@/registry/new-york/example/select-form")),
      files: ["registry/new-york/example/select-form.tsx"]
    },
    "separator-demo": {
      name: "separator-demo",
      type: "components:example",
      registryDependencies: ["separator"],
      component: React.lazy(() => import("@/registry/new-york/example/separator-demo")),
      files: ["registry/new-york/example/separator-demo.tsx"]
    },
    "sheet-demo": {
      name: "sheet-demo",
      type: "components:example",
      registryDependencies: ["sheet"],
      component: React.lazy(() => import("@/registry/new-york/example/sheet-demo")),
      files: ["registry/new-york/example/sheet-demo.tsx"]
    },
    "sheet-side": {
      name: "sheet-side",
      type: "components:example",
      registryDependencies: ["sheet"],
      component: React.lazy(() => import("@/registry/new-york/example/sheet-side")),
      files: ["registry/new-york/example/sheet-side.tsx"]
    },
    "skeleton-demo": {
      name: "skeleton-demo",
      type: "components:example",
      registryDependencies: ["skeleton"],
      component: React.lazy(() => import("@/registry/new-york/example/skeleton-demo")),
      files: ["registry/new-york/example/skeleton-demo.tsx"]
    },
    "slider-demo": {
      name: "slider-demo",
      type: "components:example",
      registryDependencies: ["slider"],
      component: React.lazy(() => import("@/registry/new-york/example/slider-demo")),
      files: ["registry/new-york/example/slider-demo.tsx"]
    },
    "switch-demo": {
      name: "switch-demo",
      type: "components:example",
      registryDependencies: ["switch"],
      component: React.lazy(() => import("@/registry/new-york/example/switch-demo")),
      files: ["registry/new-york/example/switch-demo.tsx"]
    },
    "switch-form": {
      name: "switch-form",
      type: "components:example",
      registryDependencies: ["switch", "form"],
      component: React.lazy(() => import("@/registry/new-york/example/switch-form")),
      files: ["registry/new-york/example/switch-form.tsx"]
    },
    "table-demo": {
      name: "table-demo",
      type: "components:example",
      registryDependencies: ["table"],
      component: React.lazy(() => import("@/registry/new-york/example/table-demo")),
      files: ["registry/new-york/example/table-demo.tsx"]
    },
    "tabs-demo": {
      name: "tabs-demo",
      type: "components:example",
      registryDependencies: ["tabs"],
      component: React.lazy(() => import("@/registry/new-york/example/tabs-demo")),
      files: ["registry/new-york/example/tabs-demo.tsx"]
    },
    "textarea-demo": {
      name: "textarea-demo",
      type: "components:example",
      registryDependencies: ["textarea"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-demo")),
      files: ["registry/new-york/example/textarea-demo.tsx"]
    },
    "textarea-disabled": {
      name: "textarea-disabled",
      type: "components:example",
      registryDependencies: ["textarea"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-disabled")),
      files: ["registry/new-york/example/textarea-disabled.tsx"]
    },
    "textarea-form": {
      name: "textarea-form",
      type: "components:example",
      registryDependencies: ["textarea", "form"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-form")),
      files: ["registry/new-york/example/textarea-form.tsx"]
    },
    "textarea-with-button": {
      name: "textarea-with-button",
      type: "components:example",
      registryDependencies: ["textarea", "button"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-with-button")),
      files: ["registry/new-york/example/textarea-with-button.tsx"]
    },
    "textarea-with-label": {
      name: "textarea-with-label",
      type: "components:example",
      registryDependencies: ["textarea", "label"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-with-label")),
      files: ["registry/new-york/example/textarea-with-label.tsx"]
    },
    "textarea-with-text": {
      name: "textarea-with-text",
      type: "components:example",
      registryDependencies: ["textarea", "label"],
      component: React.lazy(() => import("@/registry/new-york/example/textarea-with-text")),
      files: ["registry/new-york/example/textarea-with-text.tsx"]
    },
    "toast-demo": {
      name: "toast-demo",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/new-york/example/toast-demo")),
      files: ["registry/new-york/example/toast-demo.tsx"]
    },
    "toast-destructive": {
      name: "toast-destructive",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/new-york/example/toast-destructive")),
      files: ["registry/new-york/example/toast-destructive.tsx"]
    },
    "toast-simple": {
      name: "toast-simple",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/new-york/example/toast-simple")),
      files: ["registry/new-york/example/toast-simple.tsx"]
    },
    "toast-with-action": {
      name: "toast-with-action",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/new-york/example/toast-with-action")),
      files: ["registry/new-york/example/toast-with-action.tsx"]
    },
    "toast-with-title": {
      name: "toast-with-title",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/new-york/example/toast-with-title")),
      files: ["registry/new-york/example/toast-with-title.tsx"]
    },
    "toggle-demo": {
      name: "toggle-demo",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-demo")),
      files: ["registry/new-york/example/toggle-demo.tsx"]
    },
    "toggle-disabled": {
      name: "toggle-disabled",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-disabled")),
      files: ["registry/new-york/example/toggle-disabled.tsx"]
    },
    "toggle-lg": {
      name: "toggle-lg",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-lg")),
      files: ["registry/new-york/example/toggle-lg.tsx"]
    },
    "toggle-outline": {
      name: "toggle-outline",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-outline")),
      files: ["registry/new-york/example/toggle-outline.tsx"]
    },
    "toggle-sm": {
      name: "toggle-sm",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-sm")),
      files: ["registry/new-york/example/toggle-sm.tsx"]
    },
    "toggle-with-text": {
      name: "toggle-with-text",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(() => import("@/registry/new-york/example/toggle-with-text")),
      files: ["registry/new-york/example/toggle-with-text.tsx"]
    },
    "tooltip-demo": {
      name: "tooltip-demo",
      type: "components:example",
      registryDependencies: ["tooltip"],
      component: React.lazy(() => import("@/registry/new-york/example/tooltip-demo")),
      files: ["registry/new-york/example/tooltip-demo.tsx"]
    },
    "typography-blockquote": {
      name: "typography-blockquote",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-blockquote")),
      files: ["registry/new-york/example/typography-blockquote.tsx"]
    },
    "typography-demo": {
      name: "typography-demo",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-demo")),
      files: ["registry/new-york/example/typography-demo.tsx"]
    },
    "typography-h1": {
      name: "typography-h1",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-h1")),
      files: ["registry/new-york/example/typography-h1.tsx"]
    },
    "typography-h2": {
      name: "typography-h2",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-h2")),
      files: ["registry/new-york/example/typography-h2.tsx"]
    },
    "typography-h3": {
      name: "typography-h3",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-h3")),
      files: ["registry/new-york/example/typography-h3.tsx"]
    },
    "typography-h4": {
      name: "typography-h4",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-h4")),
      files: ["registry/new-york/example/typography-h4.tsx"]
    },
    "typography-inline-code": {
      name: "typography-inline-code",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-inline-code")),
      files: ["registry/new-york/example/typography-inline-code.tsx"]
    },
    "typography-large": {
      name: "typography-large",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-large")),
      files: ["registry/new-york/example/typography-large.tsx"]
    },
    "typography-lead": {
      name: "typography-lead",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-lead")),
      files: ["registry/new-york/example/typography-lead.tsx"]
    },
    "typography-list": {
      name: "typography-list",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-list")),
      files: ["registry/new-york/example/typography-list.tsx"]
    },
    "typography-muted": {
      name: "typography-muted",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-muted")),
      files: ["registry/new-york/example/typography-muted.tsx"]
    },
    "typography-p": {
      name: "typography-p",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-p")),
      files: ["registry/new-york/example/typography-p.tsx"]
    },
    "typography-small": {
      name: "typography-small",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-small")),
      files: ["registry/new-york/example/typography-small.tsx"]
    },
    "typography-table": {
      name: "typography-table",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/typography-table")),
      files: ["registry/new-york/example/typography-table.tsx"]
    },
    "mode-toggle": {
      name: "mode-toggle",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/mode-toggle")),
      files: ["registry/new-york/example/mode-toggle.tsx"]
    },
    "cards": {
      name: "cards",
      type: "components:example",
      registryDependencies: void 0,
      component: React.lazy(() => import("@/registry/new-york/example/cards")),
      files: ["registry/new-york/example/cards/cards.tsx"]
    }
  }
};

// registry/styles.ts
var styles = [
  {
    name: "default",
    label: "Default"
  },
  {
    name: "new-york",
    label: "New York"
  }
];

// lib/rehype-component.ts
function rehypeComponent() {
  return async (tree) => {
    visit(tree, (node) => {
      const { value: srcPath } = getNodeAttributeByName(node, "src") || {};
      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value;
        const fileName = getNodeAttributeByName(node, "fileName")?.value;
        if (!name && !srcPath) {
          return null;
        }
        try {
          for (const style of styles) {
            let src;
            if (srcPath) {
              src = srcPath;
            } else {
              const component = Index[style.name][name];
              src = fileName ? component.files.find((file) => {
                return file.endsWith(`${fileName}.tsx`) || file.endsWith(`${fileName}.ts`);
              }) || component.files[0] : component.files[0];
            }
            const filePath = path.join(process.cwd(), src);
            let source = fs.readFileSync(filePath, "utf8");
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              "@/components/"
            );
            source = source.replaceAll("export default", "export");
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: src,
                  __style__: style.name
                },
                attributes: [
                  {
                    name: "styleName",
                    type: "mdxJsxAttribute",
                    value: style.name
                  }
                ],
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"]
                    },
                    children: [
                      {
                        type: "text",
                        value: source
                      }
                    ]
                  })
                ]
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value;
        if (!name) {
          return null;
        }
        try {
          for (const style of styles) {
            const component = Index[style.name][name];
            const src = component.files[0];
            const filePath = path.join(process.cwd(), src);
            let source = fs.readFileSync(filePath, "utf8");
            source = source.replaceAll(
              `@/registry/${style.name}/`,
              "@/components/"
            );
            source = source.replaceAll("export default", "export");
            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: src
                },
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"]
                    },
                    children: [
                      {
                        type: "text",
                        value: source
                      }
                    ]
                  })
                ]
              })
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

// lib/rehype-npm-command.ts
import { visit as visit2 } from "unist-util-visit";
function rehypeNpmCommand() {
  return (tree) => {
    visit2(tree, (node) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return;
      }
      if (node.properties?.["__rawString__"]?.startsWith("npm install")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm install",
          "yarn add"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm install",
          "pnpm add"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npx create-",
          "yarn create "
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx create-",
          "pnpm create "
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npx") && !node.properties?.["__rawString__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand;
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx",
          "pnpm dlx"
        );
      }
    });
  };
}

// contentlayer.config.js
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var RadixProperties = defineNestedType(() => ({
  name: "RadixProperties",
  fields: {
    link: {
      type: "string"
    },
    api: {
      type: "string"
    }
  }
}));
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    radix: {
      type: "nested",
      of: RadixProperties
    },
    featured: {
      type: "boolean",
      default: false,
      required: false
    },
    component: {
      type: "boolean",
      default: false,
      required: false
    },
    toc: {
      type: "boolean",
      default: true,
      required: false
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }
            if (codeEl.data?.meta) {
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, "");
              }
            }
            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
            node.__style__ = node.properties?.__style__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          getHighlighter: async () => {
            const theme = await loadTheme(
              path2.join(process.cwd(), "/lib/themes/dark.json")
            );
            return await getHighlighter({ theme });
          },
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }
            preElement.properties["__withMeta__"] = node.children.at(0).tagName === "div";
            preElement.properties["__rawString__"] = node.__rawString__;
            if (node.__src__) {
              preElement.properties["__src__"] = node.__src__;
            }
            if (node.__event__) {
              preElement.properties["__event__"] = node.__event__;
            }
            if (node.__style__) {
              preElement.properties["__style__"] = node.__style__;
            }
          }
        });
      },
      rehypeNpmCommand,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-NYCODHOA.mjs.map
