import React from 'react'
import { useRef, useState } from "react";

function LisaTegelane() {

    console.log("olen tegelased lehel");

    const [sonumkasutajale, maarSona] = useState(JSON.stringify(localStorage.getItem("voti"))) ||[];
    const nimiRef = useRef();
    const liikRef = useRef();
    const vanusRef = useRef();

    function lisauusTegelane() {
        console.log(nimiRef.current.value);
        if(nimiRef.current.value === "" || liikRef.current.value === "" ) {
           // maarSona("Sisestasid tühjuse, ei saanud lisada")
        } else if (vanusRef.current.value < 0 ) {
           // maarSona("Vanus ei saa olla negatiivne");
        }else {
             let tegelased = [];
             if(localStorage.getItem("voti" !== null)) {
                 tegelased = JSON.parse(localStorage.getItem("voti"));
             }
             tegelased.push({nimi: nimiRef.current.value, liik: liikRef.current.value, vanus: vanusRef.current.value});
             localStorage.setItem("voti", JSON.stringify(tegelased));
           
        }
        
    
    }    
    
    const kontrolliVanuseKorrektsust = () => {

            if (vanusRef.current.value < 0 ) {
               // maarSona("Vanus ei saa olla negatiivne");
            }
        }

    return(
    <div>
        <label>Tegelase nimi</label> <br/>
        <input ref={nimiRef} type="text" /><br/>
        <label>Tegelase liik</label><br/>
        <input ref={liikRef} type="text"/><br/>
        <label>Tegelase vanus</label><br/>
        <input ref={vanusRef} onChange={() => kontrolliVanuseKorrektsust()} type='number'></input><br/>
        <button onClick={ () => lisauusTegelane()}>Sisesta</button><br/>
        
    </div>
        
    )
}

export default LisaTegelane;