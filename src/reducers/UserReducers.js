import update from 'immutability-helper'
import { DISPLAY_TWEET_INPUT, CLOSE_TWEET_INPUT, ADD_USER_FAVORITE, ADD_USER_RETWEET, REMOVE_USER_FAVORITE, REMOVE_USER_RETWEET } from '../actions'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_TWEET_INPUT:
      return update(state, {
        onOpenText: { $set: !action.user.onOpenText },
      })
    case CLOSE_TWEET_INPUT:
      return update(state, {
        onOpenText: { $set: false },
      })
    case ADD_USER_FAVORITE:
      return update(state, {
        favorites: { $push: [action.message] },
      })
    case ADD_USER_RETWEET:
      return update(state, {
        retweets: { $push: [action.message] },
      })
    case REMOVE_USER_FAVORITE:
      return update(state, {
        favorites: { $splice: [[action.index, 1]] },
      })
    case REMOVE_USER_RETWEET:
      return update(state, {
        retweets: { $splice: [[action.index, 1]] },
      })
    default:
      return state
  }
}
