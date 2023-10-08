import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

export default function Bar({ chartData }) {
  const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current;

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartData.map((elem) => elem.date),
        datasets: [{
          label: 'Consumption',
          data: chartData.map((elem) => elem.consumption),
          borderWidth: 1,
          type: 'line',
          order: 0
        }, {
          label: 'Intensity',
          data: chartData.map((elem) => elem.intensity),
          borderWidth: 1,
          order: 1
        }]
      },
      options: {
        responsive: true,
        elements: {
          point: {
            radius: 0
          }
        },
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Consumption/Intensity over time'
          }
        }
      }
    });
    return () => {
      chart.destroy();
    }
  }, [chartData]);

  return (
    <div className="container" style={{height: '400px'}}>
      <canvas ref={canvas}></canvas>
    </div>
  );
}