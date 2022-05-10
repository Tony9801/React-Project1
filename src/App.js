import React from 'react'
import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
        },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
        }
])
  // delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title='Hello World'/>
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask}
      onToggle={toggleReminder}/> : 'No Tasks to show'}
    </div>
  );
}

export default App;
