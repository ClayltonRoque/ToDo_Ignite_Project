import styles from '../components/tasks.module.css'
import img from '../assets/Clipboard.svg'
import deleteImg from '../assets/LayerDelete.svg'



export function Tasks( props ) {
    console.log(props)
    
       return (
            <div>
                {
                  props.tasks.length ? props.tasks.map( task => {          
                    return (
                        <footer className={styles.footerOnTask}>
                            <div className={styles.checkBox}>
                                <input type="checkbox" />
                                </div>
                            <div>
                                <p id={styles.paraghaphOnTask}> 
                                    {task} 
                                </p>
                            </div> 
                            <img src={deleteImg}/> 
                        </footer>
                    ) 
                }) : (
                        <footer className={styles.footerNoTask}>
                            <div>
                                <img src={img} alt="" />
                                <p id={styles.paraghaphNoTask}>Você ainda não tem tarefas cadastradas</p>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div> 
                        </footer>
               )} 

            </div>   
         )
}



  