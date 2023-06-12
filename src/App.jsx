import { useEffect } from "react";

const colors = [
  'crimson',
  'deeppink',
  'deepskyblue',
  'gold',
  'lightgrey',
  'pink',
  'orange',
  'mediumturquoise',
  'lemonchiffon',
  'indigo',
];

function App() {

console.log('h1');
useEffect(() => {
  console.log('h2');
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
console.log(randomIndex)
}, []);

  return (
    <div id="app">
    <h1 id="current-color">Test</h1>

    <div className="colors"></div>
  </div>
  );
}

export default App;
