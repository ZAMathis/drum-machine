import { FC } from "react"

const VolumeControl:FC = () => {
    return (
        <input max="1" min="0" step="0.01" type="range" value="0.5" />
    );
}

export default VolumeControl