import React, { useState } from "react";
import Pie from "@visx/shape/lib/shapes/Pie";
import { Group } from "@visx/group";

import { animated, useTransition, interpolate } from "@react-spring/web";
import { Circle } from "@visx/shape";
import { data } from "../content/tokenomics";
// accessor functions

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

export default function Chart({
  selectedBrowser,
  setSelectedBrowser,
  width,
  height,
  size,
  margin = defaultMargin,
  animate = true,
}) {
  if (width < 10) return null;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const donutThickness = size ? 70 : 100;
  return (
    <svg width={width} height={height}>
      <rect
        rx={14}
        width={width}
        height={height}
        fill="url('#visx-pie-gradient')"
      />
      <Group top={centerY + margin.top} left={centerX + margin.left}>
        <Pie
          data={data}
          pieValue={(item) => item.fakeValue}
          outerRadius={radius}
          innerRadius={radius - donutThickness}
          cornerRadius={3}
          padAngle={0.005}
        >
          {(pie) => (
            <AnimatedPie
              {...pie}
              animate={animate}
              getKey={(arc) => {
                return arc.data.label;
              }}
              getValue={(arc) => arc.data.value}
              onClickDatum={({ data }) => {
                animate && setSelectedBrowser(data);
              }}
              getColor={(arc) => {
                return arc.data.color;
              }}
            />
          )}
        </Pie>

        <Circle
          cx={0}
          cy={0}
          r={size ? "95" : "150"}
          fill={"rgba(0,0,0,0.3)"}
        ></Circle>
        <Circle
          cx={0}
          cy={0}
          r={size ? "85" : "130"}
          fill={selectedBrowser?.color}
        ></Circle>
        <text
          textAnchor="middle"
          x={0}
          y={0}
          fill="white"
          fontSize={16}
          fontWeight={700}
          pointerEvents="none"
        >
          {selectedBrowser?.label} {selectedBrowser?.value}%
        </text>
      </Group>
    </svg>
  );
}

// react-spring transition definitions

const fromLeaveTransition = ({ endAngle }) => ({
  // enter from 360° if end angle is > 180°
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0,
});
const enterUpdateTransition = ({ startAngle, endAngle }) => ({
  startAngle,
  endAngle,
  opacity: 1,
});

function AnimatedPie({
  animate,
  arcs,
  path,
  getKey,
  getColor,
  onClickDatum,
  getValue,
}) {
  const transitions = useTransition(arcs, {
    from: animate ? fromLeaveTransition : enterUpdateTransition,
    enter: enterUpdateTransition,
    update: enterUpdateTransition,
    leave: animate ? fromLeaveTransition : enterUpdateTransition,
    keys: getKey,
  });
  return transitions((props, arc, { key }) => {
    const [centroidX, centroidY] = path.centroid(arc);

    const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

    return (
      <g key={key}>
        <animated.path
          // compute interpolated path d attribute from intermediate angle values
          d={interpolate(
            [props.startAngle, props.endAngle],
            (startAngle, endAngle) =>
              path({
                ...arc,
                startAngle,
                endAngle,
              })
          )}
          fill={getColor(arc)}
          onClick={() => onClickDatum(arc)}
          onTouchStart={() => onClickDatum(arc)}
        />
        {hasSpaceForLabel && (
          <animated.g style={{ opacity: props.opacity }}>
            <Circle cx={centroidX} cy={centroidY} fill="white" r="20" />
            <text
              fill="black"
              x={centroidX}
              y={centroidY}
              dy=".33em"
              fontSize={12}
              textAnchor="middle"
              pointerEvents="none"
            >
              {getValue(arc)}%
            </text>
          </animated.g>
        )}
      </g>
    );
  });
}
