import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Sensor from "../components/Sensor";
import System from "../components/System";
export default function Dashboard(props) {

    return (
        <div className='content'>
            <Row>
                <Col>
                    <Sensor baseUrl={props.baseUrl}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <System baseUrl={props.baseUrl}/>
                </Col>
            </Row>
        </div>
    )
}