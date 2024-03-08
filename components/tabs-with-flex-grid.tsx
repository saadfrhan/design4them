"use client";

import Image from "next/image";
import { useState } from "react";

export default function TabsWithFlexGrid(
	{ labels }:
		{
			labels: {
				label: string;
				items: {
					image: string;
					href: string;
					label: string;
				}[]
			}[]
		}
) {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div className="space-y-6">
			<div className="flex max-lg:max-w-[90vw] lg:max-w-full max-lg:overflow-x-auto mx-auto px-3 justify-center items-center">
				{labels.map(({ label }, index) => (
					<p key={index} onClick={() => setActiveTab(index)} className={`font-bold border-b-4 px-4 whitespace-nowrap text-xs py-3 ${activeTab === index ? "border-b-primary" : "border-gray-600"}`}>
						{label}
					</p>
				))}
			</div>
			<div className="mx-auto flex flex-wrap gap-4 justify-center items-center w-full">
				{labels[labels.findIndex((_, index) => index === activeTab)].items.map((item, index) => (
					<div key={index} className="w-[200px] h-[200px] bg-white rounded-[2rem]">
						<Image alt={item.label} className="rounded-[2rem] object-cover h-full" src={item.image} width={200} height={200} />
					</div>
				))}
			</div>
		</div>



	)
}
