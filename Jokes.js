import React from "react";
import { ReactDOM } from "react";
import JokesData from "./JokesData";
export default function Jokes(props){
    
       return(
           <div>
           {props.Setup && <p>Setup:{props.Setup}</p>}
           <p>Punchline:{props.Punchline}</p>
           <hr/>
           </div>
       )
            
        
    
}