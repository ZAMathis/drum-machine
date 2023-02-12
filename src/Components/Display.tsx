import { useState, FC } from "react"
import DrumPads from "./DrumPads"
import PowerButton from "./PowerButton"
import VolumeControl from "./VolumeControl"

const Display: FC = () => {
    const [keyPress, setKeyPress] = useState('Current Key');
    const [isOn, setIsOn] = useState(true);
    const [volume, setVolume] = useState(0.5)

    return (
        <div className="
        shadow-2xl 
        w-[600px] 
        m-auto">
            
            <div className="
            bg-stone-200
            w-[650px]
            h-[75px]
            m-auto
            mt-64
            rounded-t-md
            border-b
            border-slate-500
            " id="banner">
                <h1 className="
                font-mono
                font-semibold
                text-red-700
                text-4xl
                text-left
                px-6
                py-4
                w-[500px]
                ">Amai</h1>
            </div>

            <div id="display" className="
            grid 
            grid-cols-2 
            h-[300px] 
            w-[650px]  
            m-auto 
            p-2 
            bg-stone-200 
            rounded-b-md">
                <div>
                    <DrumPads isOn={isOn} setKeyPress={setKeyPress} volume={volume} />
                </div>
                <div className="
                flex 
                flex-col 
                m-2 
                w-72 
                h-66">
                    <p className="
                    p-1 
                    h-10
                    bg-gradient-to-t from-cyan-800 via-cyan-500 to-cyan-800
                    text-white 
                    font-mono
                    rounded-md 
                    shadow-lg 
                    border-2 
                    border-white">{isOn ? keyPress : 'No Power'}</p>
                    <PowerButton isOn={isOn} setIsOn={setIsOn} />
                    <VolumeControl setVolume={setVolume} />
                </div>
            </div>
        </div>
    )
}

export default Display;