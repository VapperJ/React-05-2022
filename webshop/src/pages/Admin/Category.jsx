import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Category() {

    const idRef = useRef();
    const nameRef = useRef();
    const categoryUrl = 'https://react-webshop-144c9-default-rtdb.europe-west1.firebasedatabase.app/categories.json';
    const[categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(categoryUrl).then(response => response.json()).then(body => {
            const newArry = [] // votab bodyst key vastava vaartuse japaneb selle newArrysse
            for (const key in body) {
                    newArry.push(body[key])
            }

            setCategories(newArry);
        })
    }, []);

    const addCategory = () => {
        const newCategory = {
            id: idRef.current.value,
            name: nameRef.current.value
        }

        fetch(categoryUrl, {
            method: "POST",
            body: JSON.stringify(newCategory),
            headers: {
                "Content-Type": "application/jason"
            }
        })

        toast.success('Kategooria edukalt lisatud!', {
            position: "bottom-right",
            theme:'dark'
            });

    }

    const deleteCategory = (index) => {
        categories.splice(index,1);
        setCategories(categories.slice());

        fetch(categoryUrl, {
            method: "PUT",
            body: JSON.stringify(categories),
            headers: {
                "Content-Type": "appication/json"
            }
        })

        toast.success('Kategooria edukalt kustutatud!', {
            position: "bottom-right",
            theme:'dark'
            });
    }

    return(
    <div>
        <label>ID</label> <br/> 
        <input ref={idRef} type="number"/> <br/>
        <label>Name</label> <br/> 
        <input ref={nameRef} type="text"/> <br/>
        <button onClick={addCategory}>Sisesta</button>
        {categories.map((element, index) => 
            <div key={element.id}>
                <span>{element.name}</span>
                <button onClick={()=> deleteCategory(index)}>-</button>
            </div>
            )}
        <ToastContainer/>
    </div>)
}

export default Category;