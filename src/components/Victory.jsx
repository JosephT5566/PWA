import React from 'react';
import { VictoryChart, VictoryLine, VictoryTooltip } from 'victory';

export default function Victory() {
    const data = [
        { time: 1598918400, value: 11926.69 },
        { time: 1599004800, value: 11397.9 },
        { time: 1599091200, value: 10174.62 },
        { time: 1599177600, value: 10467.33 },
        { time: 1599264000, value: 10167.97 },
        { time: 1599350400, value: 10260.37 },
        { time: 1599436800, value: 10379.08 },
        { time: 1599523200, value: 10128.54 },
        { time: 1599609600, value: 10228.85 },
        { time: 1599696000, value: 10345.68 },
        { time: 1599782400, value: 10319.28 },
    ];
    return (
        <VictoryChart>
            <VictoryLine
                data={data}
                x="time"
                y="value"
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                }}
            />
        </VictoryChart>
    );
}
