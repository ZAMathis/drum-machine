import { PadProps } from "../Interfaces"
import React, { FC, useEffect } from "react"

const Pad: FC<PadProps> = ({id, src}) => {
    
    useEffect(() => {
        const onKeyDown = (event: any) => {
            if (event.key.toUpperCase() === id) {
                handleInput()
            }
        }

        document.addEventListener('keydown', onKeyDown)

        return () => {
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [id])

    const audioRef = React.useRef<HTMLAudioElement>(null);

    const handleInput = () => {
        if(audioRef.current) {
            audioRef.current.currentTime = 0
            audioRef.current.play()
        }
    }
    
    return (
        <div className="drum-pad" id={id}>
            <button onClick={handleInput}>{id}</button>
            <audio ref={audioRef} src={src} onClick={handleInput} />
        </div>
    )
}

export default Pad