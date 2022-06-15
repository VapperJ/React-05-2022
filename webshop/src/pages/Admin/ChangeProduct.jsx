
import { useEffect, useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";


 function ChangeProduct() {

    const productsUrl = 'https://react-webshop-144c9-default-rtdb.europe-west1.firebasedatabase.app/products.json';
    const [product, setProduct] = useState([]); 
    const idRef = useRef();
    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const imgSrcRef = useRef();
    const isActiveRef = useRef();
    const categoryRef = useRef();
    const { t } = useTranslation();
    const { productName } = useParams();
    console.log(productName)


    useEffect(() => {
        fetch(productsUrl)
        .then(res => res.json())
        .then(body => {
            const newArrey = [];
            for (const key in body) {
               newArrey.push(body[key]);
            }

            setProduct(newArrey);
        })
    } ,[])

    const leitud = product.find(element => element.name.toLowerCase().replaceAll(' ', '-') === productName);

    const j2rjekorraNumber = product.indexOf(leitud);

    console.log(leitud);

    const changeProduct = () => {

     const uuendatudToode = {
        id: idRef.current.value,
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        price: priceRef.current.value,
        img:imgSrcRef.current.value,
        category: categoryRef.current.value,
        active: isActiveRef.current.value
      }

      product[j2rjekorraNumber] = uuendatudToode
      

      fetch(productsUrl, {
            method: "PUT",
             body: JSON.stringify(product),
             "headers": {
                 "Content-type": "application/json"
             }
         })

         toast.error("Toode muudetud")
    }


    return(
        <div>
         {leitud &&
                <span> 
                    <label>ID</label> <br/>
                    <input ref={idRef}  defaultValue={leitud.id} type="number"/> <br/>
                    <label>{t('form.name')}</label> <br/>
                    <input ref={nameRef}  defaultValue={leitud.name} type="text"/><br/>
                    <label>Img</label> <br/>
                    <input ref={imgSrcRef} src={leitud.imgSrc}  defaultValue={leitud.imgSrc} alt="" /> <br/>
                    <label>Kirjeldus</label> <br />
                    <input ref={descriptionRef} defaultValue={leitud.description} type="text" /> <br />
                    <label>kategooria</label> <br />
                    <input ref={categoryRef} defaultValue={leitud.category} type="text"/><br />
                    <label>Hind</label> <br />
                    <input ref={priceRef} defaultValue={leitud.price} type="number"/><br />
                    <label>Aktiivne</label> <br />
                    <input ref={isActiveRef}  defaultValue={leitud.isActive} type="checkbox" /> <br />
                    <button onClick={() => changeProduct()}>Muuda</button> <br /> <br />
                </span>}
                <ToastContainer/>
        </div>
    )
    
   

    //   product[index] = uuendatudToode
    // 

    // product.puch(uuendatudToode);
    // setProduct(product.slice())
    // toast.error("Toode on muudetud");
 }

export default ChangeProduct;