import { FC, useState } from "react"
import { VolumeControlProps } from "../Interfaces";

const VolumeControl:FC<VolumeControlProps> = ({setVolume}) => {
    const [ val, setVal ] = useState(0.5);
    
    const handleChange = (e: any) => {
        setVal(e.target.value);
        setVolume(val)
    }

    return (
        <input max="1" min="0" step="0.01" type="range" onChange={handleChange} />
    );
}

export default VolumeControl