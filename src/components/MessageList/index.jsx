import React from 'react'

import Message from '../Message'
import styles from './messageList.css'

const MessageList = (props) => {
  return (
    <div className={styles.root}>
      {props.messages.map((msg, index) => {
        if (msg.id) {
          return (
            <Message
              key={msg.id}
              id={msg.id}
              text={msg.text}
              picture={msg.picture}
              displayName={msg.displayName}
              username={msg.userName}
              date={msg.date}
              numRetweets={msg.retweets}
              numFavorites={msg.favorites}
              isPressRetweet={msg.pressRetweet}
              isPressFavorite={msg.pressFavorite}
              index={index}
            />
          )
        }
        return (<p>no id</p>)
      }).reverse()}
    </div>
  )
}

MessageList.propTypes = {
  messages: React.PropTypes.array,
}

export default MessageList
