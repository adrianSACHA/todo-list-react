import Form from "./Form";
import Tasks from "./Tasks";


const tasks = [
  {id: 1, content: "przejść na REACT", done: false }, 
  {id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="container">
        <header>
            <h1 className="container__header">Lista zadań</h1>
        </header>
        <section className="section">
            <h2 className="section__header">Dodaj nowe zadanie</h2>
            <div className="section__body">
                <Form />
            </div>
        </section>
        <section className="section__tasksList">
            <div className="tasksList">
                <h2 className="tasksList__header">
                    Lista zadań
                </h2>
                <div className="tasksList__buttons">
                </div>
            </div>
            <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </section>
    </main>
  );
}

export default App;
