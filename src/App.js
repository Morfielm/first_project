import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const createImg = () => {
    return createElement(
      'img',
      { 
        className: 'App-logo',
        src: logo,
        alt: 'logo'
      } 
    )
  }

  const createP = (...values) => {
    return createElement(
      'p',
      null,
      ...values
    )
  }

  const createLink = () => {
    return createElement(
      'a',
      {
        className: 'App-link',
        href: "https://reactjs.org",
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      'Learn React'
    )
  }


  return createElement(
    'div',
    { className: "App" },
    createElement(
      'header',
      { className: "App-header" },
      createImg(),
      createP("Edit ", createElement('code', null, "src/App.js"), " and save to reload."),
      createLink(),
      createP(new Date().getFullYear())
    )
  )
}

export default App;
