import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import logo from '../img/logo.svg'
// REDUX
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../actions/gameAction'

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
    return (
      <StyledNav>
          <Logo>
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
button{padding: .5rem 1rem; border: 1px solid #ccc;  outline: none; background: #ff7676;border-radius: 0 8px 8px 0; color: #fff}
input{width: 20rem; padding: .5rem 1rem; outline: none; color: #333; box-shadow: 0 3px 8px #ccc; border-radius: 8px 0 0 8px; border: 1px solid #ccc}
`

const Logo = styled(motion.div)`
padding: 1rem;
display: flex;
justify-content: center;
cursor: pointer;
`
export default Nav