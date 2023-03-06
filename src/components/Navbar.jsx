import React from "react";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";

function Navbar() {
	return (
		<div className="navbar">
			<div className="nav">
				<div className="brand-name">CaseCraft</div>
				<div className="contanct">
					<div className="gh">
						<div className="logo">
							<AiFillGithub />
						</div>
						<div className="name">Github</div>
					</div>
					<div className="gh">
						<div className="logo">
							<AiFillPhone />
						</div>
						<div className="name">Contact</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
