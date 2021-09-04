//Base Url
const base_url = 'https://api.rawg.io/api/'


// Getting the Date

const getCurrentMonth = ()=>{
    const month = new Date().getMonth()+1
    if(month < 10){
        return `0${month}`
    }else{
        return month
    }
}
const getCurrentDay = ()=>{
    const day = new Date().getDate()
    if(day < 10){
        return `0${day}`
    }else{
        return day
    }
}
const getCurrentYear = new Date().getFullYear()

const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentYear = getCurrentYear
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`


// POPULAR GAMES

const auth = 'df37faa3f35840fbac5291b3c601d877'
const popularGames = `games?key=${auth}&dates=${lastYear},${currentDate}`
const upcomingGames = `games?key=${auth}&dates=${currentDate},${nextYear}`
const newGames = `games?key=${auth}&dates=${lastYear},${currentDate}`


 export const popularGamesUrl = () => `${base_url}${popularGames}&ordering=-rating&page_size=10`
 export const upcomingGamesUrl = () => `${base_url}${upcomingGames}&ordering=-added&page_size=10`
 export const newGamesUrl = () => `${base_url}${newGames}&ordering=-released&page_size=10`
 export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}?key=${auth}`
 export const gameScreenshotUrl = (game_id) => `${base_url}games/${game_id}/screenshots?key=${auth}`
 export const searchGameUrl = (game_name) => `${base_url}games?search=${game_name}/&page_size=9&key=${auth}`
//   console.log('gameScreenshotUrl:', gameScreenshotUrl())
//  https://api.rawg.io/api/games/517399?key=df37faa3f35840fbac5291b3c601d877