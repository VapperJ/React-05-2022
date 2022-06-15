import React from 'react'

import { useRef, useState } from "react";


function AndmeteLisamine() {

    // const [andmed, maarSona] = useState("");
    const userIdRef = useRef();
    const idRef = useRef();
    const titleRef = useRef();
    const bodyRef = useRef();

    function lisauusInfo() {
        console.log(idRef.current.value);
        // if(toodeRef.current.value === "" || hindRef.current.value === "" ) {
        //     // maarSona("Sisestasid tühjuse, ei saanud lisada")
        // } else if (hindRef.current.value < 0 ) {
        //     // maarSona("Hind ei saa olla negatiivne");
        // }else {
            const uusInfo = {  userId: userIdRef.current.value, 
                                id: idRef.current.value, 
                                title: titleRef.current.value, 
                                body: bodyRef.current.value}
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(uusInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
         console.log(uusInfo)
    }

       

    return (
        <div>
        <label>Kasutaja Id</label><br/>
        <input ref={userIdRef} type="number" /><br/>
        <label>Kasutaja</label><br/>
        <input ref={idRef} type='number'></input><br/>
        <label>Pealkiri</label><br/>
        <input ref={titleRef} type="text" /><br/>
        <label>Tekst</label><br/>
        <input ref={bodyRef} type="text" /><br/>
        <button onClick={ () => lisauusInfo()}>Sisesta</button><br/>
        {/* <div>{sonumkasutajale}</div> */}
    </div>
    )
}

export default AndmeteLisamine;
