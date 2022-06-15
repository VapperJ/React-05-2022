import { useState } from "react";

function Tagasiside() {
    
    const [tagasiside, maaraTagasiside] = useState(['Oli hea', 'Keskmine', 'Rahuldav', 'Halb'])

    function kustuta(toode) {
        console.log(toode);
        const tooteIndex = tagasiside.indexOf(toode);
        tagasiside.splice(tooteIndex,1);
        maaraTagasiside(tagasiside.slice());
    }
    
    const kustutaKoik = () => {

        maaraTagasiside([]);
    }

    return(
        <div> Tagasiside :
            {tagasiside.map(e =>
            <div> 
                <span>{e}</span>
                <button onClick={() => kustuta(e)}>-</button>   
            </div>)}
            {tagasiside.length > 0 && <button onClick={()=> kustutaKoik()}>Kustuta tagasiside</button>}
            {tagasiside.length > 0 && <div>Meil on {tagasiside.length} tagasisidet</div>}
            {tagasiside.length < 1 && <div>Teie tagasiside on tahtis</div>}
        </div>
    )
}

export default Tagasiside;