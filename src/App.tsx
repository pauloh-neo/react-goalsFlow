import { Header } from "./components/Header"

function App() {
  

  return (
    <>
      <main className="h-screen bg-sky-200 flex justify-center items-center">
        <section className="w-125 h-125 bg-sky-500 flex justify-center p-3 rounded-xl shadow-blue-950 shadow-2xl">
          <Header title="Goals Flow"/>
        </section>
      </main>
    </>
  )
}

export default App
