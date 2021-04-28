import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Task Number One',
            day: 'Apr 28 2021',
            reminder: true,
        },
        {
            id: 2,
            text: 'Task Number Two',
            day: 'Apr 29 2021',
            reminder: true,
        },
        {
            id: 3,
            text: 'Task Number Three',
            day: 'Apr 30 2021',
            reminder: false,
        },
    ])

    //Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="container">
        <Header title='Tasks Record'/>
        <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
