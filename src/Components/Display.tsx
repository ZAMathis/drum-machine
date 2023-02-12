import { useState, FC } from "react"
import DrumPads from "./DrumPads"
import PowerButton from "./PowerButton"
import VolumeControl from "./VolumeControl"

const Display: FC = () => {
    const [keyPress, setKeyPress] = useState('Current Key');
    const [isOn, setIsOn] = useState(true);
    const [volume, setVolume] = useState(0.5)

    return (
        
        <div id="display" className="
        grid 
        grid-cols-2 
        h-[300px] 
        w-[650px] 
        mt-[25vh] 
        m-auto p-2 
        bg-stone-200 
        rounded-md 
        shadow-2xl">
            <div>
                <DrumPads isOn={isOn} setKeyPress={setKeyPress} volume={volume} />
            </div>
            <div className="
            flex 
            flex-col 
            justify-evenly 
            m-2 
            w-72 
            h-66">
                <p className="
                p-1 
                h-10 
                bg-black 
                text-white 
                rounded-md 
                shadow-lg 
                border-2 
                border-white">{isOn ? keyPress : 'No Power'}</p>
                <PowerButton isOn={isOn} setIsOn={setIsOn} />
                <VolumeControl setVolume={setVolume} />
            </div>
        </div>
    )
}

export default Display;