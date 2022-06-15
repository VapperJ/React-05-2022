import { useRef, useState } from "react";

function LisaToode() {

    console.log("olen lisa toode lehel");

    const [sonumkasutajale, maarSona] = useState("");
    const toodeRef = useRef();
    const hindRef = useRef();

    function lisauustoode() {
        console.log(toodeRef.current.value);
        if(toodeRef.current.value === "" || hindRef.current.value === "" ) {
            maarSona("Sisestasid tühjuse, ei saanud lisada")
        } else if (hindRef.current.value < 0 ) {
            maarSona("Hind ei saa olla negatiivne");
        }else {
            const uusToode = {nimi: toodeRef.current.value, hind: hindRef.current.value}
        fetch('https://proovi-t66-05-22-default-rtdb.europe-west1.firebasedatabase.app/tooted.json',{
            method: 'POST',
            body: JSON.stringify(uusToode),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        maarSona("Toode on lisatud");
            // let tooted = [];
            // if(localStorage.getItem("voti" !== null)) {
            //     tooted = JSON.parse(localStorage.getItem("voti"));
            // }
            // tooted.push({nimi: toodeRef.current.value, hind: hindRef.current.value});
            // localStorage.setItem("voti", JSON.stringify(tooted));
        
        }
        
    
    }    
    
    const kontrolliHinnaKorrektsust = () => {

            if (hindRef.current.value < 0 ) {
                maarSona("Hind ei saa olla negatiivne");
            }
        }

    return(
    <div>
        <label>Toote nimi</label>
        <input ref={toodeRef} type="text" />
        <label>Toote hind</label>
        <input ref={hindRef} onChange={() => kontrolliHinnaKorrektsust()} type='number'></input>
        <button onClick={ () => lisauustoode()}>Sisesta</button>
        <div>{sonumkasutajale}</div>
    </div>
        
    )
}

export default LisaToode;