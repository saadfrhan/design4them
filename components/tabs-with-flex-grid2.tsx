"use client";

import Image from "next/image";
import { useState } from "react";

export default function TabsWithFlexGrid2(
	{ labels }:
		{
			labels: {
				label: string;
				items: {
					name: string;
					price: number;
					tagline: string;
					was: number;
					contains: string[];
				}[];
			}[]
		}
) {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div className="space-y-6">
			<div className="flex max-lg:max-w-[90vw] lg:max-w-full max-lg:overflow-x-auto mx-auto px-3 justify-center items-center">
				{labels.map(({ label }, index) => (
					<p key={index} onClick={() => setActiveTab(index)} className={`pb-2 font-bold border-b-2 px-6 whitespace-nowrap py-8 ${activeTab === index ? "border-b-primary" : "border-b-secondary"}`}>
						{label}
					</p>
				))}
			</div>
			<div className="mx-auto grid md:grid-cols-3 max-md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 justify-center items-center w-full max-w-7xl">
				{labels[labels.findIndex((_, index) => index === activeTab)].items.map((item, index) => (
					<div key={index} className="w-full h-[200px] border border-[#01B1AE] rounded-[1.5rem] div-gradient flex justify-center items-center flex-col space-y-1">

					</div>
				))}
			</div>
		</div>



	)
}
