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
import { Button } from "./ui/button"
import { Mail } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import ActionButton from './action-button';

const components: { title: string; href: string; }[] = [
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

export default function Navbar() {
	const pathname = usePathname();
	return (
		<div className="max-w-[90rem] max-[840px]:hidden mx-4 mt-8 w-full space-y-3 max-sm:mt-0 lg:mx-auto lg:px-3">
			<div className="flex justify-between w-full">
				<div className="flex gap-2 items-center">
					<Image alt="Design4Them" src="/images/logo.png" width="200" height="200" priority={true} />
					<div className="flex gap-2 items-center text-xs">
						<Mail className="w-3 h-3 text-primary" /> <Link href="mailto:saadfarhan347@gmail.com" target="_blank" className="hover:text-primary">saadfarhan347@gmail.com</Link>
					</div>
				</div>
				<div className="flex gap-3 items-center text-xs text-primary">
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

				</div>
			</div>
			<div className="justify-between flex">
				<Button variant={pathname === "/" ? "secondary" : "ghost"}>Home</Button>
				<Button variant={pathname === "/about" ? "secondary" : "ghost"}>About</Button>
				<NavigationMenu className="list-none">
					<NavigationMenuItem>
						<NavigationMenuTrigger className={`${pathname.split("/")[0] === "services"}`}>Services</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									/>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenu>
				<Button variant={pathname === "/packages" ? "secondary" : "ghost"}>Packages</Button>
				<Button variant={pathname === "/packages/combo" ? "secondary" : "ghost"}>Combo Packages</Button>
				<Button variant={pathname === "/showcase" ? "secondary" : "ghost"}>Showcase</Button>
				<Button variant={pathname === "/reviews" ? "secondary" : "ghost"}>Reviews</Button>
				<Button variant={pathname === "/contact" ? "secondary" : "ghost"}>Contact</Button>
			</div>
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
