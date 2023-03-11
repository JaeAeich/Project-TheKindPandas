import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Javed from "./images/Javed.jpg";
import JV from "./images/JV.jpeg";
import Sooraj from "./images/Sooraj.jpg";

function Contact() {
	return (
		<div className="pb-40 bg-gray-200">
				<div className="flex justify-center text-2xl md:text-4xl  pt-5 font-bold bg-gradient-to-r from-sky-900 via-sky-500 to-cyan-600 text-sky-800 bg-clip-text p-2">

				The Founding Fathers
			</div>
			<div className="group flex flex-col md:flex-row justify-center items-center mx-20 my-10  ">
				<div className="card text-sky-800 text-xl text-center border-2 border-sky-800  rounded-lg p-2 focus:shadow-xl pt-3 md:pb-10 m-5 w-fit hover:scale-105 hover:shadow-2xl hover:border-cyan-800 hover:transition hover:duration-300 ">
					<div className="Javed">
						<div className="Image flex justify-center ">
							<img
								className="rounded-full w-96 md:p-10 p-4"
								src={Javed}
								alt="Here lies Javed"
							/>
						</div>
						<div className="Name text-sky-800 ">Javed Habib</div>
						<div className="Socials flex justify-center items-center space-x-5 pt-3">
							<div
								className="gh flex items-center space-x-1 cursor-pointer"
								onClick={() =>
									window.open("https://github.com/JaeAeich", "_blank")
								}
							>
								<div className="logo text-sky-800">
									<AiFillGithub />
								</div>
							</div>
							<div
								className="gh flex items-center space-x-1 cursor-pointer"
								onClick={() =>
									window.open(
										"https://www.linkedin.com/in/javed-habib/",
										"_blank"
									)
								}
							>
								<div className="logo text-sky-800">
									<AiFillLinkedin />
								</div>
							</div>
							<button
								className="gh flex items-center space-x-1 cursor-pointer"
								onClick={() =>
									(window.location.href = "mailto:jh4official@gmail.com")
								}
							>
								<div className="logo text-sky-800">
									<AiFillMail />
								</div>
							</button>
						</div>
					</div>
				</div>
				<div className="card text-sky-800 text-xl text-center border-2 border-sky-800 rounded-lg p-2 focus:shadow-xl  pt-3 md:pb-10 m-5 hover:scale-105 hover:shadow-2xl hover:border-cyan-800 hover:transition hover:duration-300 ">
					<div className="JV">
						<div className="Image flex justify-center">
							<img
								className="rounded-full w-96 md:p-10 p-4"
								src={JV}
								alt="Here lies JV"
							/>
						</div>
						<div className="Name text-sky-800 ">JV Aditya</div>
						<div className="Socials flex justify-center items-center space-x-5 pt-3">
							<div
								className="gh flex items-center space-x-1 cursor-pointer"
								onClick={() =>
									window.open("https://github.com/JaeAeich", "_blank")
								}
							>
								<div className="logo text-sky-800">
									<AiFillGithub />
								</div>
							</div>
							<div
								className="gh flex items-center space-x-1 cursor-pointer"
								onClick={() =>
									window.open(
										"https://www.linkedin.com/in/aditya-jv-b51110248/",
										"_blank"
									)
								}
							>
								<div className="logo text-sky-800">
									<AiFillLinkedin />
								</div>
							</div>
							<button
								className="gh flex items-center space-x-1 cursor-pointer"
								onClick={() =>
									(window.location.href =
										"mailto:josyulavenkata@iitbhilai.ac.in")
								}
							>
								<div className="logo text-sky-800">
									<AiFillMail />
								</div>
							</button>
						</div>
					</div>
				</div>
				<div className="card text-sky-800 text-xl text-center border-2 border-sky-800 rounded-lg p-2 focus:shadow-xl pt-3 md:pb-10 m-5 hover:scale-105 hover:shadow-2xl hover:border-cyan-800 hover:transition hover:duration-300 ">
					<div className="Sooraj">
						<div className="Image flex justify-center">
							<img
								className="rounded-full w-96 md:p-10 p-4"
								src={Sooraj}
								alt="Here lies Javed"
							/>
						</div>
						<div className="Name text-sky-800 ">Sooraj Reddy</div>
						<div className="Socials flex justify-center items-center space-x-5 pt-3">
							<div
								className="gh flex items-center space-x-1 cursor-pointer"
								onClick={() =>
									window.open("https://github.com/sooraj-reddy", "_blank")
								}
							>
								<div className="logo text-sky-800">
									<AiFillGithub />
								</div>
							</div>
							<div
								className="gh flex items-center space-x-1 cursor-pointer"
								onClick={() =>
									window.open(
										"https://www.linkedin.com/in/sooraj-reddy-077848234/",
										"_blank"
									)
								}
							>
								<div className="logo text-sky-800">
									<AiFillLinkedin />
								</div>
							</div>
							<button
								className="gh flex items-center space-x-1 cursor-pointer"
								onClick={() =>
									(window.location.href = "mailto:mvsksuraj@gmail.com")
								}
							>
								<div className="logo text-sky-800">
									<AiFillMail />
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
