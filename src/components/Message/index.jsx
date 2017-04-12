import React, { Component } from 'react'
import moment from 'moment'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import _ from 'lodash'
import { pressFavorite, pressRetweet, addUserFavorite, addUserRetweet, removeUserFavorite, removeUserRetweet } from '../../actions'

import styles from './message.css'

class Message extends Component {
  constructor(props) {
    super(props)
    this.onPressFavorite = this.onPressFavorite.bind(this)
    this.onPressRetweet = this.onPressRetweet.bind(this)
    this.onPressReply = this.onPressReply.bind(this)
  }

  onPressFavorite(event) {
    event.preventDefault()
    this.props.pressFavorite(this.props.index)
    if (_.some(this.props.user.favorites, { id: this.props.id })) {
      const index = _.findIndex(this.props.user.favorites, { id: this.props.id })
      this.props.removeUserFavorite(index)
    } else {
      this.props.addUserFavorite(this.props.messages[this.props.index])
    }
  }

  onPressRetweet(event) {
    event.preventDefault()
    this.props.pressRetweet(this.props.index)
    if (_.some(this.props.user.retweets, { id: this.props.id })) {
      const index = _.findIndex(this.props.user.retweets, { id: this.props.id })
      this.props.removeUserRetweet(index)
    } else {
      this.props.addUserRetweet(this.props.messages[this.props.index])
    }
  }

  onPressReply(event) {
    event.preventDefault()
    console.log('a reply', this.props.displayName)
  }

  render() {
    const dateFormat = moment(this.props.date).fromNow()
    const userLink = `/user/${this.props.id}`
    return (
      <div className={styles.root}>
        <div className={styles.user}>
          <Link to={userLink}>
            <figure>
              <img alt="Avatar" className={styles.avatar} src={this.props.picture} />
            </figure>
          </Link>
          <span className={styles.displayName} >{this.props.displayName}</span>
          <span className={styles.userName} >{this.props.username}</span>
          <span className={styles.date} >{dateFormat}</span>
        </div>
        <h3>{this.props.text}</h3>
        <div className={styles.buttons}>
          <div
            className={styles.icon}
            onClick={this.onPressReply}
          >
            <span className="fa fa-reply" />
          </div>
          <div
            className={(this.props.isPressRetweet) ? styles.rtGreen : ''}
            onClick={this.onPressRetweet}
          >
            <span className="fa fa-retweet" />
            <span className={styles.num}>{this.props.numRetweets}</span>
          </div>
          <div
            className={(this.props.isPressFavorite) ? styles.favYellow : ''}
            onClick={this.onPressFavorite}
          >
            <span className="fa fa-star" />
            <span className={styles.num}>{this.props.numFavorites}</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    user: state.user,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      pressFavorite,
      pressRetweet,
      addUserFavorite,
      addUserRetweet,
      removeUserFavorite,
      removeUserRetweet,
    }, dispatch)
}

Message.propTypes = {
  messages: React.PropTypes.array,
  user: React.PropTypes.object,
  id: React.PropTypes.string,
  text: React.PropTypes.string,
  picture: React.PropTypes.string,
  displayName: React.PropTypes.string,
  date: React.PropTypes.number,
  username: React.PropTypes.string,
  numRetweets: React.PropTypes.number,
  numFavorites: React.PropTypes.number,
  pressRetweet: React.PropTypes.func,
  pressFavorite: React.PropTypes.func,
  addUserRetweet: React.PropTypes.func,
  addUserFavorite: React.PropTypes.func,
  removeUserRetweet: React.PropTypes.func,
  removeUserFavorite: React.PropTypes.func,
  isPressFavorite: React.PropTypes.bool,
  isPressRetweet: React.PropTypes.bool,
  index: React.PropTypes.number,
}

export default connect(mapStateToProps, matchDispatchToProps)(Message)
