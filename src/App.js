import './App.css';
import { useState } from 'react';
import students from './models/students';
import Students from './componets/Students';
import Score from './componets/Score';
 

function App() {
 const [group,setGroup]=useState(students) 
//  const [score,setScore]=useState(students(score)) 


  return (
    <div className="App">
      {group.map((peeps)=>{
        return <div> <Students people={peeps}/>
      {peeps.scores.map((score)=>{
        return <Score people={score}/>
     
    
    
    })}
    
    </div>
    })}
     
    </div>
  );
}

export default App;
