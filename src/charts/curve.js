import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceDot, ReferenceLine, Polygon } from 'recharts';

export default function Curve(){
    let data = new Array(10).fill(null);
    data.forEach((_, i) => {
        if(i <= 0) data[i] = {x: 0, y:0};
        else data[i]= {x: data[i-1].x+5, y: Math.pow(data[i-1].x+5, 2)}
    });
    return (
        <div className="flex-center" style={{margin:100, fontWeight: 500}}>
            <LineChart width={500} height={500} margin={{ bottom: 5 }} data={data}>
                <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="x" allowDataOverflow/>
                <YAxis dataKey="y" allowDataOverflow/>
                <Tooltip />
            </LineChart>
        </div>
    );
}