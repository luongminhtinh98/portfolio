import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import SignIn from './components/Pages/SignIn';
import Register from './components/Pages/Register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Nav />
              <Home />
              <About />
              <Work />
              <Contact />
              <Footer />
            </>
          } />

          <Route path='/signin' element={
            <>
              <Header />
              <SignIn />
            </>
          } />
          
          <Route path='/register' element={
            <>
              <Header />
              <Register />
            </>
          } />
        </Routes>
      </Router>
    </div>  
  )
}

export default App