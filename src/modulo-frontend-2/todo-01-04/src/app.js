import { useState } from "react";
import TaskInput from "./task-input";
import TaskList from "./task-list";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [archivedTasks, setArchivedTasks] = useState([]);

  const handleTaskInputOnChange = e => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput !== '') {
      const newTask = { description: taskInput, completed: false };

      setTaskInput('');
      setTasks([
        ...tasks,
        newTask,
      ]);
    }
  };

  const completeTask = (idxToComplete) => {
    const newTasks = tasks.map((task, idx) => {
      if (idx === idxToComplete) {
        return {
          description: task.description,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(newTasks);
  };

  const deleteTask = idxToDelete => {
    setTasks(tasks.filter((_, idx) => idx !== idxToDelete));
  };

  const archiveTask = idxToArchive => {
    setArchivedTasks([...archivedTasks, tasks.find((_, idx) => idx === idxToArchive)]);
    setTasks(tasks.filter((_, idx) => idx !== idxToArchive));
  };

  const deleteAll = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <main style={{ display: 'flex' }}>

      {/* COLUMN 1 */}
      <div>
        {/* TITLE */}
        <h1>
          Lista de tarefas
        </h1>

        {/* INPUT */}
        <section>
          <TaskInput
            handleTaskInputOnChange={handleTaskInputOnChange}
            taskInput={taskInput}
            addTask={addTask}
          />
          <button onClick={deleteAll}>🚮 Limpar tudo</button>
        </section>

        {/* TASKS */}
        <section>
          <TaskList
            tasks={tasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
            archiveTask={archiveTask}
          />
        </section>
      </div>

      {/* COLUMN 2 */}
      <div style={{ marginLeft: '2rem' }}>

        {/* TITLE */}
        <h1>
          Arquivo
        </h1>

        {/* HISTORY */}
        <section style={{ border: '1px solid black', width: '30vw' }}>
          <ol>
            {
              archivedTasks.map(archivedTask => (
                <li>{archivedTask.description}</li>
              ))
            }
          </ol>
        </section>
      </div>
    </main>
  );
}

export default App;
