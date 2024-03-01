"use client"
import * as React from 'react';

import Link from "next/link"

import { cn } from "@/lib/utils"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button, buttonVariants } from "./ui/button"
import { Mail, Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { BiDownArrow as DownArrow, BiUpArrow as UpArrow } from "react-icons/bi";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import ActionButton from './action-button';


const services: { title: string; href: string; }[] = [
	{
		title: "Logo Design",
		href: "/docs/primitives/alert-dialog",
	},
	{
		title: "Digital Marketing",
		href: "/docs/primitives/hover-card",
	},
	{
		title: "Website Development",
		href: "/docs/primitives/progress",
	},
	{
		title: "Ecommerce Web Solutions",
		href: "/docs/primitives/scroll-area",
	},
	{
		title: "SEO Services",
		href: "/docs/primitives/tabs",
	},
	{
		title: "App Design",
		href: "/docs/primitives/tooltip",
	},
	{
		title: "Creative Copywriting",
		href: "/docs/primitives/tabs"
	},
	{
		title: "Motion Graphics",
		href: "/docs/primitives/tooltip"
	},
]

export default function MobileNavbar() {
	const pathname = usePathname();
	const [openContact, setOpenContact] = React.useState(false);
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	return (
		<div className="min-[841px]:hidden w-full space-y-3 p-3">
			<div className="flex justify-between flex-col w-full">
				<div className="flex gap-2 items-center w-full justify-between">
					<Image alt="Design4Them" src="/images/logo.png" width="160" height="160" className='h-18! w-48' />
					<Button size="icon" variant="link" onClick={() => setOpenContact(!openContact)}>
						{openContact ? <UpArrow className='w-6 h-6' /> : <DownArrow className='w-4 h-4' />}
					</Button>
				</div>
				{openContact && <div className="flex gap-2 flex-col text-xs text-primary">
					<p>Call Us</p>
					<div className="flex gap-2 items-center">
						<Image src="/images/canada.png" alt="Canada" width="20" height="20" className="w-8 h-6" />
						<Link href="tel:(647) 495-6338" target="_blank">Call Us: (647) 495-6338</Link>
					</div>
					<div className="flex gap-2 items-center">
						<Image src="/images/usa.png" alt="USA" width="20" height="20" className="w-8 h-6" />
						<Link href="tel:407 676 5776" target="_blank">Book a call: 407 676 5776</Link>
					</div>
					<ActionButton />
				</div>}
			</div>
			<div className='flex w-full items-center justify-between'>
				<h3 className="text-2xl font-semibold tracking-tight">
					Menu
				</h3>
				<Button size="icon" variant="link" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
				</Button>
			</div>
			{isMenuOpen && <div className="justify-between flex flex-col">
				<Button variant={pathname === "/" ? "secondary" : "ghost"} className='justify-start'>Home</Button>
				<Button variant={pathname === "/about" ? "secondary" : "ghost"} className='justify-start'>About</Button>
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger className={buttonVariants({ variant: "ghost", className: "justify-start flex gap-2" })}>Services</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-2 pb-0">
							{services.map((service, index) => (
								<Link href={service.href} key={index} className="h-10 px-4 py-2 hover:bg-secondary duration-300 rounded-md">{service.title}</Link>
							))}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Button variant={pathname === "/packages" ? "secondary" : "ghost"} className='justify-start'>Packages</Button>
				<Button variant={pathname === "/packages/combo" ? "secondary" : "ghost"} className='justify-start'>Combo Packages</Button>
				<Button variant={pathname === "/showcase" ? "secondary" : "ghost"} className='justify-start'>Showcase</Button>
				<Button variant={pathname === "/reviews" ? "secondary" : "ghost"} className='justify-start'>Reviews</Button>
				<Button variant={pathname === "/contact" ? "secondary" : "ghost"} className='justify-start'>Contact</Button>
			</div>}
		</div>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:ml-2 hover:text-primary",
						className
					)}
					{...props}
				>
					<div className="text-xs font-medium leading-none">{title}</div>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"
