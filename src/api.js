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

const popularGames = `games?dates=${lastYear},${currentYear},${nextYear}`


export const popularGamesUrl = () => `${base_url}${popularGames}&ordering=-rating&page_size=10`