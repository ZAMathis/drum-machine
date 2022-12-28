import { PadProps } from "../Interfaces"
import React, { FC } from "react"

const Pad: FC<PadProps> = ({id, src}) => {
    const audioRef = React.useRef<HTMLAudioElement>(null);

    const handleClick = () => {
        if(audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        }
    }
    
    return (
        <div className="drum-pad" id={id}>
            <button onClick={handleClick}>{id}</button>
            <audio ref={audioRef} src={src} onClick={handleClick} />
        </div>
    )
}

export default Pad