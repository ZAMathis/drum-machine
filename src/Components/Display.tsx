import { DisplayProps } from "../Interfaces"
import DrumPads from "./DrumPads"

export default function Display({id}: DisplayProps) {
    return (
        <div id={id}>
            <DrumPads />
        </div>
    )
}