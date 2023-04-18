import "./Featured.css";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";

const Featured = () => {
  const data = [
    { argument: "Spinning", value: 22 },
    { argument: "Transportation", value: 16 },
    { argument: "Carding", value: 27 },
    { argument: "Health & Coding", value: 35 },
  ];

  return (
    <div className="featured">
      <div className="bottom">
        <div className="featuredChart">
          <Paper>
            <Chart data={data}>
              <PieSeries
                valueField="value"
                argumentField="argument"
                innerRadius={0.8}
              />
              <Title text="Top emission by type" />
            </Chart>
          </Paper>
        </div>
      </div>
      <div className="bottom-data">
        <div className="data">
            <div className="spinning"></div>
            <div className="dtext">Spinning</div>
            <div className="percent">22%</div>
        </div>
        <div className="data">
            <div className="transportation"></div>
            <div className="dtext">Transportation</div>
            <div className="percent">16%</div>
        </div>
        <div className="data">
            <div className="carding"></div>
            <div className="dtext">Carding</div>
            <div className="percent">27%</div>
        </div>
        <div className="data">
            <div className="health"></div>
            <div className="dtext">Health & Coding</div>
            <div className="percent">35%</div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
