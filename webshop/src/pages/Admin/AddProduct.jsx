import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from 'react-i18next';

function AddProduct() {

    const idRef = useRef();
    const nameRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const priceRef = useRef();
    const imgSrcRef = useRef();
    const isActiveRef = useRef();
    const productsUrl = 'https://react-webshop-144c9-default-rtdb.europe-west1.firebasedatabase.app/products.json';
    const categoryUrl = 'https://react-webshop-144c9-default-rtdb.europe-west1.firebasedatabase.app/categories.json';
    const[categories, setCategories] = useState([]);
    const { t } = useTranslation();
    const [products, setProducts] = useState([])
    const [message, setMessage] = useState("")

    useEffect(()=> {
         fetch(productsUrl)
        .then(res => res.json())
        .then(body => {
            const newArrey =[];

            for (const key in body) {
                newArrey.push(body[key])
                }
                console.log(newArrey);
                setProducts(newArrey);
        })
    },[]);

    useEffect(() => {
        fetch(categoryUrl).then(response => response.json()).then(body => {
            const newArry = [] // votab bodyst key vastava vaartuse japaneb selle newArrysse
            for (const key in body) {
                    newArry.push(body[key])
            }

            setCategories(newArry);
        })
    }, []);

    const onAddProduct = () => {
        const newProduct = {
          id: idRef.current.value,
          name: nameRef.current.value,
          description: descriptionRef.current.value,
          category: categoryRef.current.value,
          price: priceRef.current.value,
          imgSrc: imgSrcRef.current.value,
          isActiveRef: isActiveRef.current.value,
        }
        fetch(productsUrl,
            {
                method: "POST",
                body: JSON.stringify(newProduct),
                headers: {
                    "Content-Type": "appication/json"
                }
            })
            toast.success(t("product.added"))
    }

        // mida tahan teha? --- tahan midagi juurde lisada -- POST
    // ---->pean muutma methodi ja headereid
    // kui päringu tehtud sain, kas tahan midagi Firebase käest teada? -- ei ole vaja 
    // ---->then-then ei tee
 // mida tahan teha? --- tahan kõiki kategooriaid kätte saada -- GET
    // ---->ei pea muutma methodit ega headereid
    // kui päringu tehtud sain, kas tahan midagi Firebase käest teada? -- jah, kõiki kategooriaid
    // ---->fetch(url).then().then() <--- siia tuleb Firebase-st saadu
    const checkIdUniqueness = () => {
        console.log(idRef.current.value);
        const index = products.findIndex(element => Number(element.id) === Number(idRef.current.value))
        if (index === -1) {
            console.log("unikaalne")
            setMessage("")
        }else {
            console.log("ei ole unikaalne")
            
        }
        if (idRef.current.value === "1212121212") {
            setMessage("Sisestatud ID on kasutuses")
        }
    }

    return(
    <div>
        <div>{message}</div>
        <label>ID</label> <br/>
        <input onChange={checkIdUniqueness} ref={idRef} type="number"/> <br/>
        <label>{t('form.name')}</label> <br/>
        <input ref={nameRef} type="text"/> <br/>
        <label>Kirjeldus</label> <br />
        <input ref={descriptionRef} type="text" /> <br />
        <label>Kategooria</label> <br />
        <select ref={categoryRef}>
             { categories.map(element => <option key={element.id}>{element.name}</option>) }
         </select> <br />
        <label>Hind</label> <br />
        <input ref={priceRef} type="number" /> <br />
        <label>Pilt</label> <br />
        <input ref={imgSrcRef} type="text" /> <br />
        <label>Aktiivne</label> <br />
        <input ref={isActiveRef} type="checkbox" /> <br />
        <button  disabled={message !== ""} onClick={onAddProduct}>Sisesta</button>
        <ToastContainer/>
    </div>
    )
}

export default AddProduct;

{/* <select ref={categoryRef}>
      { categories.map(element => <option>{element.name}</option>) }
    </select> <br /> */}