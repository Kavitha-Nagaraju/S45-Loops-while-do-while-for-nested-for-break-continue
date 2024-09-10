import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <button onClick={()=>{
      let telMarks=79;
         if(telMarks>=35){
          console.log("Student Passed in telugu")
         }
         else{
          console.log("Student Failed in Telugu")
         }
     }}>If</button>
     <button onClick={()=>{
      let engMarks=89;
           while(engMarks<=100){
            engMarks++;
            console.log(engMarks);
           }
     }}>While</button>
     <button onClick={()=>{
      let mathMarks=60;
         do{
            mathMarks++;
            console.log(mathMarks);
         }while(mathMarks<=100)
     }}>Do-While</button>
     <button onClick={()=>{
         for(let i=1; i<=100;i++ ){
            if(i==25){
            continue;
          }
          console.log(i);
          
         }
     }}>Continue</button>
     <button onClick={()=>{
       for(let i=1;i<=100; i++){
          if(i==55){
          break;
        }
        console.log(i);
       }
     }}>Break</button>
     <button onClick={()=>{
         for(let i=1; i<=1000;i++){
          for(let j=1; j<=10;j++){
            if(i==78 || i==96 || i==125 || i==746 || i==329 || i==111 || i==456){
              console.log(`${i} x ${j} =`,i*j);
          
            }
          }
         }
     }}>Tables</button>
     <button onClick={()=>{
      for(let i=1;i<=1000;i++){
        if(i%10==0){
          console.log(i);
          
        }
      }
     }}>Multiples of 10</button>
     <button onClick={()=>{
         for(let i=1;i<=1000;i++){
          if(i%15==0){
            console.log(i);
          }
         }
     }}>Multiples of 15</button>
    </div>
  );
}

export default App;
