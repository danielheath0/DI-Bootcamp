import logo from "./logo.svg";
import "./App.css";
import UserFavoriteAnimals from "./UserFavoriteAnimals.js";
import Exercise from "./Exercise3.js";

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  const element = <p>Hello World!</p>;
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <div className="">
      <header className="">
        {element}
        {myelement}
        <span>React is {sum} times better with JSX</span>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
        <Exercise></Exercise>
      </header>
    </div>
  );
}

export default App;
