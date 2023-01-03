import Pad from "./Pad"
import { DrumPadProps } from "../Interfaces";
import { FC } from "react";

const DrumPads: FC<DrumPadProps> = ({setKeyPress, isOn}) => {
    
    if (isOn) {
        return (
            <div className=" mx-6 my-1 py-12 px-4 grid grid-cols-3 gap-4 w-[275px] bg-slate-500 rounded-lg">
                <Pad id="Q" src='/audio/Heater-3.mp3' setKeyPress={setKeyPress} />
                <Pad id="W" src='/audio/Heater-4.mp3' setKeyPress={setKeyPress} />
                <Pad id="E" src='/audio/Heater-1.mp3' setKeyPress={setKeyPress} />
                <Pad id="A" src='/audio/Heater-2.mp3' setKeyPress={setKeyPress} />
                <Pad id="S" src='/audio/kicknhat.mp3' setKeyPress={setKeyPress} />
                <Pad id="D" src='/audio/kicknhat.mp3' setKeyPress={setKeyPress} />
                <Pad id="Z" src='/audio/kicknhat.mp3' setKeyPress={setKeyPress} />
                <Pad id="X" src='/audio/kicknhat.mp3' setKeyPress={setKeyPress} />
                <Pad id="C" src='/audio/kicknhat.mp3' setKeyPress={setKeyPress} />
            </div>
        )
    } else {
        return (
            <div className=" mx-6 my-1 py-12 px-4 grid grid-cols-3 gap-4 w-[275px] bg-slate-500 rounded-lg">
                <Pad id="Q" src='' setKeyPress={setKeyPress} />
                <Pad id="W" src='' setKeyPress={setKeyPress} />
                <Pad id="E" src='' setKeyPress={setKeyPress} />
                <Pad id="A" src='' setKeyPress={setKeyPress} />
                <Pad id="S" src='' setKeyPress={setKeyPress} />
                <Pad id="D" src='' setKeyPress={setKeyPress} />
                <Pad id="Z" src='' setKeyPress={setKeyPress} />
                <Pad id="X" src='' setKeyPress={setKeyPress} />
                <Pad id="C" src='' setKeyPress={setKeyPress} />
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