import React, { useEffect, useRef } from 'react';
import vis from 'vis';

const GraphTest = ({pair}) => {
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

    const nodes = new vis.DataSet([
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' }
    ]);

    const edges = new vis.DataSet([
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 }
    ]);

    const data = { nodes, edges };

    network.current = new vis.Network(containerRef.current, data, options);
  }, []);

  return <div ref={containerRef} style={{ height: '640px' }} />;
};

export default GraphTest;
