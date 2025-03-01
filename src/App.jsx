import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import Home from './components/Home'
import Loader from './components/Loader/Loader'
import Projetos from './components/Projetos'

function App() {

  return (
    <>
      <Loader/>
      <Header />
      <Home />
      <About />
      <Projetos />
      <Footer />
    </>
  )
}

export default App
