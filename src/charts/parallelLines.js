import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceDot, ReferenceLine, Polygon } from 'recharts';

export default function ParallelLines(){
    // let data = [{x:10, y: 100}, {x: 20, y: 200}, {x: 100, y: 300} ,{x: 150, y:400}, {x: 200, y: 420}, {x: 300, y:450} ];
    let data = new Array(50).fill(null);
    data.forEach((_, i) => {
        if(i <= 0) data[i] = {x: 10, y:10};
        else data[i]= {x: data[i-1].x+10, y: data[i-1].y+10}
    });
    return (
      <div className="flex-center" style={{margin:100, fontWeight: 500}}>
        <LineChart width={500} height={500} margin={{ bottom: 5 }} data={data}>
          <XAxis dataKey="x" axisLine={false} tick={false} />
          <YAxis dataKey="y" axisLine={false} tick={false} />
          <ReferenceDot
            key={"point1"}
            x={10}
            y={495}
            r={5}
            fill="#8C1727"
            stroke="none"
            label={{value: 'A', position: 'top', fill: "blue"}}
          />
        <ReferenceDot
            key={"point1l1"}
            x={10}
            y={400}
            r={5}
            fill="#8C1727"
            stroke="none"
            label={{value: 'M', position: 'top', fill: "blue"}}
          />

        <ReferenceDot
            key={"point2l1"}
            x={170}
            y={316}
            r={5}
            fill="#8C1727"
            stroke="none"
            label={{value: 'N', position: 'top', fill: "blue"}}
          />


          <ReferenceLine
            key={"line1"}
            stroke="#8C1727"
            strokeWidth= {3}
            segment={[
              { x: 10, y: 400 },
              { x: 200, y: 300 },
            ]}
          />

          <ReferenceDot
            key={"point1l2"}
            x={10}
            y={300}
            r={5}
            fill="#8C1727"
            stroke="none"
            label={{value: 'A', position: 'top', fill: "blue"}}
          />
          <ReferenceDot
            key={"point1l2"}
            x={170}
            y={217}
            r={5}
            fill="#8C1727"
            stroke="none"
            label={{value: 'A`', position: 'top', fill: "blue"}}
          />
          <ReferenceLine
            key={"line2"}
            stroke="#8C1727"
            strokeWidth= {3}
            segment={[
              { x: 10, y: 300 },
              { x: 200, y: 200 }
            ]}
          />

         <ReferenceDot
            key={"point1l3"}
            x={10}
            y={200}
            r={5}
            fill="#8C1727"
            stroke="none"
            label={{value: 'M', position: 'top', fill: "blue"}}
          />
          <ReferenceDot
            key={"point2l3"}
            x={170}
            y={117}
            r={5}
            fill="#8C1727"
            stroke="none"
            label={{value: 'N', position: 'top', fill: "blue"}}
          />
          <ReferenceLine
            key={"line3"}
            stroke="#8C1727"
            strokeWidth= {3}
            segment={[
              { x: 10, y: 200 },
              { x: 200, y: 100 }
            ]}
          />
        </LineChart>
      </div>
    );
}