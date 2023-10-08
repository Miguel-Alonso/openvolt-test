import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import utilStyles from '../styles/utils.module.css';
import { getDynamicData } from '../lib/data';
import Bar from '../components/bar';
import Selector from '../components/selector';
import Summary from '../components/summary';
import Pie from '../components/pie';
import { useState } from "react";

export default function Home({ allData }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  function loadData() {
    setLoading(true);
    getDynamicData()
      .then((data) => {setData(data)})
      .then(() => {setLoading(false)});
  }

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <Container>
      <Row>
        <Col>
          <section className={utilStyles.headingMd}>
            <Selector onClick={loadData} loading={loading}/>
          </section>
        </Col>
      </Row>
      <Row>
        <Col>
          <section className={utilStyles.headingMd}>
            <Bar chartData={data} />
          </section>
        </Col>
      </Row>
      <Row>
        <Col>
          <section className={utilStyles.headingMd}>
            <Summary data={data} />
          </section>
        </Col><Col>
          <section className={utilStyles.headingMd}>
            <Pie chartData={data} />
          </section>
        </Col>
      </Row>
    </Container>
  );
}