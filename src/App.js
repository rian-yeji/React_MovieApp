import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'

//CRA사용 : 해당프로젝트의 위치에서 커맨드창열기 > yarn start > localhost:3000

//모든 데이터는 메인 컴포넌트에 있음
//부모 컴포넌트에서 자식 컴포넌트로 데이터 전달=props


//자바스크립트 안에 html코드 => jsx:react component를 만들때 사용하는 언어
//css-class = jsx-className
//모든 컴포넌트는 render function을 가지고있음
//render:이 컴포넌트가 나에게 보여주는 것이 무엇인가
class App extends Component {
  /*
  <Compoent의 Lifecycle>
  # Render: componentWillMount() -> render() -> componentDidMount()
  will mount(사이클 시작), render(컴포넌트가 존재), did mount(컴포넌트가 자리잡음)는 component가 존재하기 시작할때 작동

  # Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  shouldComponentUpdate(): 이전props과 새로운 props가 다르면 true
  shouldComponentUpdate()==true로 사용

  사용예시: willUpdate()때 spinner(로딩중표시)를 붙이고 업데이트 이후 didUpdate()에서 spiner(메세지나 아이콘)를 숨김 
  */

  //state: Component안의 Object
  //state가 바뀔 때마다 render이 발생
  state = {
    //state..는 디폴트 state와 함께 컴포넌트를 로드하는 방법
    //변경은 setState로 함
    
  }

  componentDidMount(){
    //setTimeout(function(){...}, 1000)-> old javascript
    //setTimeout(()=>{}, 1000)-> new javascript
    setTimeout(() => {
      //this.state.greeting = 'something' (X) state를 직접적으로 변경하면 render설정들이 작용하지 않음!
      this.setState({
        movies: [
          {
            title : "Marix",
            poster : "https://s3-ap-southeast-2.amazonaws.com/fna-wordpress-website06/wp-content/uploads/2018/09/05151327/Matrix-The-960x1440.jpg"
          },
          {
            title : "Full Metal Jacket",
            poster : "https://cdn.shopify.com/s/files/1/0784/1125/products/Full_Metal_Jacket_1024x.jpg?v=1530145558"   
          },
          {
            title : "Oldboy",
            poster : "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
          },
          {
            title : "Star Wars",
            poster : "https://lumiere-a.akamaihd.net/v1/images/uk_sws-9_teaser-poster_r_b34b20e7.jpeg?region=0,0,960,1420"
          },
          { 
            title: "Trainspotting",
            poster: "https://affif-sitepublic-media-prod.s3.amazonaws.com/film_poster/0001/57/thumb_56478_film_poster_293x397.jpeg"
          }
        ]
      })
    }, 5000)
  
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return(
      <div className="App"> 
        {this.state.movies ? this._renderMovies() : 'Loading'}
    </div>
    );
  }
}

export default App;
