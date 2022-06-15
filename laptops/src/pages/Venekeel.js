import {useState} from "react"

function Venekeel() {
    
    const [keel, muudaKeel] = useState('eesti')

    return(
        <div>
            <button onClick={()=> {localStorage.setItem('veebileheKeel', 'eesti')}} > Eesti keel</button>
            <button onClick={()=> {localStorage.setItem('veebileheKeel2', 'vene')}}> Vene keel</button>
            <div>{keel ==='eesti' && <div>Eesti keelne sona</div> }</div>
            <div>{keel ==='vene' && <div>Vene keelne sona</div> }</div>
        </div>
        
    )

}

export default Venekeel;