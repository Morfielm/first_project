import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    createApp();
  }, []);

  const createImg = () => {
    const img = document.createElement("img");
    img.src = logo;
    img.className = "App-logo";
    img.alt = "logo";

    return img;
  };

  const createP = (value) => {
    const p = document.createElement("p");
    p.innerHTML = value;
    
    return p;
  }

  const createA = () => {
    const a = document.createElement("a");
    a.className = 'App-link';
    a.href = 'https://reactjs.org';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = 'Learn React';

    return a;

  }

  const createApp = () => {
    const container = document.createElement("div");
    container.className = "App";
    const header = document.createElement("header");
    header.className = "App-header";

    header.appendChild(createImg());
    header.appendChild(createP('Edit <code>src/App.js</code> and save to reload.'));
    header.appendChild(createA());
    header.appendChild(createP(new Date().getFullYear().toString()));
    container.appendChild(header);

    document.body.replaceWith(container);
  };

  return null;
}

export default App;
