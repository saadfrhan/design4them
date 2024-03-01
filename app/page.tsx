import Header from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight as ArrowCircleRight } from "react-icons/fa";

export default function Home() {
	return <div>
		<Header />
		<section className="w-full bg-black-bg bg-no-repeat grid grid-cols-4 mx-auto max-w-7xl">
			<Card className="p-0 w-fit">
				<CardContent className="p-3">
					<div className="flex gap-2 items-center">
						<ArrowCircleRight className="w-4 h-4" /> Cliento-Ordination And Support
					</div>
					<div className="flex gap-2 items-center">
						<ArrowCircleRight className="w-4 h-4" /> Client Co-Ordination And Support
					</div>
					<div className="flex gap-2 items-center">
						<ArrowCircleRight className="w-4 h-4" /> Client Co-Ordination And Support
					</div>
					<div className="flex gap-2 items-center">
						<ArrowCircleRight className="w-4 h-4" /> Client Co-Ordination And Support
					</div>
					<div className="flex gap-2 items-center">
						<ArrowCircleRight className="w-4 h-4" /> Client Co-Ordination And Support
					</div>
				</CardContent>
			</Card>
			<div className="flex justify-center items-center flex-col gap-y-2">
				<Image src="/images/logo-design.png" width="100" height="100" alt="logo" />
			</div>
		</section>
	</div>;
}
