import Link from "next/link";

export default function Home() {
	return <header
		className="relative flex items-center h-[80vh] mb-12 overflow-hidden"
	>
		<div
			className="relative z-30 p-20 max-sm:p-2 w-full flex flex-col gap-y-3"
		>
			<div className="max-w-3xl flex flex-col gap-y-3">
				<h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl">
					A BUSINESS-MINDED AGENCY
				</h1>
				<h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
					+ CREATIVE POWERHOUSE
				</h1>
			</div>
			<p className="scroll-m-20 text-2xl font-semibold tracking-tight max-w-2xl">
				A masterful team that executes every engagement
				precision, prowess, and power.
				<br />
				Disruption is in our DNA.
			</p>
			<Link href="#" className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">CHECK OUT OUR WORK →</Link>
		</div>
		<video
			autoPlay
			loop
			muted
			className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
		>
			<source
				src="/videos/hero.mp4"
				type="video/mp4"
			/>
			Your browser does not support the video tag.
		</video>
	</header>;
}
