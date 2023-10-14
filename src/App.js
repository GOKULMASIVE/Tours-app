import {Nav} from './components/Nav';
import {Hero} from './components/hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Tours } from './components/Tours';
import { Footer } from './components/Footer';
const App=() => {
  return (
    <>
        <Nav/>
        <Hero/>
        <About/>
        <Services/> 
        <Tours/> 
        <Footer/>

    </>
  )
}

export default App;