import React from 'react';
import * as d3 from 'd3';
import { QuadrantConfig } from '../../model';
import { ConfigData } from '../../config';

function arcPath(quadrantPosition: number, ringPosition: number, xScale: d3.ScaleLinear<number, number>, config: ConfigData) {
  const startAngle = quadrantPosition === 1 ?
        3 * Math.PI / 2
        : (quadrantPosition - 2) *  Math.PI / 2
    const endAngle = quadrantPosition === 1 ?
        4 * Math.PI / 2
        : (quadrantPosition -1) *  Math.PI / 2
    const arcAttrs = config.chartConfig.ringsAttributes[ringPosition],
      ringRadiusPx = xScale(arcAttrs.radius) - xScale(0),
      arc = d3.arc();

  return arc({
    innerRadius: ringRadiusPx - arcAttrs.arcWidth,
    outerRadius: ringRadiusPx,
    startAngle,
    endAngle
    }) || undefined;
}

type GradientAttribute = {
  x: number, 
  y: number,
  cx: number, 
  cy: number, 
  r: number
}

type GradientAttributes = [ GradientAttribute, GradientAttribute, GradientAttribute, GradientAttribute ]

const QuadrantRings: React.FC<{
  quadrant: QuadrantConfig
  xScale: d3.ScaleLinear<number, number>
  config: ConfigData,
  singleQuadrant: boolean
}> = ({ quadrant, xScale, config, singleQuadrant}) => {

    let gradientAttributes: GradientAttributes;
    let quadrantSize: number;

    if (singleQuadrant) {
      quadrantSize = config.chartConfig.size;
      // order from top-right clockwise
      gradientAttributes = [
          {x: 0,  y: 0, cx: 1, cy: 1, r: 1},
          {x: 0,  y: 0, cx: 0, cy: 1, r: 1},
          {x: 0,  y: 0, cx: 0, cy: 0, r: 1},
          {x: 0,  y: 0, cx: 1, cy: 0, r: 1}
        ];    
      } else {
        quadrantSize = config.chartConfig.size / 2;
        // order from top-right clockwise
        gradientAttributes = [
          {x: 0,         y: 0,          cx: 1, cy: 1, r: 1},
          {x: xScale(0), y: 0,          cx: 0, cy: 1, r: 1},
          {x: xScale(0), y: xScale(0),  cx: 0, cy: 0, r: 1},
          {x: 0,         y: xScale(0),  cx: 1, cy: 0, r: 1}
        ];
      }
   

    const gradientId = `${quadrant.position}-radial-gradient`;
   
    return (
      <g className="quadrant-ring">
        {/* Definition of the quadrant gradient */}
        <defs>
          <radialGradient id={gradientId} {...gradientAttributes[quadrant.position - 1]}>
            <stop offset="0%" stopColor={quadrant.colour}></stop>
            <stop offset="100%" stopColor={quadrant.colour} stopOpacity="0"></stop>
          </radialGradient>         
        </defs>

        {/* Gradient background area */}
        <rect
          width={quadrantSize}
          height={quadrantSize}
          x={gradientAttributes[quadrant.position - 1].x}
          y={gradientAttributes[quadrant.position - 1].y}
          fill={`url(#${gradientId})`}
          style={{opacity: 0.5}}
        />

        {/* Rings' arcs */}
        {Array.from(config.rings).map((_, index) => (
          <path
            key={index}
            fill={quadrant.colour}
            d={arcPath(quadrant.position, index, xScale, config)}
            style={{transform: `translate(${quadrantSize}px, ${quadrantSize}px)`}}
          />
        ))}

      </g>
    );
  }

  export default QuadrantRings;