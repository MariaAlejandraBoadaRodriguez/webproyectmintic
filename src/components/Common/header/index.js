import React from 'react'
import styles from './header.module.css'



const Header = props => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>STORE</h2>
        </div>
    </div>
  )
}

export default Header
