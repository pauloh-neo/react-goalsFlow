import type { ReactNode } from "react"

type Variant = "low" | "medium" | "high";

type HintBoxProps = {
    children: ReactNode;
    mode: 'hint';
}
type WarningBoxProps = {
    children: ReactNode;
    mode: 'warning';
    severity: Variant;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps


export function InfoBox(props: InfoBoxProps){
    const {children, mode} = props

    const variants: Record<Variant, string> = {
        low:
        "border border-green-300 bg-green-50 text-green-800 rounded-xl p-4",
        medium:
        "border border-yellow-300 bg-yellow-100 text-yellow-800 rounded-xl p-4",
        high:
        "border border-red-300 bg-red-100 text-red-800 rounded-xl p-4 shadow-md",
  };

    if(mode === 'hint'){
        return(
            <div className="bg-slate-50 p-4 rounded-2xl">
                {children}
            </div>
        )
    }

    const {severity} = props;

    return(
        <div className={`p-4 rounded-2xl ${variants[severity]}`}>
            {children}
        </div>
    )
}