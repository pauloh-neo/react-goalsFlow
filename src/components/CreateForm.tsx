import Button from "./Button";

export function CreateForm(){
    return(
        <form className="flex flex-col gap-3">
            <div>
                <input className=" text-gray-800 w-full  px-4 py-3 border border-gray-300 rounded-lg 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-blue-500 transition" placeholder="Enter your goals" type="text" name="goal" id="goal" />
            </div>
            <div>
                <input className="text-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-blue-500 transition" placeholder="Description" type="text" name="description" id="description" />
            </div>
            <Button variant="primary">
                Create
            </Button>
        </form>
    )
}