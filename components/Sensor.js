import {sensor, temperatureSettings} from "../lib/sensor";
import {useEffect, useState} from "react";
import {Jumbotron, Row, Col} from 'react-bootstrap'
import dynamic from 'next/dynamic';

export default function Sensor(props) {
    const RadialGauge = dynamic(() => import("react-canvas-gauges/dist/RadialGauge"));
    const [data, setData] = useState('');
    const [temp, setTemp] = useState(0);
    const [dewpoint, setDewPoint] = useState(0);
    let tempOptions = temperatureSettings('Temperature', temp);
    let dewPointOptions = temperatureSettings('Dew Point', dewpoint);

    useEffect(()=>{
        let response = sensor(props.baseUrl);
        response.then((res) => {
            setData(res.data);
            setTemp(res.data.temperature.fahrenheit.value)
            setDewPoint(res.data.humidity.dewPoint.fahrenheit.value)
        });
    }, [])

    return (
        <Jumbotron>
            <h2>Sensor Data</h2>
            <Row>
                <Col>
                    <RadialGauge {...tempOptions}/>
                </Col>
                <Col>
                    <RadialGauge {...dewPointOptions}/>
                </Col>
            </Row>
        </Jumbotron>
    )
}