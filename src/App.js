import logo from './logo.svg';
import './App.css';
import Generatepara from './compoments/Generatepara';
import { useState,useEffect } from 'react';
import ParaContainer from './compoments/ParaContainer';

function App() {
  const [count,setcount]=useState(0);

  const generatenewpara=(number)=>{
   if(number>8){
    alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
   }else{
    setcount(number)
   }
   console.log(number);
  }
 

  
  return (
    <div className="App">
      <Generatepara  generatenewpara={generatenewpara} />
      <ParaContainer count={count}/>
    </div>
  );
}

export default App;
