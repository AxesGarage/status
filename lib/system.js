import axios from "axios";
import Bytes from 'bytes'

export async function system(base_url){
    const url = `${base_url}/system`
    return await axios.get(url);
}

export function driveSettings(settings){
    const getMajorTicks = (max) => {
        const divisor = (max < 100) ? (max < 10) ? 1 : 10 : 100;
        let results = Array.from(Array(parseInt(max / divisor, 10) + 1).keys()).map((v, k)=> { return (k+1)*divisor; })
        results.unshift(0);
        return results;
    }

    const bytes = Bytes(settings.usage.total_space, {unitSeparator:"|"}).split("|");
    const max = parseFloat(bytes[0]);
    const value = parseFloat(Bytes(settings.usage.used_space));
    const scale = bytes[1];
    const ticks = getMajorTicks(parseInt(max))

    return {
        width: 400,
        height: 150,
        units: scale,
        title: settings.mount,
        minValue: 0,
        maxValue: max,
        majorTicks: ticks,
        minorTicks: 5,
        strokeTicks: true,
        ticksWidth: 15,
        ticksWidthMinor: 7.5,
        highlights: [],
        colorMajorTicks: "#ffe66a",
        colorMinorTicks: "#ffe66a",
        colorTitle: "#eee",
        colorUnits: "#ccc",
        colorNumbers: "#eee",
        colorPlate: "#2465c0",
        colorPlateEnd: "#327ac0",
        borderShadowWidth: 0,
        borders: false,
        borderRadius: 10,
        needleType: "arrow",
        needleWidth: 3,
        animationDuration: 1500,
        animationRule: "linear",
        colorNeedle: "#222",
        colorNeedleEnd: "",
        colorBarProgress: "#c03280",
        colorBar: "#f5f5f5",
        barStroke: 0,
        barWidth: 8,
        barBeginCircle: false,
        value: value
    }
}