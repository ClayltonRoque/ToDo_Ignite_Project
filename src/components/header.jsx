import img  from '../assets/rocket.svg'
// import iconeButton from '../assets/plus.svg'
import styles from '../components/header.module.css'
// import { useState } from 'react'
// import { Tasks } from './tasks'

export function Header() {
    return (
        <div>
        <header className={styles.header}>
            <img className={styles.logo} src={img} alt="" />
            to<span>do</span>
        </header>  
        </div>  
    )

  
}