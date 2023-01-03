import { PadProps } from "../Interfaces"
import React, { FC, useEffect } from "react"

const Pad: FC<PadProps> = ({id, src, setKeyPress}) => {
    const formattedSrc = src.slice(7);

    useEffect(() => {
        const onKeyDown = (event: any) => {
            if (event.key.toUpperCase() === id) {
                handleInput();
                setKeyPress(formattedSrc);
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
        <div className=" drum-pad drop-shadow-xl rounded-md w-16 h-12 bg-gray-400" id={id} onClick={handleInput}>
            <p className="mt-2 font-semibold text-lg text-white">{id}</p>
            <audio id={id} className="clip" ref={audioRef} src={src} onClick={handleInput} />
        </div>
    )
}

export default Pad