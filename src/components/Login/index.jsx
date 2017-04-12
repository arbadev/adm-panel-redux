import React from 'react'
import styles from './login.css'

const Login = (props) => {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
        We need you to log inwith your github account
        so you can read and write tweets
      </p>
      <button
        onClick={props.onAuth}
        className={styles.button}
      >
        <span className="fa fa-github" /> Github login
      </button>
    </div>
  )
}

Login.propTypes = {
  onAuth: React.PropTypes.func,
}

export default Login
