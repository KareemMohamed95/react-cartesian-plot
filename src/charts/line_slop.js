import React, {useState, useEffect} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceDot, ReferenceLine, Polygon } from 'recharts';
function slope(degrees){
    return Math.round(Math.tan(degrees * Math.PI / 180));
}
function generateData(size, degrees){
    let point = {x: 0, y: 0}  
    let d = slope(degrees);
    let c = point.y - d*point.x;
    let data = new Array(size).fill(null);
    data.forEach((_, i) => {
        if(i <= 0) data[i] = point;
        else data[i]= {x: data[i-1].x+10, y: Math.round((data[i-1].x+10)*d + c)}
    });
    return data;

}
export default function LineSlop(){
    let [degrees, setDegrees] =useState(45);
    let [data, setData]= useState(generateData(50, degrees));

    useEffect(() => {
        let generatedData = generateData(50, degrees);
        setData(generatedData);
        console.log(generatedData);
    }, [degrees]);

    return (
        <div className="flex-center" style={{margin:100, fontWeight: 500}}>
            <LineChart width={500} height={500} margin={{ bottom: 5 }} data={data}>
                    <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="x" allowDataOverflow/>
                    <YAxis dataKey="y" allowDataOverflow/>
            </LineChart>
            <br/>
            <div>
                <input type="number" onChange={(e) => setDegrees(parseInt(e.target.value))} />
            </div>
        </div>
    );
}