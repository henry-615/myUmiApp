import { Line, LineConfig } from '@ant-design/plots';
import { useEffect, useState } from 'react';

export default function DemoLine() {
  const [data, setData] = useState([]);

  /**
   * {
   *    "Date": "2010-01",
   *    "scales": 1998
   * },
   */
  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config: LineConfig = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
  };

  return <Line {...config} />;
}
