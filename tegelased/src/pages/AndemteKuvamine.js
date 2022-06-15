import React from 'react'

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AndmeteKuvamine() {

  //const lisatudTooted = JSON.parse(localStorage.getItem('voti')) || [];
  const [andmed, uuendaAndmeid] = useState([])
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(tagastus => tagastus.json())
    .then(object => {

      const infoAndmepaasist = [];
      for (const key in object) {
            infoAndmepaasist.push(object[key])
        }

        uuendaAndmeid(infoAndmepaasist)
        console.log(infoAndmepaasist)
    })

  },[])
  

  console.log("info");

//   function lisaOstukorvi(element) {
//     console.log("asdasd");
//     console.log(element);
    
//     const ostukorviTooted = JSON.parse(sessionStorage.getItem('ostukorviTooted')) || [];
//     ostukorviTooted.push(element);
//     sessionStorage.setItem('ostukorviTooted', JSON.stringify(ostukorviTooted))
//   }


  return (
  <div>
    {andmed.map(element => 
      <div key={element.id}>
          <div>{element.userId}</div><br/>
          <div>{element.id}</div><br/>
          <div>{element.title}</div><br/>
          <div>{element.body}</div><br/>
      </div>)}
  </div>);
}

export default AndmeteKuvamine;