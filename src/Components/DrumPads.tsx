import Pad from "./Pad"
import { DrumPadProps } from "../Interfaces";
import { FC } from "react";

const DrumPads: FC<DrumPadProps> = ({setKeyPress, isOn, volume}) => {
    
    if (isOn) {
        return (
            <div className=" mx-6 my-1 py-12 px-4 grid grid-cols-3 gap-4 w-[275px] bg-slate-500 rounded-lg">
                <Pad id="Q" src='/audio/Heater-1.mp3' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="W" src='/audio/Heater-2.mp3' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="E" src='/audio/Heater-4.mp3' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="A" src='/audio/kicknhat.mp3' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="S" src='/audio/Heater-3.mp3' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="D" src='/audio/ohh.mp3' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="Z" src='/audio/kick.mp3' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="X" src='/audio/clap.mp3' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="C" src='/audio/chh.mp3' setKeyPress={setKeyPress} volume={volume} />
            </div>
        )
    } else {
        return (
            <div className=" mx-6 my-1 py-12 px-4 grid grid-cols-3 gap-4 w-[275px] bg-slate-500 rounded-lg">
                <Pad id="Q" src='' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="W" src='' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="E" src='' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="A" src='' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="S" src='' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="D" src='' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="Z" src='' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="X" src='' setKeyPress={setKeyPress} volume={volume} />
                <Pad id="C" src='' setKeyPress={setKeyPress} volume={volume} />
            </div>
        )
    }
}

export default DrumPads;

/*  
 * 
 * Q, W, E, A, S, D, Z, X, C. 
 * The drum pads MUST be in this order.
 * 
*/