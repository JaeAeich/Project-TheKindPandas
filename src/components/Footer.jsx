import React from "react";
import Typed from "react-typed";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
	return (
		<div className="footer flex justify-center items-center w-full bg-cyan-800 p-4 bottom-0 absolute mx-auto">
			<div className="contain flex space-x-2">
				<div className="text">Made</div>
				<Typed
					className="text-cyan-400"
					strings={[`with 💗`, "Jae Aeich", "Sooraj Reddy", "JV Aditya"]}
					typeSpeed={40}
					backSpeed={50}
					attr="placeholder"
					loop
				>
					<input type="text" className="bg-cyan-800 text-cyan-800" />
				</Typed>
			</div>
		</div>
	);
}

export default Footer;
