import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//React:라이브러리, ReactDOM:Reat를 웹사이트에 출력
//React를 모바일에 출력하려면-ReactNative

//ReactDOM은 하나의 컴포넌트를 출력한다
//App이라는 컴포넌트를 id가 root인 곳에 출력
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
