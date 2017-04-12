import uuid from 'uuid'
import update from 'immutability-helper'

import { ADD_TWEET, PRESS_FAVORITE, PRESS_RETWEET } from '../actions'


const messages = [
  {
    id: uuid.v4(),
    text: 'Tengo mucho dinero',
    picture: 'http://icons.iconarchive.com/icons/mattahan/ultrabuuf/128/Comics-Ironman-Red-icon.png',
    displayName: 'Iron Man',
    username: 'Tony Stark',
    date: Date.now() - 360000,
    retweets: 0,
    favorites: 0,
    pressRetweet: false,
    pressFavorite: false,
  },
  {
    id: uuid.v4(),
    text: 'Soy dracula 2.0',
    picture: 'https://a.wattpad.com/useravatar/xxbatmanbabyxx.128.904685.jpg',
    displayName: 'Batman',
    username: 'Bruce Wayne',
    date: Date.now() - 240000,
    retweets: 0,
    favorites: 0,
    pressRetweet: false,
    pressFavorite: false,
  },
  {
    id: uuid.v4(),
    text: 'Yo HULK yo GENTE!!',
    picture: 'http://files.gamebanana.com/img/ico/sprays/hulk_9.png',
    displayName: 'Hulk',
    username: 'Robert Bruce Banner',
    date: Date.now(),
    retweets: 0,
    favorites: 0,
    pressRetweet: false,
    pressFavorite: false,
  },
]

export default (state = messages, action) => {
  switch (action.type) {
    case ADD_TWEET:
      return [
        ...state,
        action.tweet,
      ]
    case PRESS_FAVORITE: {
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          favorites: (state[action.index].pressFavorite ?
            state[action.index].favorites - 1 :
            state[action.index].favorites + 1),
          pressFavorite: !state[action.index].pressFavorite,
        }),
        ...state.slice(action.index + 1),
      ]
    }
    case PRESS_RETWEET: {
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          retweets: (state[action.index].pressRetweet ?
            state[action.index].retweets - 1 :
            state[action.index].retweets + 1),
          pressRetweet: !state[action.index].pressRetweet,
        }),
        ...state.slice(action.index + 1),
      ]
    }
    default:
      return state
  }
}
