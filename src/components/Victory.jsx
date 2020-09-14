import React from 'react';
import { VictoryChart, VictoryLine, VictoryScatter, createContainer, VictoryTooltip } from 'victory';

export default function Victory() {
    const VictoryCursorVoronoiContainer = createContainer('cursor', 'voronoi'); //combine VictoryCursorContainer and VictoryVoronoiContainer

    const data = [
        { time: 8918400, value: 11926.69 },
        { time: 9004800, value: 11397.9 },
        { time: 9091200, value: 10174.62 },
        { time: 9177600, value: 10467.33 },
        { time: 9264000, value: 10167.97 },
        { time: 9350400, value: 10260.37 },
        { time: 9436800, value: 10379.08 },
        { time: 9523200, value: 10128.54 },
        { time: 9609600, value: 10228.85 },
        { time: 9696000, value: 10345.68 },
        { time: 9782400, value: 10319.28 },
    ];
    return (
        <VictoryChart
            containerComponent={
                <VictoryCursorVoronoiContainer
                    voronoiDimension={'x'}
                    voronoiBlacklist={['scatter']}
                    labels={({ datum }) => `${datum.value}`}
                    labelComponent={
                        <VictoryTooltip flyoutStyle={{ stroke: 'none' }} pointerLength={0} centerOffset={{ y: -10 }} />
                    }
                />
            }
        >
            <VictoryLine
                data={data}
                x="time"
                y="value"
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                }}
            />
            <VictoryScatter name="scatter" data={data} x="time" y="value" />
        </VictoryChart>
    );
}
