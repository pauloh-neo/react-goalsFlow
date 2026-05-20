import { useState } from "react";
import Button from "./Button";

export function CreateForm(){

    const [goal, setGoal] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    console.log(goal)

    return(
        <form className="flex flex-col gap-3">
            <div>
                <input value={goal}
                onChange={(e) => setGoal(e.currentTarget.value)}
                className="
                text-gray-800 w-full  px-4 py-3 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
              focus:border-blue-500 transition" placeholder="Enter your goals" type="text" name="goal" id="goal" />
            </div>
            <div>
                <input value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
                className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
              focus:border-blue-500 transition" placeholder="Description" type="text" name="description" id="description" />
            </div>
            <Button variant="primary">
                Create
            </Button>
        </form>
    )
}