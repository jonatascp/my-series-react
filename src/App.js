import React, { Component } from 'react'
import axios from 'axios'

import api from './Api'

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      genres: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    api.loadGenres()
      .then((res)=>{
        this.setState({ 
          isLoading: false,
          genres: res.data
        })
      }) 
  }
  
  renderGenrerLink(genrer) {
    return (
      <span>&nbsp;<a href='#'>{ genrer }</a></span>
    )
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header page-scroll">
              <a className="navbar-brand page-scroll" href="#page-top">
                  <img src="images/logo.png" height="30" />
              </a>
            </div>

            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="">Menu item</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>


        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1><img src="images/logo.png" /></h1>
                <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          {
            this.state.isLoading &&
            <span>Loading....</span>
          }
          {
            !this.state.isLoading &&
            <span>
              Ver séries do gênero:
              { this.state.genres.map(this.renderGenrerLink) }
            </span>
          }
        </section>
      </div>  
    )
  }
}

export default App
