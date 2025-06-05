
"use client";

import React from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  UploadCloud,
  GitMerge,
  LayoutGrid,
  Filter,
  Sparkles,
  Settings,
  ChevronDown,
  LogOut,
  UserCircle,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeItem, setActiveItem] = React.useState('dashboard');

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar side="left" variant="sidebar" collapsible="icon" className="border-r">
        <SidebarHeader className="p-4 justify-between items-center">
          <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-primary">
              <path d="M10.5 1.5H13.5V4.5H10.5V1.5Z" />
              <path fillRule="evenodd" d="M4.5 3.55517C3.0979 4.04082 2.025 5.37893 2.025 6.975V17.025C2.025 18.6211 3.0979 19.9592 4.5 20.4448V3.55517ZM19.5 3.55517C20.9021 4.04082 21.975 5.37893 21.975 6.975V17.025C21.975 18.6211 20.9021 19.9592 19.5 20.4448V3.55517Z" clipRule="evenodd" />
              <path d="M15 1.5H18V4.5H15V1.5Z" />
              <path d="M6 1.5H9V4.5H6V1.5Z" />
              <path d="M10.5 19.5H13.5V22.5H10.5V19.5Z" />
              <path d="M15 19.5H18V22.5H15V19.5Z" />
              <path d="M6 19.5H9V22.5H6V19.5Z" />
              <path d="M2.25 7.5H4.875V10.5H2.25V7.5Z" />
              <path d="M19.125 7.5H21.75V10.5H19.125V7.5Z" />
              <path d="M2.25 13.5H4.875V16.5H2.25V16.5Z" />
              <path d="M19.125 13.5H21.75V16.5H19.125V16.5Z" />
            </svg>
            <span className="font-semibold text-lg text-sidebar-foreground">SalesVision</span>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActiveItem('dashboard')} isActive={activeItem === 'dashboard'} tooltip="Dashboard">
                <LayoutDashboard />
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarGroup className="pt-4">
              <SidebarGroupLabel className="text-xs text-sidebar-foreground/70">Data Management</SidebarGroupLabel>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveItem('import')} isActive={activeItem === 'import'} tooltip="Dataset Import">
                  <UploadCloud />
                  Dataset Import
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveItem('joins')} isActive={activeItem === 'joins'} tooltip="Simulated Joins">
                  <GitMerge />
                  Simulated Joins
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>
            <SidebarGroup className="pt-4">
              <SidebarGroupLabel className="text-xs text-sidebar-foreground/70">Analysis Tools</SidebarGroupLabel>
               <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveItem('templates')} isActive={activeItem === 'templates'} tooltip="Templates">
                  <LayoutGrid />
                  Templates
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveItem('filters')} isActive={activeItem === 'filters'} tooltip="Filters">
                  <Filter />
                  Filters
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveItem('ai-trends')} isActive={activeItem === 'ai-trends'} tooltip="AI Trends">
                  <Sparkles />
                  AI Trends
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <SidebarMenu>
             <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveItem('settings')} isActive={activeItem === 'settings'} tooltip="Settings">
                  <Settings />
                  Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b bg-background/80 backdrop-blur-sm px-6">
          <SidebarTrigger className="md:hidden" />
          <h1 className="text-xl font-semibold text-foreground">SalesVision Dashboard</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://placehold.co/100x100.png" alt="User Avatar" data-ai-hint="user avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserCircle className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
