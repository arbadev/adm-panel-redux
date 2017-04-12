import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid'

import { displayTweetInput, closeTweetInput, addTweet } from '../../actions'

import MessageList from '../../components/MessageList'
import ProfileBar from '../../components/ProfileBar'
import InputText from '../../components/InputText'

class Main extends Component {

  constructor(props) {
    super(props)
    this.handleOpenText = this.handleOpenText.bind(this)
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleSendText = this.handleSendText.bind(this)
  }

  handleOpenText(event) {
    event.preventDefault()
    this.props.displayTweetInput(this.props.user)
  }

  handleCloseText(event) {
    event.preventDefault()
    this.props.closeTweetInput(this.props.user)
  }

  handleSendText(event) {
    event.preventDefault()
    const newMessage = {
      id: uuid.v4(),
      username: this.props.user.email.split('@')[0],
      displayName: this.props.user.displayName,
      picture: this.props.user.photoUrl,
      date: Date.now(),
      text: event.target.text.value,
      retweets: 0,
      favorites: 0,
    }
    this.props.addTweet(newMessage)
    this.props.closeTweetInput(this.props.user)
  }

  renderOpenText() {
    if (this.props.user.onOpenText) {
      return (
        <InputText
          onSendText={this.handleSendText}
          onCloseText={this.handleCloseText}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <ProfileBar
          picture={this.props.user.photoUrl}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList
          messages={this.props.messages}
        />
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
      displayTweetInput,
      closeTweetInput,
      addTweet,
    }, dispatch)
}

Main.propTypes = {
  messages: React.PropTypes.array,
  user: React.PropTypes.object,
  onOpenText: React.PropTypes.bool,
  displayTweetInput: React.PropTypes.func,
  closeTweetInput: React.PropTypes.func,
  addTweet: React.PropTypes.func,
}

export default connect(mapStateToProps, matchDispatchToProps)(Main)
