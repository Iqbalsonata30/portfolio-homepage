"use client"

import {
  BriefcaseBusiness,
  Contact,
  Home,
  SendIcon,
} from 'lucide-react'


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Menu } from 'lucide-react';
import { Button } from './ui/button';

type NavItem = {
  title: string;
  href: string;
  icon: JSX.Element;
};

const navItems: NavItem[] = [
  { title: "Home", href: "/", icon: <Home /> },
  { title: "About Us", href: "/about", icon: <Contact /> },
  { title: "Portfolio", href: "/portfolio", icon: <BriefcaseBusiness /> },
];


export default function Navbar(): JSX.Element {
  const img = "/assets/img/ninja.png";
  return (
    <div className="flex justify-between items-center border-b-4 pb-4 ">
      <div className="flex items-center justify-center gap-1">
        <img src={img} className="w-10 h-10 object-contain" />
        <p className="text-lg font-bold">Iqbal Sonata</p>
      </div>

      <div className="hidden sm:flex justify-center items-center gap-4 ">
        {navItems.map((item, i) => (
          <Button asChild className="cursor-pointer" key={i}>
            <a href={item.href}>
              {item.icon} {item.title}
            </a>
          </Button>
        ))}
      </div>

      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" className="cursor-pointer lg:hidden" variant={"neutral"}>
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mx-2">
            <DropdownMenuLabel>Iqbal Sonata</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup >
              {navItems.map((item) => (
                <DropdownMenuItem asChild key={item.href} className="cursor-pointer">
                  <a href={item.href} className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div >
    </div>
  )
}