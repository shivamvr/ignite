import axios from 'axios'
import { gameDetailsUrl, gameScreenshotUrl } from '../api'

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL'
  })
  const detailData = await axios.get(gameDetailsUrl(id))
  const screenData = await axios.get(gameScreenshotUrl(id))

  dispatch({
    type: 'GET_DETAIL',
    payload: { game: detailData.data, screen: screenData.data },
  })
}
