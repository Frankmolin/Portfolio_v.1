
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SideBar from './components/SideBar'

function App() {


  return (
    <>

      {/*<SideBar />*/}
      <div className='transition-colors  dark:bg-dark dark:text-light bg-gray-100 text-dark'>
        <Header />
        <div className="grid md:grid-cols-3  gap-2">
          <About />
          <Skills />
          <Portfolio />
        </div>
        <Contact />

      </div>
    </>

  )
}

export default App
