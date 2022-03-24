import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import logo from '../img/logo.svg'
// REDUX
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../actions/gameAction'
import { fade } from '../animation'

const Nav = () => {
  const dispatch = useDispatch()
  // State
  const [inputText, setInputText] = useState('')
  // Handler
  const inputHandler = (e) => {
    setInputText(e.target.value)
  }
  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(inputText))
    setInputText('')
  }
  const clearSearch = () => {
      dispatch({type: 'CLEAR_SEARCH'})
  }
  

  return (
    <StyledNav variants={fade} initial='hidden' animate='show'>
      <Logo onClick={clearSearch}>
        <img src={logo} alt="" />
        <h3>Ignite</h3>
      </Logo>
      <form>
        <input onChange={inputHandler} value={inputText} type="text" />
        <button onClick={submitSearch}>search</button>
      </form>
    </StyledNav>
  )
}
const StyledNav = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 140%;
  button,
  input {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    outline: none;
  }
  button {
    background: #ff7676;
    border-radius: 0 8px 8px 0;
    color: #fff;
    cursor: pointer;
  }
  input {
    width: 20rem;
    color: #333;
    box-shadow: 0 3px 8px #ccc;
    border-radius: 8px 0 0 8px;
  }
`

const Logo = styled(motion.div)`
  padding: 1rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
`
export default Nav
