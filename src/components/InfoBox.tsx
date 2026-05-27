import type { ReactNode } from "react"

type InfoBoxProps = {
    children: ReactNode;
    mode: 'hint' | 'warning'
}

export function InfoBox({children, mode}: InfoBoxProps){

    if(mode === 'hint'){
        return(
            <div className="bg-slate-50 p-4 rounded-2xl">
                {children}
            </div>
        )
    }

    return(
        <div className="bg-slate-50 p-4 rounded-2xl">
            {children}
        </div>
    )
}