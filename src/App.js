import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'

function App() {
    const [tasks] = useState([
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
  return (
    <div className="container">
        <Header title='Tasks Record'/>
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
