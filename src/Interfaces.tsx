import React from 'react'

export interface DisplayProps {
    id: string;
}

export interface PadProps extends React.HTMLProps<HTMLAudioElement> {
    id: string;
    src: string;
}