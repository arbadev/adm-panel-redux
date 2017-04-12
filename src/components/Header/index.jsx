import React from 'react'

import styles from './header.css'

const Header = () => {
  return (
    <div>
      <header className={styles.root}>
        <h1 className={styles.logo}> Reactrr </h1>
      </header>
    </div>
  )
}

export default Header
