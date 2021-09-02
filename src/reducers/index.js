import { combineReducers } from 'redux'
import gameReducer from './gamesReducer'
import detailReducer from './detailReducer'

const rootReducer = combineReducers({
    details: detailReducer,
    games: gameReducer,
})

export default rootReducer