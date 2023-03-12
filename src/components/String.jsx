import React, { useState } from "react";
import { AiFillCopy } from "react-icons/ai";

function StringGenerator() {
	const [stringLength, setStringLength] = useState(" ");
	const [numStrings, setNumStrings] = useState(" ");
	const [includeLowercase, setIncludeLowercase] = useState(true);
	const [includeUppercase, setIncludeUppercase] = useState(true);
	const [separator, setSeparator] = useState(" ");
	const [includeNumeric, setIncludeNumeric] = useState(false);
	const [includeSpecial, setIncludeSpecial] = useState(false);
	const [generatedStrings, setGeneratedStrings] = useState(null);
	const [isGenerating, setIsGenerating] = useState(false);
	const [error, setError] = useState(null);

	const handleStringLengthChange = (e) => {
		setStringLength(e.target.value);
	};

	const handleNumStringsChange = (e) => {
		setNumStrings(e.target.value);
	};

	const handleIncludeLowercaseChange = (e) => {
		setIncludeLowercase(e.target.checked);
	};

	const handleSeparatorChange = (e) => {
		setSeparator(e.target.value);
	};

	const handleIncludeUppercaseChange = (e) => {
		setIncludeUppercase(e.target.checked);
	};

	const handleIncludeNumericChange = (e) => {
		setIncludeNumeric(e.target.checked);
	};

	const handleIncludeSpecialChange = (e) => {
		setIncludeSpecial(e.target.checked);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setGeneratedStrings

		setIsGenerating(true);

		// validate input values
		if (
			isNaN(parseInt(stringLength)) ||
			isNaN(parseInt(numStrings))
		) {
			setError("Invalid input value. Please enter a valid integer value.");
			setIsGenerating(false);
			return;
		}

		if (parseInt(stringLength) <= 0 || parseInt(numStrings) <= 0) {
			setError("Number of elements should be a positive integer.");
			setIsGenerating(false);
			return;
		}

		// generate strings
		const strings = [];
		const possibleChars = [];
		let sep = separator.trim();
		if (sep == "") {
			sep = " ";
		}
		if (includeLowercase) possibleChars.push("abcdefghijklmnopqrstuvwxyz");
		if (includeUppercase) possibleChars.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
		if (includeNumeric) possibleChars.push("0123456789");
		if (includeSpecial) possibleChars.push("~!@#$%^&*()_+-=[]{}|;':\",./<>?");
		const numPossibleChars = possibleChars.length;

		for (let i = 0; i < numStrings; i++) {
			let newString = "";
			for (let j = 0; j < stringLength; j++) {
				const charSetIndex = Math.floor(Math.random() * numPossibleChars);
				const charSet = possibleChars[charSetIndex];
				const charIndex = Math.floor(Math.random() * charSet.length);
				newString += charSet.charAt(charIndex);
			}
			if (i > 0) {
				strings[i - 1] += sep;
			}
			strings.push(newString);
		}

		setGeneratedStrings(strings);
		setIsGenerating(false);
	};

	function handleCopyClick() {
		const stringToCopy = generatedStrings.join("\n");
		navigator.clipboard.writeText(stringToCopy);
	}

	return (
		<div className="md:flex justify-center items-center">
			<div className="mini-container w-screen max-w-[720px]">
				<div className="flex-col justify-center items-center">
					<div className="array-form p-4">
						<form onSubmit={handleSubmit} className="flex-col space-y-4">
							<div className="space-x-2 md:text-2xl md:space-x-6 text-sm flex justify-between items-center">
								<label className="text-gray-700" htmlFor="numStrings">
									Number of Strings:
								</label>
								<input
									className="rounded-md focus:outline-sky-800 outline-offset-2 text-cyan-800 text-center"
									type="number"
									id="numStrings"
									name="numStrings"
									value={numStrings}
									onChange={handleNumStringsChange}
									required
								/>
							</div>
							<div className="space-x-2 md:text-2xl md:space-x-6 text-sm flex justify-between items-center">
								<label className="text-gray-700" htmlFor="stringLength">
									String Length:
								</label>
								<input
									className="rounded-md focus:outline-sky-800 outline-offset-2 text-cyan-800 text-center"
									type="number"
									id="stringLength"
									name="stringLength"
									value={stringLength}
									onChange={handleStringLengthChange}
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
								/>
							</div>
							<div className="space-y-2 md:text-2xl text-sm flex-col justify-center items-center">
								<label className="text-gray-700">Character Type:</label>
								<div className="flex justify-center items-center space-x-4">
								<div className="space-x-2 flex items-center">
									<input
										type="checkbox"
										id="lowercase"
										name="lowercase"
										checked={includeLowercase}
										onChange={handleIncludeLowercaseChange}
									/>
									<label className="text-gray-700" htmlFor="lowercase">
										Lowercase
									</label>
								</div>
								<div className="space-x-2 flex items-center">
									<input
										type="checkbox"
										id="uppercase"
										name="uppercase"
										checked={includeUppercase}
										onChange={handleIncludeUppercaseChange}
									/>
									<label className="text-gray-700" htmlFor="uppercase">
										Uppercase
									</label>
								</div>
								<div className="space-x-2 flex items-center">
									<input
										type="checkbox"
										id="numeric"
										name="numeric"
										checked={includeNumeric}
										onChange={handleIncludeNumericChange}
									/>
									<label className="text-gray-700" htmlFor="numeric">
										Numeric
									</label>
								</div>
								<div className="space-x-2 flex items-center">
									<input
										type="checkbox"
										id="special"
										name="special"
										checked={includeSpecial}
										onChange={handleIncludeSpecialChange}
									/>
									<label className="text-gray-700" htmlFor="special">
										Special
									</label>
								</div>
								</div>
							</div>
							
							<button
								type="submit"
								className="text-sky-800 text-xl text-center border-2 border-sky-800 md:w-full rounded-lg p-2 focus:shadow-xl active:shadow-sm  active:text-gray-200 active:bg-sky-800 select-none w-full "
							>
								Generate Strings
							</button>
						</form>
					</div>
					{generatedStrings && (
						<div className="result p-4">
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
								{error ? error : generatedStrings.join(" ")}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>)
};
export default StringGenerator;
