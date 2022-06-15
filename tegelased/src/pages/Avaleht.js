import React from 'react'

function Avaleht(){   

            const tegelased = JSON.parse(localStorage.getItem("voti")) || [];
            console.log(tegelased)

            const valiTegelane = (tegelased) => { 

                const valitudTegelane = JSON.parse(sessionStorage.getItem("sessionVoti")) || [];
                valitudTegelane.push(tegelased)
                sessionStorage.setItem("sessionVoti", JSON.stringify(valitudTegelane))
        }

        // function valitudTegelased() {
        //     const [valitudtegelane, uuendaTegelastevalikut] = useState(
        //       JSON.parse(sessionStorage.getItem("sessioniVoti")) || []);
            
        return(
            <div>
                {tegelased.map(element =>
                    <div>
                        <div>Nimi: {element.nimi}</div>
                        <div>Liik: {element.liik}</div>
                        <div>Vanus: {element.vanus}</div>
                        <button onClick={() => valiTegelane(element)}>Vali</button>
                    </div> ) }
            </div>
            )
}

export default Avaleht;