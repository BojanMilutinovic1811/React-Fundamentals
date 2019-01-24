import React from 'react'
import axios from 'axios'

export default class SearchInput extends React.Component {

    state = {

    }


    searchSubmit = (e) => {
        e.preventDefault()
        const movie = document.getElementById('movie')
        axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${movie}`)
        .then(data => console.log(data.data[0]))
        .catch(err => console.log(err))
        // fetch( `http://api.tvmaze.com/shows?q=${movie}`)
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error=>console.log(error))
        
        console.log(movie.value)
        movie.value = ''
    }

    render() {
        return (
            <form onSubmit={this.searchSubmit} className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" id='movie' type="search" name='search' placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        
          )
    }

}
