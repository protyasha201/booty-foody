import "./styles.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Navbar
        webName="BOOTY"
        lnik1="Home"
        lnik2="About"
        lnik3="Projects"
        lnik4="Contact"
      ></Navbar>
    </div>
  );
}

function Navbar(props) {
  let text = {
    about: [
      "Please lLorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deleniti Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint deleniti, something behind though."
    ]
  };
  return (
    <div>
      <nav className="navbar">
        <h2>{props.webName}</h2>
        <ul>
          <li>
            <a href="/home">{props.lnik1}</a>
          </li>
          <li>
            <a href="/about">{props.lnik2}</a>
          </li>
          <li>
            <a href="/food">{props.lnik3}</a>
          </li>
          <li>
            <a href="/contact">{props.lnik4}</a>
          </li>
        </ul>
      </nav>
      <Main title="This is a free web-template" paragraph={text.about}></Main>
    </div>
  );
}

function Main(props) {
  return (
    <div className="main">
      <span>
        <input id="search" placeholder="serch now.."></input>
        <Button buttonName="Search"></Button>
      </span>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
      <Food></Food>
    </div>
  );
}

function Button(props) {
  return <button className="buttons">{props.buttonName}</button>;
}

function Food() {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood")
      .then((res) => res.json())
      .then((data) => setFood(data.meals));
  }, []);

  return (
    <div className="foodContainer">
      {food.map((foods) => (
        <div className="foodDiv">
          <img src={foods.strMealThumb}></img>
          <h3>{foods.strMeal}</h3>
        </div>
      ))}
    </div>
  );
}
export default App;
