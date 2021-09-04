import React, { useEffect } from 'react'
//COMPONENTS
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'
import Nav from '../components/Nav'

//REDUX
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gameAction'
//STYLED COMPONENTS & ANIMATION
import styled from 'styled-components'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
//Router
import {useLocation} from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]
 
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  const { popular, upcoming, newGames } = useSelector((state) => state.games)
  // const {isLoading} = useSelector(state => state.details)
  return (
    <GameList>
      <Nav />
      <AnimateSharedLayout>
      <AnimatePresence> {pathId && <GameDetail pathId={pathId} />}</AnimatePresence> 
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            gameName={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
            />
            ))}
      </Games>
            </AnimateSharedLayout>
    </GameList>
  )
}
const GameList = styled(motion.div)`
  padding: 1rem 5rem;
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
