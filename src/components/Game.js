import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { loadDetails } from '../actions/detailAction'
const Game = ({ gameName, image, released, id }) => {
  const dispatch = useDispatch()
  const loadDetailHandler = () => {
    dispatch(loadDetails(id))
  }
  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{gameName}</h3>
      <p>{released}</p>
      <img src={image} alt="" />
    </StyledGame>
  )
}
const StyledGame = styled(motion.div)`
  cursor: pointer;
  text-align: center;
  font-family: sans-serif;
  box-shadow: 0px 5px 10px #ccc;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 0.5rem;

  img {
    width: 100%;
    height: 35vh;
    object-fit: cover;
    border-radius: 0 0 0.5rem 0.5rem;
  }
`

export default Game
