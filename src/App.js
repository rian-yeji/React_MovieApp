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
    this._getMovies();
  }

  _renderMovies = () => {
    //Component의 key는 인덱스를 사용하면 속도가 느려서 좋지 않음
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return(
        <Movie 
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
        />
      )
    })
    return movies
  }

  _getMovies = async () => {
    //return value에 상관없이 _callApi()가 '끝나는것'을 기다림 
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const {movies} = this.state;
    return(
      <div className={movies ? "App" : "App--loading"}> 
        {movies ? this._renderMovies() : 'Loading'}
    </div>
    );
  }
}

export default App;
