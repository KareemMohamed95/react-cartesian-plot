import './App.css';
import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Dot, Cross, AreaChart, ResponsiveContainer, ReferenceDot, ScatterChart, ReferenceArea, ReferenceLine } from 'recharts';

function App() {

  let data = [{ xaxis: "", yaxis: 0 },
  { xaxis: 1, yaxis: 1 },
  { xaxis: 2, yaxis: 2 },
  { xaxis: 3, yaxis: 3 },
  { xaxis: 4, yaxis: 4 },
  { xaxis: 5, yaxis: 5 },
  { xaxis: 6, yaxis: 6 },
  { xaxis: 7, yaxis: 7 },
  { xaxis: 8, yaxis: 8 },
  { xaxis: 9, yaxis: 9 },
  { xaxis: 10, yaxis: 10 }]


  let clickHandeller = (e) => {
    if (e === null) return;
    let xcoord = e.chartX
    let ycoord = e.chartY
    let xgridcoord = (xcoord - 65) / 42.5
    let xgridcoordFloor = Math.floor(xgridcoord)
    let xgridcoordCeil = Math.ceil(xgridcoord)
    let xgridcoordFinal = Math.abs(xgridcoord - xgridcoordFloor) <= Math.abs(xgridcoord - xgridcoordCeil) ? xgridcoordFloor : xgridcoordCeil
    let ygridcoord = 10 - (ycoord - 5) / 48
    let ygridcoordFloor = Math.floor(ygridcoord)
    let ygridcoordCeil = Math.ceil(ygridcoord)
    let ygridcoordFinal = Math.abs(ygridcoord - ygridcoordFloor) <= Math.abs(ygridcoord - ygridcoordCeil) ? ygridcoordFloor : ygridcoordCeil
    let existingPoint = points.find((point) => (point.x === xgridcoordFinal && point.y === ygridcoordFinal));
    if (existingPoint === undefined) {
      // points.push({ id: points.length + 1, x: xgridcoordFinal, y: ygridcoordFinal })
      setPoints([...points, { id: points.length + 1, x: xgridcoordFinal, y: ygridcoordFinal }])
      }
  }
  const [points, setPoints] = useState([])
  let width = visualViewport.width;
  let height = visualViewport.height;
  console.log(width);
  console.log(height);
  return (

    <div className="flex-center"
      style={{
        width: "100%",
        height: "100vh"
      }}>
      <h2>Cartesian grid using React</h2>
      <div className="col-sm-12 flex-center">
        <LineChart width={500} height={500} data={data} onClick={(e) => clickHandeller(e)}>
          <XAxis dataKey="xaxis" axisLine={true} />
          <YAxis dataKey="yaxis" type="category" axisLine={true} />
          <CartesianGrid style={{ stroke: "grey" }} />
          {points.map((point) => (<ReferenceDot key={point.id} x={point.x} y={point.y} r={3} fill="red" stroke="none" />))}
          {points.length > 1 && points.map((point) => (
            point.id === 1 ? <ReferenceLine key = {1000}></ReferenceLine>:
            <ReferenceLine key={point.id+1000}
              stroke="red"
              segment={[{ x: points[point.id-2].x, y: points[point.id-2].y }, { x: points[point.id-1].x, y: points[point.id-1].y }]} />))}
          <g>
            <polygon stroke = "black" fill = "black" fillOpacity = {1} points = "495,470 495,460 500,465"></polygon>
            <polygon stroke = "black" fill = "black" fillOpacity = {1} points = "60,5 70,5 65,0"></polygon>
          </g>
        </LineChart>
      </div>
    </div>
  );
}
export default App;
