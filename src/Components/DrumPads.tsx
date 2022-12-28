import Pad from "./Pad"

export default function DrumPads() {
    
    return (
        <>
            <Pad id="Q" src='/audio/Heater-3.mp3'/>
            <Pad id="W" src='/audio/Heater-4.mp3'/>
            <Pad id="E" src='/audio/Heater-1.mp3'/>
            <Pad id="A" src='/audio/Heater-2.mp3'/>
            <Pad id="S" src='/audio/kicknhat.mp3'/>
            <Pad id="D" src='/audio/kicknhat.mp3'/>
            <Pad id="Z" src='/audio/kicknhat.mp3'/>
            <Pad id="X" src='/audio/kicknhat.mp3'/>
            <Pad id="C" src='/audio/kicknhat.mp3'/>
        </>
    )
}

/*  
 * 
 * Q, W, E, A, S, D, Z, X, C. 
 * The drum pads MUST be in this order.
 * 
*/