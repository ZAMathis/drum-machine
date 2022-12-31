import { DisplayProps } from "../Interfaces"
import DrumPads from "./DrumPads"

export default function Display({id}: DisplayProps) {
    return (
        <div id={id} className=" h-[300px] my-[25vh] p-2 bg-stone-200 border-4 border-red-700 ">
            <div className=" ">
                <DrumPads />
            </div>
        </div>
    )
}