import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

function processData(data) {
  let total = 0;
  const chartData = data.reduce((ac,a) => {
    total += a.consumption;
    Object.keys(a.generation).forEach(element => {
      if(ac.has(element)) {
        ac.set(element, a.generation[element] + ac.get(element));
      } else {
        ac.set(element, a.generation[element]);
      }
    });
    return ac;
  }, new Map());

  for (const element of chartData.entries()) {
    chartData.set(element[0], Math.round(element[1] / total * 100000) / 1000);
  }
  return chartData;
}

export default function Pie({ chartData }) {
  const canvas = useRef();
  const totals = processData(chartData);
  const keys = Array.from(totals.keys());
  const values = Array.from(totals.values());

  useEffect(() => {
    const ctx = canvas.current;

    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: keys,
        datasets: [{
            data: values,
            borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          },
          title: {
            display: true,
            text: 'Monthly % of fuel mix'
          }
        }
      }
    });
    return () => {
      chart.destroy();
    }
  }, [chartData]);

  return (
    <div className="container" style={{height: '350px'}}>
      <canvas ref={canvas}></canvas>
    </div>
  );
}