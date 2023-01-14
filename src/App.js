import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import About from "./compoent/About"
import Gallery from "./compoent/Gallery"
import Contact from "./compoent/Contact"
import Bhajans from "./compoent/Services"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' component={Home} exact>
            <Home />
          </Route>
          <Route path='/about' component={About} exact>
            <About />
          </Route>
          <Route path='/gallery' component={Gallery} exact>
            <Gallery />
          </Route>
          <Route path='/contact' component={Contact} exact>
            <Contact />
          </Route>
          <Route path='/bhajans' component={Bhajans} exact>
            <Bhajans />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
