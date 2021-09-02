import React, { useEffect } from 'react'
//COMPONENTS
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gameAction'
//STYLED COMPONENTS & ANIMATION
import styled from 'styled-components'
import {motion} from 'framer-motion'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  },[dispatch])
 const {popular, upcoming, newGames} = useSelector(state => state.games)
  console.log('upcoming:', upcoming)
  return (
    <GameList>
      <GameDetail />
      <h2>Upcoming Games</h2>
      <Games>
      { upcoming.map(game => <Game gameName={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />) }
      </Games>
    </GameList>
  )
}
const GameList = styled(motion.div)`
padding: 1rem 5rem
`   
const Games = styled(motion.div)`
 min-height: 80vh;
 padding: 5rem 0;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
 grid-column-gap: 1rem;
 grid-row-gap: 3rem;
`   
export default Home
