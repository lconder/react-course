import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow';
import axios from 'axios';

class App extends Component {

    constructor(props){
        super(props);
        this.state ={};
    }

    performSearch(search_term) {

        const url = `http://api.themoviedb.org/3/search/movie?api_key=6fb734049abeda29ffc630f07e07d56d&query=${search_term}`;
        const url_image = "https://image.tmdb.org/t/p/w185";
        axios.get(url)
            .then((response) => {

                const results = response.data.results;

                let movieRows = results.map((movie) => {
                    movie.poster_src = `${url_image}${movie.poster_path}`;
                    return <MovieRow movie={movie}/>
                });

                this.setState({rows: movieRows});

            })
            .catch((error => console.error(error)))

    }

    searchChangeHandler(event){
        console.log(event.target.value);
        const bound_object = this;
        const search_term = event.target.value;
        bound_object.performSearch(search_term)
    }

    render() {
        return (
            <div className="App">

            <table className="titleBar">
                <tbody>
                    <tr>
                        <td>
                            <img src="icon_moviedb.png" width="50" alt="appicon"/>
                        </td>
                        <td width="8"/>
                        <td>
                            <h1>MoviesDB Search</h1>
                        </td>
                    </tr>
                </tbody>
            </table>

            <input className="searchInput" onChange={this.searchChangeHandler.bind(this)} placeholder="Ingresa una búsqueda"/>

            {this.state.rows}
        </div>
    );
  }
}

export default App;
