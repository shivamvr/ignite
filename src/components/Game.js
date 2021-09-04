import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { loadDetails } from '../actions/detailAction'
import { smallImage } from '../util'
//Router
import { Link} from 'react-router-dom'

const Game = ({ gameName, image, released, id }) => {
  const dispatch = useDispatch()
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden'
    dispatch(loadDetails(id))
  }
  return (
    <StyledGame layoutId={id.toString()} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
      <motion.h3 layoutId={`title ${id.toString()}`}>{gameName}</motion.h3>
      <p>{released}</p>
      <motion.img layoutId={`image ${id.toString()}`} src={smallImage(image,640)} alt="" />
      </Link>
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
  padding-top: 0.5rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 35vh;
    object-fit: cover;
  }
`

export default Game
