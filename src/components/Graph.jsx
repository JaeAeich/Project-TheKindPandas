import React, { useEffect, useState } from "react";
import { AiFillCopy } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineDraw } from "react-icons/md";
import { Link } from "react-router-dom";
import GraphVis from "./GraphVis";

function RandomGraph() {
	const [numNodes, setNumNodes] = useState(5);
	const [numEdges, setNumEdges] = useState(5);
	const [graphData, setGraphData] = useState([]);
	const [pair, setPair] = useState([]);
	// const [closeGraph, setCloseGraph] = useState(true);
	const [openGraph, setOpenGraph] = useState(false);
	// const [error, setError] = useState(null);
	// const [ansFlag, setAnsFlag] = useState(false);

	useEffect(() => {
		renderPairs();
	}, [graphData]);

	const handlesetNumNodes = (e) => setNumNodes(e.target.value);
	const handlesetNumEdges = (e) => setNumEdges(e.target.value);
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

		// Check for valid input values
		if (
			numNodes <= 0 ||
			numEdges <= 0 ||
			numEdges > numNodes * (numNodes - 1)
		) {
			alert("No directed graph can be formed!");
			return;
		}

		const nodes = [];
		const edges = [];

		// Generate nodes
		for (let i = 1; i <= numNodes; i++) {
			nodes.push({ id: i, label: `Node ${i}` });
		}

		// Generate edges
		let count = 0;
		let maxEdges = numNodes * (numNodes - 1);
		while (count < numEdges) {
			if (count >= maxEdges) break; // Stop if max possible edges reached
			const from = Math.floor(Math.random() * numNodes) + 1;
			const to = Math.floor(Math.random() * numNodes) + 1;
			const isDirected = Math.random() < 0.5; // 50% chance of being directed
			if (from !== to) {
				// Check for existing edge between the same nodes
				const existingEdge = edges.find((e) => e.from === from && e.to === to);
				if (!existingEdge) {
					if (isDirected) {
						edges.push({
							from: from,
							to: to,
							arrows: { to: { enabled: true } },
						});
					} else {
						edges.push({ from: from, to: to });
					}
					count++;
				}
			}
		}

		// Set graph data
		setGraphData({ nodes: nodes, edges: edges });
		renderPairs();
	}
	const renderPairs = () => {
		if (!graphData || !graphData.edges) {
			return null;
		}

		const pairs = [];
		for (let i = 0; i < graphData.edges.length; i++) {
			const from = graphData.nodes.find(
				(n) => n.id === graphData.edges[i].from
			);
			const to = graphData.nodes.find((n) => n.id === graphData.edges[i].to);
			pairs.push(`${from.id} ${to.id}`);
		}
    console.log(pairs);
		setPair(pairs);
	};
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
							<button
								type="submit"
								className="text-sky-800 text-xl text-center border-2 border-sky-800 md:w-full rounded-lg p-2 focus:shadow-xl active:shadow-sm  active:text-gray-200 active:bg-sky-800 select-none w-full "
							>
								Generate graph
							</button>

							<Link to="/CustomGraph">
								<div className="mt-2 relative text-sky-800 text-xl text-center border-2 border-sky-800 md:w-full rounded-lg p-2 focus:shadow-xl active:shadow-sm  active:text-gray-200 active:bg-sky-800 select-none w-full animate-pulse  ">
									<span className="absolute top-0 right-0 bg-sky-800 text-gray-200 rounded-lg m-1 p-2 text-sm">
										NEW
									</span>
									Visualise Custom graph
								</div>
							</Link>

						</form>
					</div>
					{graphData?.nodes?.length > 0 && (
						<div className="answer max-w-[720p] mx-auto p-1 select-none">
							<div className="ans border-2 border-sky-800 p-2 rounded-lg overflow-y-scroll max-h-44 overflow-x-hidden break-words">
								<div className="ans-header flex justify-between items-center p-3 text-sky-800 font-bold">
									<div className="text-lg md:text-xl">Answer</div>
									<div className="flex gap-2">
										<div
											className="text-xl md:text-2xl border-2 rounded-lg border-sky-800 p-2 hover:shadow-md active:bg-sky-800 active:text-gray-200 active:shadow-2xl"
											onClick={handleCopyClick}
										>
											<AiFillCopy />
										</div>
										<div
											className="text-xl md:text-2xl border-2 rounded-lg border-sky-800 p-2 hover:shadow-md active:bg-sky-800 active:text-gray-200 active:shadow-2xl"
											onClick={handleOpenGraph}
										>
											<MdOutlineDraw />
										</div>
									</div>
								</div>
								<div>
									<p>Nodes: {graphData.nodes.length}</p>
									<p>Edges: {graphData.edges.length}</p>
									<div>
										{pair.map((value, index) => (
											<div key={index}>{value}</div>
										))}
									</div>
								</div>
							</div>
						</div>
					)}
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
						{/* <div
							className="close-btn absolute bg-red-400 text-gray-200 rounded-lg top-0 right-0 p-2 hover:bg-red-600"
							onClick={handleCloseGraph}
						>
							<AiOutlineClose />
						</div> */}
					</div>
				)}
			</div>
		</div>
	);
}

export default RandomGraph;
