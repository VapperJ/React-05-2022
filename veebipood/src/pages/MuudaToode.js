import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function MuudaToode() {

    const { tooteNimi } = useParams();
    const nimiRef = useRef();
    const hindRef = useRef();

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

    const leitud = tooted.find(element => element.nimi.toLowerCase().replaceAll(' ', '-') === tooteNimi);

    const j2rjekorraNumber = tooted.indexOf(leitud);

    console.log(leitud);
  
    const uuendaToode = () => {
      const uuendatudToode = {
        nimi: nimiRef.current.value,
        hind: hindRef.current.value
      }
      tooted[j2rjekorraNumber] = uuendatudToode;
      localStorage.setItem('voti', JSON.stringify(tooted));
    }

    return(
        <div>
            {leitud &&
                <div>
                <label>Nimi</label> <br/>
                <input ref={nimiRef} defaultValue={leitud.nimi} type='text' /> <br/>
                <label>Hind</label> <br/>
                <input ref={hindRef} defaultValue={leitud.hind} type='number' /> <br/>
                <button onClick={() => uuendaToode()}>Muuda</button>
            </div>}   
        </div>
    )
}

export default MuudaToode;