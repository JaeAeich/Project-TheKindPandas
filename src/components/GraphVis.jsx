import React, { useEffect, useRef } from 'react';
import vis from 'vis';

const GraphVis = ({pair, numNodes}) => {
  const containerRef = useRef(null);
  const network = useRef(null);

  useEffect(() => {
    // Create a new network instance with some default options
    const options = {
      nodes: {
        shape: 'circle',
        font: {
          size: 16,
          color: '#ffffff'
        },
        borderWidth: 2,
        borderWidthSelected: 3,
        color: {
          border: '#2B7CE9',
          background: '#97C2FC',
          highlight: {
            border: '#2B7CE9',
            background: '#D2E5FF'
          },
          hover: {
            border: '#2B7CE9',
            background: '#D2E5FF'
          }
        }
      },
      edges: {
        color: {
          color: '#848484',
          highlight: '#848484',
          hover: '#848484'
        },
        width: 2
      },
      physics: {
        enabled: true,
        barnesHut: {
          gravitationalConstant: -2000,
          centralGravity: 0.3,
          springLength: 200,
          springConstant: 0.04,
          damping: 0.09,
          avoidOverlap: 0
        },
        maxVelocity: 50,
        minVelocity: 0.1,
        solver: 'barnesHut',
        timestep: 0.5,
        stabilization: {
          enabled: true,
          iterations: 1000,
          updateInterval: 50,
          onlyDynamicEdges: false,
          fit: true
        }
      },
      interaction: {
        hover: true,
        tooltipDelay: 200,
        hideEdgesOnDrag: false
      }
    };


    const nodes = [];
    for (let i = 1; i <= numNodes; i++) {
      nodes.push({ id: i, label: `Node ${i}` });
    }
    const nodesDataSet = new vis.DataSet(nodes);
    
    const pairData = pair.map(edge => {
        const [from, to] = edge.split(" ");
        return { from: parseInt(from), to: parseInt(to) };})


    const edges = new vis.DataSet(pairData);

      console.log(edges);

    const data = { nodes, edges };

    network.current = new vis.Network(containerRef.current, data, options);
  }, [pair]);

  return <div ref={containerRef} style={{ height: '640px' }} />;
};

export default GraphVis;
