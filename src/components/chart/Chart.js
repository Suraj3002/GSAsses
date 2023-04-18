import './Chart.css'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

const Chart = () => {
  charts(FusionCharts);

  const dataSource = {
    chart: {
      caption: "Carbon FootPrint",
      yaxisname: "Carbon Foot print",
      flatscrollbars: "0",
      scrollheight: "12",
      numvisibleplot: "8",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "Jan"
          },
          {
            label: "Feb"
          },
          {
            label: "Mar"
          },
          {
            label: "Apr"
          },
          {
            label: "May"
          },
          {
            label: "June"
          },
          {
            label: "July"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Spinning",
        data: [
          {
            value: "50220"
          },
          {
            value: "86120"
          },
          {
            value: "25200"
          },
          {
            value: "59723"
          },
          {
            value: "60415"
          },
          {
            value: "90555"
          },
          {
            value: "90803"
          }
        ]
      },
      {
        seriesname: "Transportation",
        data: [
          {
            value: "50000"
          },
          {
            value: "60000"
          },
          {
            value: "80020"
          },
          {
            value: "70003"
          },
          {
            value: "40000"
          },
          {
            value: "90023"
          },
          {
            value: "45030"
          }
        ]
      },
      {
        seriesname: "Carding",
        data: [
          {
            value: "40020"
          },
          {
            value: "86120"
          },
          {
            value: "35200"
          },
          {
            value: "50723"
          },
          {
            value: "60415"
          },
          {
            value: "90555"
          },
          {
            value: "17003"
          }
        ]
      },
      {
        seriesname: "Health Coding",
        data: [
          {
            value: "30000"
          },
          {
            value: "45120"
          },
          {
            value: "58200"
          },
          {
            value: "50723"
          },
          {
            value: "60015"
          },
          {
            value: "90055"
          },
          {
            value: "10003"
          }
        ]
      }
    ]
  };
  
  return (
    <div className='chart'>
        <ReactFusioncharts
        type="scrollstackedcolumn2d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    </div>
  )
}

export default Chart