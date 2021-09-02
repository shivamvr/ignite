import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap');
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
        font-size: 200%;
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
}

`
export default GlobalStyles
