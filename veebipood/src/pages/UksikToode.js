import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

  
function UksikToode() {
    
    const { nimi } = useParams();

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

    const leitud = tooted.find(element => element.nimi.toLowerCase().replaceAll('', '-').replaceAll(',', '').replaceAll('õ','o') === nimi );
    
    return (
        <div>
          {leitud && 
          <div>
            <div>{leitud.nimi}</div>
            <div>{leitud.hind}</div>
          </div>}
          {!leitud && <div>Valitud toodet ei leitud</div>}
        </div>)
  
}

export default UksikToode;