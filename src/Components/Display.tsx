import { useState } from "react"
import { DisplayProps } from "../Interfaces"
import DrumPads from "./DrumPads"
import PowerButton from "./PowerButton"
import VolumeControl from "./VolumeControl"

export default function Display({id}: DisplayProps) {
    const [keyPress, setKeyPress] = useState('Current Key');
    const [isOn, setIsOn] = useState(true);
    const [volume, setVolume] = useState()

    return (
        <div id={id} className=" grid grid-cols-2 h-[300px] w-[650px] mt-[25vh] m-auto p-2 bg-stone-200 rounded-md ">
            <div className=" ">
                <DrumPads isOn={isOn} setKeyPress={setKeyPress} />
            </div>
            <div className="flex flex-col justify-evenly m-2 w-72 h-66 border-red-500 border">
                <p className="p-1 h-10 bg-black text-white rounded-md shadow-lg border-2 border-white">{isOn ? keyPress : 'No Power'}</p>
                <PowerButton isOn={isOn} setIsOn={setIsOn} />
                <VolumeControl />
            </div>
        </div>
    )
}