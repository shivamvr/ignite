const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  input: ''
}
const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      }
    case 'FETCH_SEARCH':
      return {
        ...state,
        searched: action.payload.searched,
      }
    case 'CLEAR_SEARCH':
      return {
        ...state,
        searched: [],
      }
    case 'INPUT_TEXT':
      return {
        ...state,
        input: action.payload
      }
    default:
      return { ...state }
  }
}

export default gameReducer
