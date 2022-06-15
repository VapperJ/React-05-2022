
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Avaleht() {

  //const lisatudTooted = JSON.parse(localStorage.getItem('voti')) || [];
  const [tooted, uuendaTooteid] = useState([])
  
  useEffect(()=>{
    fetch('https://proovi-t66-05-22-default-rtdb.europe-west1.firebasedatabase.app/tooted.json')
    .then(tagastus => tagastus.json())
    .then(object => {

      const tootedAndmepaasist = [];
      for (const key in object) {
            tootedAndmepaasist.push(object[key])
        }

        uuendaTooteid(tootedAndmepaasist)
        console.log(tootedAndmepaasist)
    })

  },[])
  

  console.log("olen avalehel");

  function lisaOstukorvi(element) {
    console.log("asdasd");
    console.log(element);
    
    const ostukorviTooted = JSON.parse(sessionStorage.getItem('ostukorviTooted')) || [];
    ostukorviTooted.push(element);
    sessionStorage.setItem('ostukorviTooted', JSON.stringify(ostukorviTooted))
  }

  return (
  <div>
    {tooted.map(element => 
      <div key={element.nimi}>
        <Link to={'toode/' + element.nimi.toLowerCase().replaceAll('', '-').replaceAll(',', '').replaceAll('õ','o')}>
        {element.nimi} ({element.hind} $)
        </Link>
        <button onClick={() => lisaOstukorvi(element)}>Lisa {element.nimi} ostukorvi</button>
      </div>)}
  </div>);
}

export default Avaleht;