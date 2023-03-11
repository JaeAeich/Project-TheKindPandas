import React, { useState } from "react";
import { AiFillCopy } from "react-icons/ai";

function Array() {
	const [upperBound, setUpperBound] = useState("");
	const [ansFlag, setAnsFlag] = useState(false);
	const [lowerBound, setLowerBound] = useState("");
	const [numElements, setNumElements] = useState("");
	const [separator, setSeparator] = useState(",");
	const [numVectors, setNumVectors] = useState(1);
	const [vectorType, setVectorType] = useState("row");
	const [braceType, setbraceType] = useState("  ");
	const [answer, setAnswer] = useState(null);
	const [error, setError] = useState(null);

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
	const handlebraceTypeChange = (e) => {
		setbraceType(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// setAnswer(null);
		// setError(null);

		// validate input values
		if (
			isNaN(parseInt(upperBound)) ||
			isNaN(parseInt(lowerBound)) ||
			isNaN(parseInt(numElements)) ||
			isNaN(parseInt(numVectors))
		) {
			setError("Invalid input value. Please enter a valid integer value.");
			return;
		}
		if (parseInt(upperBound) < parseInt(lowerBound)) {
			setError("Upper bound should be greater than or equal to lower bound.");
			return;
		}
		if (parseInt(numElements) <= 0) {
			setError("Number of elements should be a positive integer.");
			return;
		}
		if (parseInt(numVectors) <= 0) {
			setError("Number of vectors should be a positive integer.");
			return;
		}

		// parse input values
		const upper = parseInt(upperBound);
		const lower = parseInt(lowerBound);
		const n = parseInt(numElements);
		let sep = separator.trim();
		if (sep == "") {
			sep = " ";
		}
		const numVecs = parseInt(numVectors);
		const isRow = vectorType === "row";

		// generate random vector
		const randVecs = [];
		for (let j = 0; j < numVecs; j++) {
			const randVec = [];
			for (let i = 0; i < n; i++) {
				const randNum = Math.floor(Math.random() * (upper - lower + 1) + lower);
				randVec.push(randNum);
			}
			randVecs.push(randVec);
		}
		console.log(randVecs);

		// format vector as string
		let answer = "";
		let bl = braceType[0];
		let br = braceType[1];
		if (isRow) {
			answer = randVecs.map((vec) => bl + vec.join(sep) + br).join(",\n");
		} else {
			answer = randVecs[0]
				.map((_, i) => bl + randVecs.map((vec) => vec[i]).join(sep) + br)
				.join(",\n");
		}

		if (numVecs > 1) {
			answer = bl + answer + br;
		}

		// update answer div
		setAnswer(answer);
		setAnsFlag(true);
	};

	function handleCopyClick() {
		navigator.clipboard.writeText(answer);
	}

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
								/>
							</div>
							<div className="flex justify-start items-center space-x-4">
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
							</div>
							<div className="flex justify-start items-center space-x-4">
								<div className="flex justify-center items-center space-x-2">
									<label className="text-xs md:text-lg text-gray-700 ">
										without braces
									</label>
									<input
										className="accent-cyan-800   "
										type="radio"
										name="braceType"
										value="  "
										checked={braceType === "  "}
										onChange={handlebraceTypeChange}
									/>
								</div>
								<div className="flex justify-center items-center space-x-2">
									<label className="text-gray-700 text-xs md:text-lg  ">
										flower bracket
									</label>
									<input
										className="accent-cyan-800   "
										type="radio"
										name="braceType"
										value="{}"
										checked={braceType === "{}"}
										onChange={handlebraceTypeChange}
									/>
								</div>
								<div className="flex justify-center items-center space-x-2">
									<label className="text-xs md:text-lg text-gray-700 ">
										square bracket
									</label>
									<input
										className="accent-cyan-800   "
										type="radio"
										name="braceType"
										value="[]"
										checked={braceType === "[]"}
										onChange={handlebraceTypeChange}
									/>
								</div>
								<div className="flex justify-center items-center space-x-2">
									<label className="text-gray-700 text-xs md:text-lg  ">
										bracket
									</label>
									<input
										className="accent-cyan-800   "
										type="radio"
										name="braceType"
										value="()"
										checked={braceType === "()"}
										onChange={handlebraceTypeChange}
									/>
								</div>
							</div>

							<button
								type="submit"
								className="text-sky-800 text-xl text-center border-2 border-sky-800 md:w-full rounded-lg p-2 focus:shadow-xl active:shadow-sm  active:text-gray-200 active:bg-sky-800 select-none w-full "
							>
								Generate Array
							</button>
						</form>
					</div>
					{ansFlag && (
						<div className="answer max-w-[720p] mx-auto p-1 select-none">
							<div className="ans border-2 border-sky-800 p-2 rounded-lg overflow-y-scroll max-h-44 overflow-x-hidden break-words">
								<div className="ans-header flex justify-between items-center p-3 text-sky-800 font-bold">
									<div className="text-lg md:text-xl">Answer</div>
									<div
										className="text-xl md:text-2xl border-2 rounded-lg border-sky-800 p-2 hover:shadow-md active:bg-sky-800 active:text-gray-200 active:shadow-2xl"
										onClick={handleCopyClick}
									>
										<AiFillCopy />
									</div>
								</div>
								{error ? error : answer}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Array;
