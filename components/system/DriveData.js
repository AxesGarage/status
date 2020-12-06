import dynamic from "next/dynamic";
import {driveSettings} from "../../lib/system";

export default function DriveData(options) {
    const LinearGauge = dynamic(()=> import('react-canvas-gauges/dist/LinearGauge'));
    const driveOptions = driveSettings(options);
    return (
        <LinearGauge {...driveOptions} />
    )
}