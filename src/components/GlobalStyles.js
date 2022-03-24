import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    &::-webkit-scrollbar{
        width: .5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgrey;
        border-radius: 1rem;
    }
   body,h1,h2,h3{
        font-family: 'Noto Serif', serif;
    }
    body{
        width: 100%;
    }
    h2{
        font-size: 250%;
    }
    h3{
       padding: 0% .5rem;
       color: #333;
       font-size: 100%;
    }
    p{
        font-size: 1rem;
        color: #696969;
        padding:.4rem
    }
    a{
        text-decoration: none;
        color: #333
    }
    img{
        display: block;
    }
}

`
export default GlobalStyles
