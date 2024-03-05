import ActionButton from "@/components/action-button";
import Header from "@/components/header";
import TabsWithFlexGrid from "@/components/tabs-with-flex-grid";
import TabsWithFlexGrid2 from "@/components/tabs-with-flex-grid2";
import { Card, CardContent } from "@/components/ui/card";
import { labels, plans, qualities } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight as ArrowCircleRight } from "react-icons/fa";

export default function Home() {
	return (
		<div>
			<Header />
			<section className="w-full bg-black-bg bg-no-repeat bg-cover py-6">
				<div className="max-w-7xl mx-auto grid grid-cols-[1fr_2fr] max-lg:grid-cols-1 px-4 gap-x-16">
					<Card className="p-0 w-full">
						<CardContent className="p-6 space-y-3">
							<div className="flex gap-2 items-center">
								<ArrowCircleRight className="w-4 h-4" /> Cliento Co-Ordination
								And Support
							</div>
							<div className="flex gap-2 items-center">
								<ArrowCircleRight className="w-4 h-4" /> Customer Satisfaction
							</div>
							<div className="flex gap-2 items-center">
								<ArrowCircleRight className="w-4 h-4" /> Ownership Rights
							</div>
							<div className="flex gap-2 items-center">
								<ArrowCircleRight className="w-4 h-4" /> Experienced
								Professionals
							</div>
							<div className="flex gap-2 items-center">
								<ArrowCircleRight className="w-4 h-4" /> Money Back Guarantee
							</div>
						</CardContent>
					</Card>
					<div className="flex flex-wrap max-sm:justify-center justify-around mt-7 px-4 gap-5 max-lg:py-4">
						<div className="flex justify-center items-center flex-col gap-4">
							<Image
								src="/images/logo-design.svg"
								className="max-lg:w-32 max-lg:h-32"
								width="80"
								height="80"
								alt="logo"
							/>
							<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center">
								5436+
							</h2>
							<p className="text-base text-center">
								Logo <br /> Designs
							</p>
						</div>
						<div className="flex justify-center items-center flex-col gap-y-2">
							<Image
								src="/images/web.svg"
								className="max-lg:w-32 max-lg:h-32"
								width="80"
								height="80"
								alt="logo"
							/>
							<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center">
								285+
							</h2>
							<p className="text-base text-center">
								Web Design <br /> & Development
							</p>
						</div>
						<div className="flex justify-center items-center flex-col gap-y-2">
							<Image
								src="/images/branding.svg"
								className="max-lg:w-32 max-lg:h-32"
								width="80"
								height="80"
								alt="logo"
							/>
							<h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center">
								1119+
							</h2>
							<p className="text-base text-center">
								Branding <br /> Solutions Provided
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full bg-three-bg bg-no-repeat bg-cover py-8">
				<div className="text-center max-w-4xl pb-8 mx-auto px-4">
					<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
						What do you need designed?
					</h3>
					<p>
						We cater to each and every design need that you may have. Good
						Design is known to create impact, evoke emotions and create a
						certain sense of loyalty. Design works in wondrous ways to boost the
						look and growth of your business and we are more than willing to
						provide you with design that serves the purpose.
					</p>
				</div>
				<div className="flex flex-wrap w-full justify-between max-md:justify-center max-md:gap-5 max-w-7xl mx-auto px-4 place-content-center">
					<div className="rounded-full border-primary border-2 h-40 w-40 max-md:h-52 max-md:w-52 text-center flex flex-col justify-center items-center bg-primary text-background">
						<Image
							src="/images/logo-design-2.svg"
							alt="Logo Design"
							className="px-4 pt-4 text-white max-md:p-0 max-md:w-[110px] max-md:h-[110px]"
							width="100"
							height="100"
						/>
						<p className="px-4 pb-4 pt-2 max-md:p-0 text-xs max-md:text-base">Logo Design</p>
					</div>
					<div className="rounded-full border-primary border-2 h-40 w-40 max-md:h-52 max-md:w-52 text-center flex flex-col justify-center items-center bg-primary text-background">
						<Image
							src="/images/branding-2.svg"
							alt="Logo Design"
							className="px-4 pt-4 max-md:p-0 text-white max-md:w-[110px] max-md:h-[110px]"
							width="100"
							height="100"
						/>
						<p className="px-4 pb-4 pt-2 max-md:p-0 text-xs max-md:text-base">Branding Services</p>
					</div>
					<div className="rounded-full border-primary border-2 h-40 w-40 max-md:h-52 max-md:w-52 text-center flex flex-col justify-center items-center bg-primary text-background gap-y-4">
						<Image
							src="/images/animation.svg"
							alt="Logo Design"
							className="px-4 pt-4 max-md:p-0 text-white max-md:w-[110px] max-md:h-[110px]"
							width="100"
							height="100"
						/>
						<p className="px-4 pb-4 pt-2 max-md:p-0 text-xs max-md:text-base">Video Animation <br /> Services</p>
					</div>
					<div className="rounded-full border-primary border-2 h-40 w-40 max-md:h-52 max-md:w-52 text-center flex flex-col justify-center items-center bg-primary text-background ">
						<Image
							src="/images/web-2.svg"
							alt="Logo Design"
							className="px-4 pt-4 max-md:p-0 text-white max-md:w-[110px] max-md:h-[110px]"
							width="100"
							height="100"
						/>
						<p className="px-4 pb-4 max-md:p-0 text-xs max-md:text-base">
							Website Design <br /> & Development
						</p>
					</div>
					<div className="rounded-full border-primary border-2 h-40 w-40 max-md:h-52 max-md:w-52 text-center flex flex-col justify-center items-center bg-primary text-background">
						<Image
							src="/images/mobile.svg"
							alt="Logo Design"
							className="px-4 pt-4 max-md:p-0 text-white max-md:w-[110px] max-md:h-[110px]"
							width="100"
							height="100"
						/>
						<p className="px-4 pb-4 pt-2 max-md:p-0 text-xs max-md:text-base">Mobile App <br /> Development</p>
					</div>
				</div>
				<div className="grid grid-cols-2 max-[950px]:grid-cols-1 max-w-7xl mx-auto w-full">
					<div className="space-y-3 md:py-16 pt-8 pb-4 px-4">
						<h3 className="scroll-m-20 text-2xl text-primary font-semibold tracking-tight">
							Logo designing at its Absolute Best
						</h3>
						<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
							Brand Logo’s create Brand Identity
						</h3>
						<p>
							We believe in creating brand identity through our brand logos. These
							logos are created by professionals with considerable experience,
							skill and qualification at rates that suit your pocket. These
							professionals ensure the logo settles with the brand theory and
							business idea and works only to enhance the purpose of branding.
						</p>
						<div className="space-y-2">
							<div className="flex gap-2 items-center">
								<ArrowCircleRight className="w-4 h-4 text-primary" /> Monogram logos (or
								lettermarks)
							</div>
							<div className="flex gap-2 items-center">
								<ArrowCircleRight className="w-4 h-4 text-primary" /> Pictorial marks (or
								logo symbols)
							</div>
							<div className="flex gap-2 items-center">
								<ArrowCircleRight className="w-4 h-4 text-primary" /> Mascots
							</div>
							<div className="flex gap-2 items-center">
								<ArrowCircleRight className="w-4 h-4 text-primary" /> The emblem
							</div>
							<div className="flex gap-2 items-center">
								<ArrowCircleRight className="w-4 h-4 text-primary" /> Wordmarks (or
								logotypes)
							</div>
							<div className="flex gap-2 items-center">
								<ArrowCircleRight className="w-4 h-4 text-primary" /> Abstract logo marks
							</div>
						</div>
						<ActionButton label="VIEW LOGO PACKAGES" />
					</div>
					<Image
						src="/images/Component-11.gif"
						alt="Component 11"
						width="250"
						height="250"
						className="w-full h-full"
					/>
				</div>
			</section>
			<section className="flex bg-previous-work bg-no-repeat bg-cover py-6 w-full">
				<div className="text-center max-w-4xl pb-8 mx-auto px-4">
					<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
						We have done a lot of work and we would <br />
						like for you to take a look!
					</h3>
					<p>
						Here’s a portfolio made out of hard work, skill and passion
					</p>
					<TabsWithFlexGrid
						labels={labels}
					/>
				</div>
			</section>
			<div className="bg-call-bg px-7 pt-10 pb-8">
				<div className="grid grid-cols-2 max-md:grid-cols-1 mx-auto max-w-7xl gap-5">
					<div className="max-w-[34rem] font-bold mx-auto">
						<p>
							Design4Them is determined to provide exceptional branding, website
							and digital marketing solutions to business and brands. We help you
							create your brand. <Link href="#" className="hover:underline">Let’s create brands that build businesses.</Link>
						</p>
					</div>
					<div className="flex justify-center items-center flex-col">
						<p>Give us a call:</p>
						<Link href="tel:(647) 495-6338" className="scroll-m-20 text-xl font-semibold tracking-tight">(647) 495-6338</Link>
					</div>
				</div>
			</div>
			<div className="p-8 text-center space-y-6">
				<div className="bg-quality space-y-4">
					<div className="mx-auto max-w-[43rem] space-y-3">
						<h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
							Size of your business doesn’t matter at Design4Them. For us,
							it is the simple idea that lets us help you develop an identity
							through magnificent design and appropriate marketing.
						</h2>
						<p className="max-w-[36rem]">
							Businesses worldwide have benefited from our services as we progressed with them, step by step,
							into creating the brand of their dreams.
						</p>
					</div>
					<div className="mx-auto grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 gap-6 justify-center items-center w-full max-w-7xl">
						{qualities.map((quality, index) => {
							const size: {
								width: number | `${number}` | undefined;
								height: number | `${number}` | undefined;
							} = {
								width: index !== 2 ? "50" : "70",
								height: index !== 2 ? "50" : "70"
							}
							return (

								<div key={index} className="w-full h-[200px] border border-[#01B1AE] rounded-[1.5rem] div-gradient flex justify-center items-center flex-col space-y-1">
									<Image src={`/images/qualities/${index}.svg`} alt={quality.title} {...size} />
									<div>
										<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{quality.title}</h3>
										<p className="scroll-m-20 text-xl font-semibold tracking-tight">{quality.helper}</p>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<section className="flex bg-pricing py-6 w-full">
				<div className="text-center max-w-4xl pb-8 mx-auto px-4">
					<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
						What is going to be the Cost?
					</h3>
					<p>
						We like to serve the industry with persuasive and conceptual designs that rock the market. <br />
						Creating an impact is what we do best and what we like to provide to every client with our pocket-friendly packages.
					</p>
					<TabsWithFlexGrid2
						labels={plans}
					/>
				</div>
			</section>
		</div>
	);
}
