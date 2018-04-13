import React, { Component } from 'react'

import api from './Api'

const statsuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir'
}

class NewSeries extends Component {

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
      
    render() {
        return (
            <section className="intro-section">
                <h1>Nova Série</h1>
                <form>
                    Nome: <input type="text" className="form-control" /><br />
                    Status:
                    <select>
                        { Object.keys(statsuses).map( key =><option key={key} value={key}>{statsuses[key]}</option>)}
                    </select>
                    <br />
                    Gênero:
                    <select>
                        { this.state.genres.map( key =><option key={key} value={key}>{key}</option>)}
                    </select>
                    <br />
                    Comentários: <textarea className="form-control"></textarea>
                </form>
            </section>
        )    
    }
}

export default NewSeries