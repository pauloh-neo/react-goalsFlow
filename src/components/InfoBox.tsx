import type { ReactNode } from "react"

type InfoBoxProps = {
    children: ReactNode;
    mode: 'hint' | 'warning'
}

export function InfoBox({children, mode}: InfoBoxProps){

    if(mode === 'hint'){
        return(
            <span>
                {children}
            </span>
        )
    }

    return(
        <span>
            {children}
        </span>
    )
}