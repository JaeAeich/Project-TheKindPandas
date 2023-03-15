import React, { useEffect, useState } from "react";
import { AiFillCopy } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDraw } from "react-icons/md";
import { Link } from "react-router-dom";
import GraphVis from "./GraphVis";

function RandomGraph() {
	const [numNodes, setNumNodes] = useState();
	const [numEdges, setNumEdges] = useState();
	const [numCoordinates, setNumCoordinates] = useState("");
	const [pair, setPair] = useState([]);
	// const [closeGraph, setCloseGraph] = useState(true);
	const [openGraph, setOpenGraph] = useState(false);
	const [error, setError] = useState(null);
	// const [ansFlag, setAnsFlag] = useState(false);

	

	const handlesetNumNodes = (e) => setNumNodes(e.target.value);
	const handlesetNumEdges = (e) => setNumEdges(e.target.value);
	const handlesetNumCoordinates = (e) => setNumCoordinates(e.target.value);
	const handleCloseGraph = (e) => {
		if (openGraph) {
			setOpenGraph(false);
		}
	};
	const handleOpenGraph = (e) => {
		setOpenGraph(true);
	};
	// if (
	//     isNaN(parseInt(numNodes))||
	//     isNaN(parseInt(numEdges))
	// ) {
	//   setError("Invalid input value. Please enter a valid integer value.");
	//   return;
	// }
	function generateGraph(e) {
		e.preventDefault();

		console.log(numCoordinates)

		// Check for valid input values
		if (
			numNodes <= 0 ||
			numCoordinates == "" 
		) {
			alert("No directed graph can be formed!");
			return;
		}

		const nodes = [];
		// Generate nodes
		for (let i = 1; i <= numNodes; i++) {
			nodes.push({ id: i, label: `Node ${i}` });
		}
		const pairs = [];
		for(let i=0; i< 4*numEdges; i=i+4){
			if (
	    isNaN(parseInt(numCoordinates[i]))||
	    isNaN(parseInt(numCoordinates[i+2]))
			) {
	  setError("Invalid input value. Please enter a valid integer value.");
	  break;
	}
				
				pairs.push(numCoordinates.slice(i,i+3));
			}
			console.log(pairs);
			setPair(pairs);

		// // Set graph data
		// setGraphData({ nodes: nodes, edges: numCoordinates });
		// renderPairs();
	}
	
	function handleCopyClick() {
		navigator.clipboard.writeText(pair);
	}

	return (
		<div
			className="flex justify-center items-center bg-gray-200 w-screen overflow-hidden"
			onClick={handleCloseGraph}
		>
			<div
				className={
					openGraph
						? "mini-container w-screen max-w-[720px] blur-sm"
						: "mini-container w-screen max-w-[720px]"
				}
			>
				<div className="flex-col  justify-center items-center">
					<div className="graph-form p-4">
						<form onSubmit={generateGraph} className="flex-col space-y-4">
							<div className="space-x-2 md:text-2xl md:space-x-6  text-sm flex justify-between items-center">
								<label className="text-gray-700" htmlFor="numNodes">
									Number of nodes:
								</label>
								<input
									className="rounded-md focus:outline-sky-800 outline-offset-2 text-cyan-800 text-center "
									type="number"
									value={numNodes}
									onChange={handlesetNumNodes}
									required
								/>
							</div>
							<div className="space-x-2 md:text-2xl md:space-x-6  text-sm flex justify-between items-center">
								<label className="text-gray-700" htmlFor="numEdges">
									Number of edges:
								</label>
								<input
									className="rounded-md focus:outline-sky-800 outline-offset-2 text-cyan-800 text-center "
									type="number"
									value={numEdges}
									onChange={handlesetNumEdges}
									required
								/>
							</div>
							<div className="space-x-2 md:text-2xl md:space-x-6  text-sm flex justify-between items-center">
								<label className="text-gray-700" htmlFor="numEdges">
									Graph coordinates: 
								</label>
								<input
									className="rounded-md focus:outline-sky-800 outline-offset-2 text-cyan-800 text-center "
									type="text"
									value={numCoordinates}
									onChange={handlesetNumCoordinates}
									required
								/>
							</div>
							<div className="text-cyan-800">
							<p>The format for filling the graph coordinates:<br></br>In case of [[1,1],[2,2]] is "1 1(%)2 2" where " is null character and (%) is any character.</p>
							</div>
							<button
								type="submit"
								className="text-sky-800 text-xl text-center border-2 border-sky-800 md:w-full rounded-lg p-2 focus:shadow-xl active:shadow-sm  active:text-gray-200 active:bg-sky-800 select-none w-full "
								onClick={handleOpenGraph}>
								Generate graph
							</button>
							
						</form>
					</div>
				</div>
			</div>
			<div
				className={
					openGraph
						? "absolute w-full z-10 h-full top-4 flex justify-center items-center"
						: "hidden"
				}
			>
				{openGraph && (
					<div className="flex justify-center items-center w-full h-full p-2  rounded-lg hover:scale-110 duration-300">
						<GraphVis pair={pair} numNodes={numNodes} />
						
					</div>
				)}
			</div>
		</div>
	);
}

export default RandomGraph;
