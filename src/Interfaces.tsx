import React from 'react'

export interface DisplayProps {
    id: string;
}

export interface PadProps extends React.HTMLProps<HTMLAudioElement> {
    id: string;
    src: string;
    setKeyPress: Function;
    volume: number;
}

export interface DrumPadProps {
    setKeyPress: Function;
    volume: number;
    isOn: boolean;
}

export interface PowerButtonProps {
    isOn: boolean;
    setIsOn: Function;
}

export interface VolumeControlProps {
    setVolume: Function;
}