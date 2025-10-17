"use client"

import { LayoutDashboard, Users, Table2, BarChart2, Settings, LucideIcon } from "lucide-react"

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  active?: boolean
  onClick?: () => void
}

function SidebarItem({ icon: Icon, label, active = false, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-colors ${
        active ? "bg-primary text-primary-foreground" : "hover:bg-accent"
      }`}
    >
      <Icon className="h-5 w-5" />
      {label}
    </button>
  )
}

type DashboardSection = "overview" | "babyfoots" | "users" | "stats" | "settings"

interface SidebarProps {
  activeItem: DashboardSection
  onSelectItem: (id: DashboardSection) => void
}

export function Sidebar({ activeItem, onSelectItem }: SidebarProps) {
  const items = [
    { label: "Vue d’ensemble", id: "overview" as DashboardSection, icon: LayoutDashboard },
    { label: "Babyfoots", id: "babyfoots" as DashboardSection, icon: Table2 },
    { label: "Utilisateurs", id: "users" as DashboardSection, icon: Users },
    { label: "Statistiques", id: "stats" as DashboardSection, icon: BarChart2 },
    { label: "Paramètres", id: "settings" as DashboardSection, icon: Settings },
  ]

  return (
    <aside className="w-64 border-r border-border bg-card/30 p-4 hidden md:flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <Table2 className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg">Babyfoot Connect</span>
      </div>

      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.id}
            onClick={() => onSelectItem(item.id)}
          />
        ))}
      </nav>
    </aside>
  )
}
