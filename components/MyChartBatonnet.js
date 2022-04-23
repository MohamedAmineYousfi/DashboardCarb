import React from 'react'
import { Line } from 'react-chartjs-2'

// const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//         {
//             label: 'My Balance',
//             fill: false,
//             lineTension: 0.5,
//             backgroundColor: '#db86b2',
//             borderColor: '#008000',
//             borderCapStyle: 'butt',
//             borderDashOffset: 0.0,
//             borderJoinStyle: '#008000',
//             pointBorderColor: '#FFFF00',
//             pointBackgroundColor: '#FFFF00',
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: '#FFFF00',
//             pointHoverBorderColor: '#FFFF00',
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [500, 300, 400, 500, 800, 650, 700, 690, 1000, 1200, 1050, 1300],
//         },
//     ],
// }
const labels = ['Janv','fev','mars' ,'avril']
const data = {
    labels: labels,
    datasets: [{
        fill: false,
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        tension: 0.1,
        label: 'Number of Carpools',
        data: [1, 1, 1, 0.5, 1, 1, 0.5],
    //   backgroundColor: [
    //     'rgba(255, 99, 132, 0.2)',
    //     'rgba(255, 159, 64, 0.2)',
    //     'rgba(255, 205, 86, 0.2)',
    //     'rgba(75, 192, 192, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(153, 102, 255, 0.2)',
    //     'rgba(201, 203, 207, 0.2)'
    //   ],
    //   borderColor: [
    //     'rgb(255, 99, 132)',
    //     'rgb(255, 159, 64)',
    //     'rgb(255, 205, 86)',
    //     'rgb(75, 192, 192)',
    //     'rgb(54, 162, 235)',
    //     'rgb(153, 102, 255)',
    //     'rgb(201, 203, 207)'
    //   ],
      borderWidth: 1
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
// const options = {
//     maintainAspectRatio: true,
//     scales: {
//         x: {
//             grid: {
//                 display: false,
//             },
//         },
//         y: {
//             grid: {
//                 borderDash: [3, 3],
//             },
//             // beginAtZero: true, // this works
//         },
//     },
//     plugins: {
//         legend: {
//             display: false
//         }
//     }
// }

const MyChartBatonnet = () => (
    <Line
        data={data}
        options={config}
    />
)


export default MyChartBatonnet ;
