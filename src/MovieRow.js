import React, { Component } from 'react';

class MovieRow extends Component {

    viewMovie() {
        window.location.href = `https://www.themoviedb.org/movie/${this.props.movie.id}`;
    }

    render(){
        return <table key={this.props.movie.id}>
            <tbody>
                <tr>
                    <td>
                        <img src={this.props.movie.poster_src} alt={"poster"} width={120}/>
                    </td>
                    <td>
                        {this.props.movie.title}
                        <p>{this.props.movie.overview}</p>
                        <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
                    </td>
                </tr>
            </tbody>
        </table>
    }

}

export default MovieRow;