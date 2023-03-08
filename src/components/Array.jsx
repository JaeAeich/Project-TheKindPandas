import React, { useState } from "react";

function Array() {
	const [upperBound, setUpperBound] = useState("");
	const [ansFlag, setAnsFlag] = useState(false);
	const [lowerBound, setLowerBound] = useState("");
	const [numElements, setNumElements] = useState("");
	const [separator, setSeparator] = useState(",");
	const [numVectors, setNumVectors] = useState("");
	const [vectorType, setVectorType] = useState("column");

	const handleUpperBoundChange = (e) => {
		setUpperBound(e.target.value);
	};

	const handleLowerBoundChange = (e) => {
		setLowerBound(e.target.value);
	};

	const handleNumElementsChange = (e) => {
		setNumElements(e.target.value);
	};

	const handleSeparatorChange = (e) => {
		setSeparator(e.target.value);
	};

	const handleNumVectorsChange = (e) => {
		setNumVectors(e.target.value);
	};

	const handleVectorTypeChange = (e) => {
		setVectorType(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// logic :TODO
		setAnsFlag(true);
	};

	return (
		<div className=" md:flex justify-center items-center">
			<div className="mini-container w-screen max-w-[720px] ">
				<div className="flex-col  justify-center items-center">
					<div className="array-form p-4">
						<form onSubmit={handleSubmit} className="flex-col space-y-4">
							<div className="space-x-2 md:text-2xl md:space-x-6  text-sm flex justify-between items-center">
								<label className="text-gray-700" htmlFor="upperBound">
									Upper Bound:
								</label>
								<input
									className="rounded-md focus:outline-sky-800 outline-offset-2 text-cyan-800 text-center "
									type="number"
									id="upperBound"
									name="upperBound"
									value={upperBound}
									onChange={handleUpperBoundChange}
									required
								/>
							</div>
							<div className="space-x-2 md:text-2xl md:space-x-6  text-sm flex justify-between items-center">
								<label className="text-gray-700" htmlFor="lowerBound">
									Lower Bound:
								</label>
								<input
									className="rounded-md focus:outline-sky-800 outline-offset-2 text-cyan-800 text-center"
									type="number"
									id="lowerBound"
									name="lowerBound"
									value={lowerBound}
									onChange={handleLowerBoundChange}
									required
								/>
							</div>
							<div className="space-x-2 md:text-2xl md:space-x-6  text-sm flex justify-between items-center">
								<label className="text-gray-700" htmlFor="numElements">
									Number of Elements:
								</label>
								<input
									className="rounded-md focus:outline-sky-800 outline-offset-2 text-cyan-800 text-center"
									type="number"
									id="numElements"
									name="numElements"
									value={numElements}
									onChange={handleNumElementsChange}
									required
								/>
							</div>
							<div className="space-x-2 md:text-2xl md:space-x-6  text-sm flex justify-between items-center">
								<label className="text-gray-700" htmlFor="separator">
									Separator:
								</label>
								<input
									className="rounded-md focus:outline-sky-800 outline-offset-2 text-cyan-800 text-center"
									type="text"
									id="separator"
									name="separator"
									value={separator}
									onChange={handleSeparatorChange}
									required
								/>
							</div>
							<div className="space-x-2 md:text-2xl md:space-x-6  text-sm flex justify-between items-center">
								<label className="text-gray-700" htmlFor="numVectors">
									Number of Vectors:
								</label>
								<input
									className="rounded-md focus:outline-sky-800 outline-offset-2 text-cyan-800 text-center"
									type="number"
									id="numVectors"
									name="numVectors"
									value={numVectors}
									onChange={handleNumVectorsChange}
									required
								/>
							</div>
							<div className="flex justify-start items-center space-x-4">
								<div className="flex justify-center items-center space-x-2">
									<label className="text-gray-700 text-xs md:text-lg  ">
										Column Vector
									</label>
									<input
										className="accent-cyan-800   "
										type="radio"
										name="vectorType"
										value="column"
										checked={vectorType === "column"}
										onChange={handleVectorTypeChange}
									/>
								</div>
								<div className="flex justify-center items-center space-x-2">
									<label className="text-xs md:text-lg text-gray-700 ">
										Row Vector
									</label>
									<input
										className="accent-cyan-800   "
										type="radio"
										checked={vectorType === "row"}
										name="vectorType"
										value="row"
										onChange={handleVectorTypeChange}
									/>
								</div>
							</div>
							<button
								type="submit"
								className="text-sky-800 text-xl text-center border-2 border-sky-800 rounded-lg p-2 focus:shadow-xl active:shadow-sm  active:text-gray-200 active:bg-sky-800 select-none w-full md:w-auto"
							>
								Generate Array
							</button>
						</form>
					</div>
					{ansFlag && (
						<div className="answer max-w-[720p] mx-auto p-2">
							<div className="ans border-2 border-sky-800 p-2 rounded-lg ">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
								aliquid maiores dolorem molestias numquam ut nesciunt
								necessitatibus quod earum quidem natus fugit ducimus commodi
								consequuntur eveniet nisi illum non tenetur.
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Array;
