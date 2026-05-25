import { useState } from "react";
import { CreateForm } from "./components/CreateForm"
import { Header } from "./components/Header"
import { GoalsList } from "./components/GoalsList";

export type Goals = {
    id: string;
    title: string;
    description: string;
    isDone: boolean;
    CreatedAt: string;
}

function App() {
  const [goal, setGoal] = useState<string>("");
  const [goalsList, setGoalsList] = useState<Goals[]>([])
  const [description, setDescription] = useState<string>("")

  function handleCreateGoal(){

    const newGoal: Goals = {
      id: crypto.randomUUID(),
      title: goal,
      description: description,
      isDone: false,
      CreatedAt: new Date().toISOString(),
    }
    
    setGoalsList((goal) => [...goal, newGoal])
  }

  function handleDelete(id: string){
    setGoalsList((prevGoal) => prevGoal.filter((goal) => goal.id !== id))
  }

  function handleIsDone(id: string){
    setGoalsList((prev) => prev.map((goal) => 
      goal.id == id ? {...goal, isDone: !goal.isDone} : goal
    ))
  } 

  return (
    <>
      <main className="h-screen bg-sky-200 flex justify-center items-center">
        <section className="w-200 h-200 bg-sky-500 flex flex-col p-3 gap-10 rounded-xl shadow-blue-950 shadow-2xl">
          <Header title="Goals Flow"/>
          <CreateForm goal={goal} setGoal={setGoal} description={description} setDescription={setDescription} handleCreateGoal={handleCreateGoal}/>
          <GoalsList goals={goalsList} handleDelete={handleDelete} handleIsDone={handleIsDone}/>
        </section>
      </main>
    </>
  )
}

export default App
