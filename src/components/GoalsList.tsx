import { type Goals } from "../App";
import Button from "./Button";

type GoalsListProps = {
    goals: Goals[],
    handleDelete:  (id: string) => void;
}

export function GoalsList({goals, handleDelete}:GoalsListProps){

    // const arrNum = Array.from({length: 5}, (_, i) => i)
    // console.log(arrNum)

    return(
        <ul className="bg-sky-100 grid grid-cols-2 gap-3 p-3 rounded-2xl overflow-y-auto">
            {goals.map((goal) => (
                <li className="bg-sky-300 p-4 flex justify-between shadow-sky-200 shadow-xl" key={goal.id}>
                    <div>
                        <h2>{goal.title}</h2>
                        <p>{goal.description}.</p>
                    </div>
                    <Button onClick={() => handleDelete(goal.id)} variant="secondary" size="md">Delete</Button>
                </li>
            ))}
        </ul>
    )
}