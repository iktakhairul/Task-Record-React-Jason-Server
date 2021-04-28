import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTask";
import {useState} from 'react'

const App = () => {
    const [showAddTask, setShowAddTask] = useState(true)
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

    //Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000 +1)
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    //Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder =(id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder:!task.reminder } : task
            )
        )
    }

  return (
    <div className="container">
        <Header title='Tasks Record'
                onAdd={()=>setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
        />
        {showAddTask && <AddTasks onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
        /> : 'No tasks to show'}
    </div>
  );
}

export default App;
