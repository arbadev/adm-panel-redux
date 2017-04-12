/*
 * CONSTANTS
*/

export const DISPLAY_TWEET_INPUT = 'DISPLAY_TWEET_INPUT'
export const CLOSE_TWEET_INPUT = 'CLOSE_TWEET_INPUT'
export const ADD_TWEET = 'ADD_TWEET'
export const PRESS_FAVORITE = 'PRESS_FAVORITE'
export const PRESS_RETWEET = 'PRESS_RETWEET'
export const ADD_USER_FAVORITE = 'ADD_USER_FAVORITE'
export const ADD_USER_RETWEET = 'ADD_USER_RETWEET'
export const REMOVE_USER_FAVORITE = 'REMOVE_USER_FAVORITE'
export const REMOVE_USER_RETWEET = 'REMOVE_USER_RETWEET'

/*
 * ACTIONS CREATORS
*/

export const displayTweetInput = (user) => {
  return {
    type: DISPLAY_TWEET_INPUT,
    user,
  }
}

export const closeTweetInput = (user) => {
  return {
    type: CLOSE_TWEET_INPUT,
    user,
  }
}

export const addTweet = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet,
  }
}

export const pressFavorite = (index) => {
  return {
    type: PRESS_FAVORITE,
    index,
  }
}

export const pressRetweet = (index) => {
  return {
    type: PRESS_RETWEET,
    index,
  }
}

export const addUserFavorite = (message) => {
  return {
    type: ADD_USER_FAVORITE,
    message,
  }
}

export const addUserRetweet = (message) => {
  return {
    type: ADD_USER_RETWEET,
    message,
  }
}

export const removeUserFavorite = (index) => {
  return {
    type: REMOVE_USER_FAVORITE,
    index,
  }
}

export const removeUserRetweet = (index) => {
  return {
    type: REMOVE_USER_RETWEET,
    index,
  }
}
