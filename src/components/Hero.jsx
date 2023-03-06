import React from "react";

function Hero() {
	return (
		<div className="hero flex justify-center items-center p-4 bg-gradient-to-t ">
			<div className="contain flex-col md:mt-8 max-w-[840] space-y-8">
				<div className="text text-xs font-thin flex justify-center md:text-2xl font-sans">
					Are you fed up of writing testcases for you coding competition?
				</div>
				<div className="flex justify-center text-3xl  md:text-8xl text-cyan-800 ">
					Generate Case On Go
				</div>
				<div className="text w-screen text-gray-200 flex justify-center font-light bg-cyan-800 p-4">
					<div className="text max-w-[720px] text-center md:py-16 ">
						For times when you wanna leave a codes logic on the leap of faith
						and just bombard it with edge definining testcases , so long , so
						random that even question setter questions their life thinking how
						you bypassed logic writting with an uncanny technique, will this
						help you on the long run, well TBH not at all, but is this app cool
						.... HELL YEAH! so click on the buttons below you .
					</div>
				</div>
				<div className="button w-full flex space-x-2 justify-center items-center">
					<div className="Array md:text-3xl md:px-6 border-sky-800 rounded-xl border p-2 text-sky-800 hover:shadow-xl active:shadow-md select-none active:text-sky-600">
						Array
					</div>
					<div className="string md:text-3xl md:px-6 border-sky-800 rounded-xl border p-2 text-sky-800 hover:shadow-xl active:shadow-md select-none active:text-sky-600">
						String
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
