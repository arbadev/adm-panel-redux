import React from 'react'
import styles from './profile.css'

const Profile = (props) => {
  return (
    <div className={styles.root}>
      <img alt="Profile Pic" className={styles.avatar} src={props.picture} />
      <span className={styles.name} /> {props.displayName}
      <ul className={styles.data}>
        <li>
          <span className="fa fa-user" /> {props.username}
        </li>
        <li>
          <span className="fa fa-envelope" /> {props.emailAddress}
        </li>
        <li>
          <span className="fa fa-map-marker" /> {props.location}
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  picture: React.PropTypes.string,
  username: React.PropTypes.string,
  emailAddress: React.PropTypes.string,
  location: React.PropTypes.string,
  displayName: React.PropTypes.string,
}

export default Profile
