import './App.css'
import type { ReactElement } from 'react'
import Header from './components/Header'
import Main from './components/Main'

function App(): ReactElement {
  
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  )
}

export default App
