import React, { useState } from 'react';

function RandomGraph() {
  const [numNodes, setNumNodes] = useState(5);
  const [numEdges, setNumEdges] = useState(5);
  const [graphData, setGraphData] = useState([]);

  function generateGraph() {
    const nodes = [];
    const edges = [];

    // Generate nodes
    for (let i = 1; i <= numNodes; i++) {
      nodes.push({ id: i, label: `Node ${i}` });
    }

    // Generate edges
    let count = 0;
    while (count < numEdges) {
      const from = Math.floor(Math.random() * numNodes) + 1;
      const to = Math.floor(Math.random() * numNodes) + 1;
      if (from !== to) {
        edges.push({ from: from, to: to });
        count++;
      }
    }

    // Set graph data
    setGraphData({ nodes: nodes, edges: edges });
  }

  function renderPairs() {
    const pairs = [];
    for (let i = 0; i < graphData.edges.length; i++) {
      const from = graphData.nodes.find(n => n.id === graphData.edges[i].from);
      const to = graphData.nodes.find(n => n.id === graphData.edges[i].to);
      pairs.push(`${from.label} -> ${to.label}`);
    }
    return pairs.join(', ');
  }

  return (
    <div className=" md:flex justify-center items-center">
      <div className="mini-container w-screen max-w-[720px] ">
      <label>
        Number of nodes:
        <input type="number" value={numNodes} onChange={e => setNumNodes(parseInt(e.target.value))} />
      </label>
      <br />
      <label>
        Number of edges:
        <input type="number" value={numEdges} onChange={e => setNumEdges(parseInt(e.target.value))} />
      </label>
      <br />
      <button onClick={generateGraph}>Generate graph</button>
      <br />
      {graphData?.nodes?.length > 0 &&
        <div>
          <h2>Graph:</h2>
          <p>Nodes: {graphData.nodes.length}</p>
          <p>Edges: {graphData.edges.length}</p>
          <p>Pairs: {renderPairs()}</p>
        </div>
      }
      </div>
    </div>  
  );
}

export default RandomGraph;