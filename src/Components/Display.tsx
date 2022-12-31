import { DisplayProps } from "../Interfaces"
import DrumPads from "./DrumPads"

export default function Display({id}: DisplayProps) {
    return (
        <div id={id} className=" my-[25vh] p-2 bg-slate-300 border-4 border-red-700 ">
            <div>
                <DrumPads />
            </div>
        </div>
    )
}