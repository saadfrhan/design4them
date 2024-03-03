import { Button } from "./ui/button";

export default function ActionButton({
	label
}: {
	label: "LET'S GET STARTED" | "VIEW LOGO PACKAGES"
}) {
	return (
		<Button className=' text-white font-bold py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
			<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] green-linear" />
			<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-primary/50 to-primary/70 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl" >
				{label}
			</span>
		</Button>
	)
}
