import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

//1. import React
//2. create component class / (or stateless functional component)
//3. render() > return > html(jsx) / (or return)

//Smart component: state를 가지는 class형 component
//Dumb component: stateless functional component / this is only have props, state is not needed 
//rendering필요없이 return만 하는경우(render,will mount, did mount 필요없음

function Movie({title, poster, genres, synopsis}){
    return (
        //Component안에 Component를 넣는 방식으로 구성
            //App > d > MoviePoster
            <div className="Movie">
                <div className="Movie_Colums">
                    <MoviePoster poster={poster} alt={title}/>
                </div>
                <div className="Movie_Colums">
                    <h1>{title}</h1>
                    <div className="Movie_Genres">
                        {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                    </div>

                    <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        />   
                    </div>
                </div>
            </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        //alt를 작성해놓으면 이미지에 마우스를 가져갔을때(hover) alt가 뜨게된다.
        <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
    )
}


function MovieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genres: PropTypes.string.isRequired
}
export default Movie;