import { FC, useState } from "react"
import { VolumeControlProps } from "../Interfaces";

const VolumeControl:FC<VolumeControlProps> = ({setVolume}) => {
    const handleChange = (e: any) => {
        setVolume(e.target.value);
    }

    return (
        <input max="1" min="0" step="0.01" type="range" onChange={handleChange} />
    );
}

export default VolumeControl