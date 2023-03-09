import React from "react";

function NoPage() {
	return (
		<div className="w-screen flex justify-center items-center">
			<div className="mini-container">
				<div className="heading text-cyan-800 text-5xl md:text-8xl font-bold flex justify-center p-8 mt-16 ">
					404 Error
				</div>
				<div className="text text-cyan-800 text-sm md:text-3xl flex justify-center">
					Page Not found
				</div>
			</div>
		</div>
	);
}

export default NoPage;
