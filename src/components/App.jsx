import { useState } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import GlobalStyles from './styles/Global'


function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContent />
    </>
  )
}

export default App
