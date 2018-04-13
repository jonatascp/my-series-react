import React, { Component } from 'react'

import api from './Api'

class Home extends Component {
    
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
        return(
            <div>
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

export default Home