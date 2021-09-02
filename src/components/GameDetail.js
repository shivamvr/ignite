import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const GameDetail = () => {
  const { screen, game } = useSelector((state) => state.details)
  console.log('screen:', screen)
  return (
    <CardShadow>
      <Detail>
        <Stats>
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <Info>
            <h3>Platform</h3>
            <Platforms>
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </Platforms>
          </Info>
        </Stats>
        <div className="media">
          <img src={game.background_image} alt="image" />
        </div>
        <Description>{`${game.description_raw}`}</Description>
        <div className="gallery">
          {screen.results.map((screen) => (
            <img key={screen.id} src={screen.image} alt="" />
          ))}
        </div>
      </Detail>
    </CardShadow>
  )
}
const CardShadow = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
width: 100%;
background: rgba(0,0,0,0.5);
min-height: 100vh;
overflow: scroll;
`
const Detail = styled(motion.div)`
width: 80%;
margin: auto;
background-color: #fff;
border-radius: 1rem;
img{
    width: 100%;
}
color: black;
padding: 2rem 5rem;
h3{
    padding: 1rem 0;
}
`
const Stats = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
`
const Info = styled(motion.div)`
text-align: center;
`
const Platforms = styled(motion.div)`
display: flex;
justify-content: space-evenly;
img{
  margin-left: 3rem;
}
`
const Description = styled(motion.div)`
color: #333;
padding: 5rem 0;
line-height: 1.8;
`


export default GameDetail
