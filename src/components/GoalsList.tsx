import { type Goals } from "../App";
import Button from "./Button";

type GoalsListProps = {
    goals: Goals[];
    handleDelete: (id:string) => void;
    handleIsDone: (id:string) => void;
}

export function GoalsList({goals, handleDelete, handleIsDone}:GoalsListProps){

    // const arrNum = Array.from({length: 5}, (_, i) => i)
    // console.log(arrNum)

    return(
        <ul className="bg-sky-100 grid grid-cols-2 gap-3 p-3 rounded-2xl overflow-y-auto">
            {goals.map((goal) => (
                <li className="bg-sky-300 p-4 flex justify-between shadow-sky-200 shadow-xl" key={goal.id}>
                    <div className="flex flex-col gap-1">
                        <h2 className={`${goal.isDone? "text-xl font-semibold text-gray-800 line-through" : "text-xl font-semibold"}`}>{goal.title}</h2>
                        <p className="text-gray-700">{goal.description}.</p>
                        <span>{new Date(goal.CreatedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={() => handleIsDone(goal.id)} variant="primary" size="md">Done</Button>
                        <Button onClick={() => handleDelete(goal.id)} variant="secondary" size="md">Delete</Button>
                    </div>
                </li>
            ))}
        </ul>
    )
}