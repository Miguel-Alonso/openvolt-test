import Card from 'react-bootstrap/Card';

export default function Summary({ data }) {
    let totalConsumption = 0;
    let totalEmissions = 0;

    data.forEach(element => {
        totalConsumption += element.consumption;
        totalEmissions += element.intensity * element.consumption;
    });

    return (
        <Card>
            <Card.Body>
        <Card.Title>Summary</Card.Title>
        <Card.Text>
        consumption: {totalConsumption.toLocaleString("en-IE")} kWh<br/>
        Emissions: {(totalEmissions / 1000).toLocaleString("en-IE")} CO<sub>2</sub> (kgs)
        </Card.Text>
      </Card.Body>
        </Card>
    );
  }
  