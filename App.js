import logo from './logo.svg';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Jokes from './Jokes';
import JokesData from './JokesData';
/*<Jokes
      Setup=" I got my daughter a fridge for her birthday."
      Punchline=" I can't wait to see her face light up when she opens it."
            
      />
      <Jokes
      Setup= "How did the hacker escape the police?"
Punchline=" He just ransomware!"
      />
      <Jokes

Setup=" Why don't pirates travel on mountain roads?"
Punchline="Scurvy."
      />
      <Jokes
      Setup="Why do bees stay in the hive in the winter?"
      Punchline=" Swarm."
      />
      <Jokes
      
Setup="What's the best thing about Switzerland?"
Punchline=" I don't know, but the flag is a big plus!"/>
      
      <Jokes

      Setup=""
      Punchline= " It's hard to explain puns to kleptomaniacs because  hey always take things literally."
       
    />
    */
function App() {
  const jokeMap=JokesData.map(
    function(elem){
      return(
        <Jokes 
        Setup = {elem.setup }
        Punchline = {elem.punchline }
        />
      )
    }
    )
  return (
    <div className="App">
      {jokeMap}
    </div>
  );
}

ReactDOM.render(<App/>,document.getElementById("root"))
export default App;
