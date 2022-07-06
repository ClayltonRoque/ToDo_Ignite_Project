import { Header } from './components/header'
import { HeaderTask } from './components/headerTask'
import { Tasks } from './components/tasks'
import styles from '../src/app.module.css'
import { useState } from 'react'
import iconeButton from './assets/plus.svg'


export function App() {

    const [newTask, setNewTask] = useState([
    ])

    const [newTaskText, setNewTaskText] = useState("")
    
    function handleCreateNewTask(event) {
        event.preventDefault()

        setNewTask([...newTask, newTaskText])
        setNewTaskText("")
}   
    function handleCreateNewTaskText(event) {
        setNewTaskText(event.target.value)
        console.log(setNewTaskText)
    }

    return (
       <div>
            <Header />
            <form onSubmit={handleCreateNewTask} className={styles.newTask}>
                <input onChange={handleCreateNewTaskText} value={newTaskText} placeHolder='Adicionar uma nova tarefa' />
                <button type='submit'>Criar<img className={styles.iconePlus} src={iconeButton}></img></button>
            </form>
            
            <main>
                <HeaderTask count={newTask} />
                <div>
                    <Tasks key={newTask} tasks={newTask} /> 
                </div>
            </main>
       </div> 
    )
}

// {tasks.map(task => {
//     console.log(tasks)
//     return <Tasks 
//     key={task.id}
//     content={task.content}
//     boolean={task.boolean}
//     /> 
// })}