import React from 'react'
import { Link } from 'react-router'
import styles from './profileBar.css'

const ProfileBar = (props) => {
  return (
    <div className={styles.root}>
      <Link to="/profile">
        <figure>
          <img alt="Avatar" className={styles.avatar} src={props.picture} />
        </figure>
      </Link>
      <span className={styles.username}>Hi @{props.username}!</span>
      <button onClick={props.onOpenText} className={styles.button}>
        <span className="fa fa-lg fa-edit" /> Tweet!
      </button>
    </div>
  )
}

ProfileBar.propTypes = {
  picture: React.PropTypes.string,
  username: React.PropTypes.string,
  onOpenText: React.PropTypes.func,
}

export default ProfileBar
