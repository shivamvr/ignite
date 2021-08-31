import { combineReducers } from 'redux'
import gameReducer from './gamesReducer'

const rootReducer = combineReducer({
    games: gameReducer,
})

export default rootReducer