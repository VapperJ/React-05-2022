import { useRef, useState } from "react";

function LisaArvuti() {

    //const [sonumKasutajale, sonum] = useState('markimata ')
    const markRef = useRef();
    const mudelRef = useRef();
    const maksumusRef = useRef();

    function addProduct() {
        let margid = [];
        if (localStorage.getItem("margid") !== null) {
            margid = JSON.parse(localStorage.getItem("margid"));
        }
        margid.push(markRef.current.value);
        localStorage.setItem("margid", JSON.stringify(margid));
        

        let mudelid = [];
        if (localStorage.getItem("mudelid") !== null) {
    
            mudelid = JSON.parse(localStorage.getItem("mudelid"));
        }
        mudelid.push(mudelRef.current.value);
        localStorage.setItem("mudelid", JSON.stringify(mudelid));

        let maksumused = [];
        if (localStorage.getItem("maksumused") !== null) {
            
            maksumused = JSON.parse(localStorage.getItem("maksumused"));
        }
        maksumused.push(maksumusRef.current.value);
        localStorage.setItem("maksumused", JSON.stringify(maksumused))

    }
    return (
        <div>
            <label>Mark</label> <br/>
            <input ref={markRef} type="text" /> <br/>
            <label>Mudel</label> <br/>
            <input ref={mudelRef}type="text" /> <br/>
            <label>Maksumus</label> <br/>
            <input ref={maksumusRef} type="number" /> <br/>
            <button onClick={()=> addProduct()}>Sisesta</button> <br/>
        </div>
    )
}

export default LisaArvuti;