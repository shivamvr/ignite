import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router'
import { smallImage } from '../util'
// IMAGES
import playstation from '../img/playstation.svg'
import xbox from '../img/xbox.svg'
import steam from '../img/steam.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'
const GameDetail = ({pathId}) => {
  const { screen, game, isLoading } = useSelector((state) => state.details)
  const history = useHistory()
  const getPlatform = (platform) => {
    switch(platform){
      case 'PlayStation 5':
        return playstation
      case 'PlayStation 4':
        return playstation
      case 'Xbox One':
        return xbox
      case 'PC':
        return steam
      case 'Nintendo Switch':
        return nintendo
      case 'iOS':
        return apple
       default:
         return gamepad
    }
  }
  // Get Stars
  const getStar = () => {
    const stars = []
    const rating = Math.floor(game.rating)
    for(let i=1; i<=5; i++){
      if(rating>=i){
        stars.push(<img key={i} src={starFull} alt='star'/> )
      }else{
        stars.push(<img key={i} src={starEmpty} alt='star'/> )
      }
    
    }
    return stars
  }
  
  //EXIT DETAIL
  const exitHandler = (e) => {
    const element = e.target
     if(element.classList.contains('shadow')){
       document.body.style.overflow = 'auto'
       history.push('/')
     }
  }
  
  
  return (
    <>
      {!isLoading && (
          <CardShadow className='shadow' onClick={exitHandler} >
            <Detail layoutId={pathId}>
              <Stats>
                <div className="rating">
                  <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                  <p>Rating: {game.rating}</p>
                  {getStar()}
                </div>
                <Info>
                  <h3>Platform</h3>
                  <Platforms>
                    {game.platforms.map((data) => (
                      <img alt='platform' src={getPlatform(data.platform.name)} key={data.platform.id}></img>
                    ))}
                  </Platforms>
                </Info>
              </Stats>
              <div className="media">
                <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image,1280)} alt={game.name} />
              </div>
              <Description>{`${game.description_raw}`}</Description>
              <div className="gallery">
                {screen.results.map((screen) => (
                  <img key={screen.id} src={smallImage(screen.image,640)} alt={screen.id} />
                ))}
              </div>
            </Detail>
          </CardShadow>
      )}
    </>
  )
}
const CardShadow = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  overflow-y: scroll;
  `
const Detail = styled(motion.div)`
  position: absolute;
  left: 10%;
  width: 80%;
  margin: auto;
  background-color: #fff;
  border-radius: 1rem;
  img {
    width: 100%;
  }
  color: black;
  padding: 2rem 5rem;
  h3 {
    padding: 1rem 0;
  }
`
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    display: inline;
    width: 20%;
  }
`
const Info = styled(motion.div)`
  text-align: center;
`
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    margin-left: 2rem;
    width: 1.5rem;
  }
`
const Description = styled(motion.div)`
  color: #333;
  padding: 5rem 0;
  line-height: 1.8;
`

export default GameDetail
