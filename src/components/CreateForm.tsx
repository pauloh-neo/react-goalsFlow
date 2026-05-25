import { type Dispatch, type SetStateAction, type SubmitEvent } from "react";
import Button from "./Button";

type CreateFormProps = {
    goal: string;
    description: string;
    setGoal: Dispatch<SetStateAction<string>>;
    setDescription: Dispatch<SetStateAction<string>>;
    handleCreateGoal: () => void;
}

export function CreateForm({goal, description, setGoal, setDescription, handleCreateGoal}:CreateFormProps){

    // const [goal, setGoal] = useState<string>("");
    // const [description, setDescription] = useState<string>("");

    function handleSubmit(event: SubmitEvent){
        event.preventDefault();
        handleCreateGoal();
    }
    

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-7">
            <div>
                <input value={goal}
                onChange={(e) => setGoal(e.currentTarget.value)}
                maxLength={10}
                className="
                text-gray-800 w-full  px-4 py-3 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
              focus:border-blue-500 transition" placeholder="Enter your goals" type="text" name="goal" id="goal" />
            </div>
            <div>
                <input value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
                maxLength={25}
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