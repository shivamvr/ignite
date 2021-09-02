import axios from 'axios'
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from '../api'

//Action creator

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl())
  const upcomingGamesData = await axios.get(upcomingGamesUrl())
  const newGamesData = await axios.get(newGamesUrl())
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  })
}
