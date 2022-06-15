

function VaataArvuteid () {


    const mark = localStorage.getItem("margid")
    const mudel = localStorage.getItem("mudelid")
    const maksumus = localStorage.getItem("maksumused")

    return (
        <div>
            <label>{ mark }</label> <br/> 
            <label>{mudel}</label> <br/>        
            <label>{maksumus}</label> <br/>
        </div>
    )
}

export default VaataArvuteid;