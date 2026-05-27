import type { ReactNode } from "react";
import { type Goals } from "../App";
import { InfoBox } from "./InfoBox";
import { Check, Trash } from "lucide-react";

type GoalsListProps = {
    goals: Goals[];
    handleDelete: (id:string) => void;
    handleIsDone: (id:string) => void;
}

export function GoalsList({goals, handleDelete, handleIsDone}:GoalsListProps){

    // const arrNum = Array.from({length: 5}, (_, i) => i)
    // console.log(arrNum)

    if(goals.length === 0){
        return(
            <InfoBox mode="hint">
                <p>Start adding your goals!</p>
            </InfoBox>
        )
    }

    let warningBox: ReactNode;

    if(goals.length >= 4){
        warningBox = (
            <InfoBox mode="warning">
                <p>You're collecting a lot of goals. Don't put too much on your plate! </p>
            </InfoBox>
        )
    }

    return(
        <>
            {warningBox}
            <ul className="bg-sky-100 grid grid-cols-2 gap-3 p-3 rounded-2xl overflow-y-auto">
                {goals.map((goal) => (
                    <li className="bg-slate-600 p-4 flex justify-between shadow-slate-300 shadow-xl rounded-2xl" key={goal.id}>
                        <div className="flex flex-col gap-1 ">
                            <h2 className={`${goal.isDone? "text-xl font-semibold text-gray-100 line-through" : "text-gray-100 text-xl font-semibold"}`}>{goal.title}</h2>
                            <p className="text-gray-400">{goal.description}.</p>
                            <span className="text-yellow-200">{new Date(goal.CreatedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex gap-2">
                            <button >
                                <Check className="text-gray-50 cursor-pointer hover:text-gray-300" size={24}/>
                            </button>
                            <button>
                                <Trash className="text-gray-50 cursor-pointer hover:text-gray-300" size={24}/>
                            </button>
                            {/* <Button onClick={() => handleIsDone(goal.id)} variant="primary" size="md">Done</Button>
                            <Button onClick={() => handleDelete(goal.id)} variant="secondary" size="md">Delete</Button> */}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}