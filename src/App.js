import React from 'react'
import GlobalStyles from './components/GlobalStyles'
// COMPONENTS AND PAGES
import Home from './pages/Home'
//Router
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Route path={['/game:id' ,'/']}>
        <Home />
      </Route>
      <GlobalStyles />
    </div>
  )
}

export default App
