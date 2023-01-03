import { FC } from "react";
import { PowerButtonProps } from "../Interfaces";

const PowerButton: FC<PowerButtonProps> = ({isOn, setIsOn}) => {
    const handleClick = () => {
        isOn ? setIsOn(false) : setIsOn(true);
    }

    return (
        <div onClick={handleClick} className="m-auto bg-slate-400 border-[1px] border-black rounded-md w-14 h-10 shadow-md hover:shadow-xl active:shadow-2xl active:bg-slate-500">
            <p className="m-1 font-semibold">{isOn ? "On" : "Off" }</p>
        </div>
    );
}

export default PowerButton