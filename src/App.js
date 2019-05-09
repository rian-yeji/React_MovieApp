import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'

//모든 데이터는 메인 컴포넌트에 있음
//부모 컴포넌트에서 자식 컴포넌트로 데이터 전달=props
const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://s3-ap-southeast-2.amazonaws.com/fna-wordpress-website06/wp-content/uploads/2018/09/05151327/Matrix-The-960x1440.jpg",
  "https://cdn.shopify.com/s/files/1/0784/1125/products/Full_Metal_Jacket_1024x.jpg?v=1530145558",
  "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/uk_sws-9_teaser-poster_r_b34b20e7.jpeg?region=0,0,960,1420"
]

//자바스크립트 안에 html코드 => jsx:react component를 만들때 사용하는 언어
//css-class = jsx-className
//모든 컴포넌트는 render function을 가지고있음
//render:이 컴포넌트가 나에게 보여주는 것이 무엇인가
function App() {
  return (
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}/>
      <Movie title={movieTitles[1]} poster={movieImages[1]}/>
      <Movie title={movieTitles[2]} poster={movieImages[2]}/>
      <Movie title={movieTitles[3]} poster={movieImages[3]}/>
    </div>
  );
}

export default App;
