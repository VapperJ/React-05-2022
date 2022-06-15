
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function ProductSettings() {

    const productsUrl = 'https://react-webshop-144c9-default-rtdb.europe-west1.firebasedatabase.app/products.json';
    const [product, setProduct] = useState([]); 
    const { t } = useTranslation();
    const categoryUrl = 'https://react-webshop-144c9-default-rtdb.europe-west1.firebasedatabase.app/categories.json';
    const[categories, setCategories] = useState([]);

   

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

  

    useEffect(() => {
        fetch(categoryUrl)
        .then(response => response.json())
        .then(body => {
            const newArry = [] // votab bodyst key vastava vaartuse japaneb selle newArrysse
            for (const key in body) {
                    newArry.push(body[key])
            }

            setCategories(newArry);
        })
    } ,[])   


    function deleteProduct(index) {
        product.splice(index, 1);
        setProduct(product.slice());
        fetch(productsUrl, {
            method: "PUT",
            body: JSON.stringify(product),
            "headers": {
                "Content-type": "application/json"
            }
        })
        toast.error("Toode kustutatud");
    }

   

    return(  
         <div>
            { product.map((element,index) => 
            <div key={element.id}>
                <div><img src={element.imgSrc} alt="" /></div>
                <div>{element.name}</div>
                <div>{element.price} €</div>
                <div>{element.id}</div>
                <div>{element.category}</div>
                <div>{element.description}</div>
                <div>{element.isActive}</div>
                <button onClick={()=>{deleteProduct(index)}}>Kustuta</button> <br/>
                <Link to={'/muuda/'+ element.name.toLowerCase().replaceAll(' ', '-')}>
                     <button>Muuda</button>
                </Link>
            </div>) 
            }
            <ToastContainer/>
        </div>
        )
        
    
}

export default ProductSettings;