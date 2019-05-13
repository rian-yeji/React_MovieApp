import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

//1. import React
//2. create component class
//3. render() > return > html(jsx)
class Movie extends Component{

    static propTypes={
        //prop의 타입을 검사 / 필수로 제공하도록 설정
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
            //Component안에 Component를 넣는 방식으로 구성
            //App > d > MoviePoster
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{

    static propTypes={
        poster: PropTypes.string.isRequired 
    }
    render(){
        return(
            <img src={this.props.poster} />
        )
    }
}

export default Movie;