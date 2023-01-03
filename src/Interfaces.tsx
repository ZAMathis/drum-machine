import React from 'react'

export interface DisplayProps {
    id: string;
}

export interface PadProps extends React.HTMLProps<HTMLAudioElement> {
    id: string;
    src: string;
    setKeyPress: any;
}

export interface DrumPadProps {
    setKeyPress: any;
    isOn: boolean;
}

export interface PowerButtonProps {
    isOn: boolean;
    setIsOn: any;
}