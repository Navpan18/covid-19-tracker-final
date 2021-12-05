import numeral from "numeral";
import React from "react";
import { Line } from "react-chartjs-2";
const options = {
  elements: {
    point: {
      radius: 0,
    },
  },
  legend: {
    display: false,
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "DD/MM/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

let cases=[
  {
    x: "05-12-2021",
    y: 9054
  },
  {
    x: "06-12-2021",
    y: 8000
  },
  {
    x: "07-12-2021",
    y: 9000
  },
  {
    x: "08-12-2021",
    y: 9584
  },
  {
    x: "09-12-2021",
    y: 7562
  },
  {
    x: "10-12-2021",
    y: 10000
  },
  {
    x: "11-12-2021",
    y: 7000
  },
  {
    x: "12-12-2021",
    y: 7243
  },
  {
    x: "13-12-2021",
    y: 6798
  },
  {
    x: "14-12-2021",
    y: 7354
  },
  {
    x: "15-12-2021",
    y: 5909
  },
  {
    x: "16-12-2021",
    y: 7054
  },
  {
    x: "17-12-2021",
    y: 8000
  },
  {
    x: "18-12-2021",
    y: 9000
  },
  {
    x: "19-12-2021",
    y: 6500
  },
  {
    x: "20-12-2021",
    y: 7317
  },
  {
    x: "21-12-2021",
    y: 7397
  },
  {
    x: "22-12-2021",
    y: 7477
  },
  {
    x: "23-12-2021",
    y: 7557
  },
  {
    x: "24-12-2021",
    y: 7637
  },
  {
    x: "25-12-2021",
    y: 7716
  },
  {
    x: "26-12-2021",
    y: 8000
  },
  {
    x: "27-12-2021",
    y: 6547
  },
  {
    x: "28-12-2021",
    y: 6555
  },
  {
    x: "29-12-2021",
    y: 9800
  },
  {
    x: "30-12-2021",
    y: 8700
  },
  {
    x: "31-12-2021",
    y: 9870
  }
 ]
function Prediction() {
  let datacol = {
    backgroundColor: "rgba(204,16,52,0.5)",
    borderColor: "#CC1034",
    data: cases,
  };

  return (
    <div>
        <Line
          options={options}
          data={{
            datasets: [datacol],
          }}
        />
    </div>
  );
}

export default Prediction;
