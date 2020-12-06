import {system, driveSettings} from '../lib/system'
import {Jumbotron, Row, Col} from "react-bootstrap";
import {useState, useEffect} from "react";
import {temperatureSettings} from "../lib/sensor";
import dynamic from 'next/dynamic';
import DriveData from "./system/DriveData";
import hasOwn from 'lodash';

export default function System(props) {
    const RadialGauge = dynamic(() => import("react-canvas-gauges/dist/RadialGauge"));
    const [data, setData] = useState({});
    const [cpuTemp, setCpuTemp] = useState(0);
    const [driveData, setDriveData] = useState({});
    const cpuOptions = temperatureSettings('CPU', cpuTemp)

    useEffect(()=>{
        const syst = system(props.baseUrl);
        syst.then((res)=> {
            setData(res.data);
            setCpuTemp(res.data.cpu.temperature.fahrenheit.value);
            const partitions = res.data.partitions;
            setDriveData(partitions);
        });

    }, []);

    let drives = [];

    for( const mount in driveData){
        const drive = driveData[mount];
        drives.push(<Row key={mount}><Col><DriveData {...drive}/></Col></Row>)
    }

    return (
        <Jumbotron>
            <h2>System Information</h2>
            <Row>
                <Col>
                    <RadialGauge {...cpuOptions}/>
                </Col>
                <Col>
                    {drives}
                </Col>
            </Row>
        </Jumbotron>
    )
}