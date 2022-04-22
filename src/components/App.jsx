import GlobalStyles from './styles/Global'
import Header from './Header'
import MainContent from './MainContent'
import Footer from "./Footer";
import { BrowserRouter as Router } from 'react-router-dom'



function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header/>
        <MainContent />
        <Footer/>
      </Router>
    </>
  )
}

export default App
