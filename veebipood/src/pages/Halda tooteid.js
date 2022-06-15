import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HaldaTooteid() {
  
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

    const kustuta = (element) => {
        console.log(tooted);
        const j2rjekorraNumber = tooted.indexOf(element);
        tooted.splice(j2rjekorraNumber,1);
        console.log(tooted);
          uuendaTooteid(tooted.slice())
          fetch('https://proovi-t66-05-22-default-rtdb.europe-west1.firebasedatabase.app/tooted.json',{
            method: 'PUT',
            body: JSON.stringify(tooted),
            headers: {
                'Content-Type': 'application/json'
            }
        });
      }

  return (
  <div>
    { tooted.map(element =>
      <div>
        <div>Nimi: {element.nimi}</div>
        <div>Hind: {element.hind}</div>
        <div>Ühikuhind: 1.5</div>
        <div>Soodushind: JAH</div>
        <button onClick={() => kustuta(element)}>x</button><br />
        <Link to={'/muuda/'+ element.nimi.toLowerCase().replaceAll(' ', '-')}>
          <button>Muuda</button>
        </Link>
      </div>
    ) }
  </div>)
}
  
  export default HaldaTooteid;