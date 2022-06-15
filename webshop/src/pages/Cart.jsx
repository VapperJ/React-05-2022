import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import '../css/cart.css';

function Cart() {
    const [cartProducts, setCartProducts] = useState(
        JSON.parse(sessionStorage.getItem("cartProducts")) || []
        );
    
    const [parcelMachines, setParcelMachines] = useState([]);

    useEffect(()=>{
        fetch("https://www.omniva.ee/locations.json")
        .then(res => res.json())
        .then(body => setParcelMachines(body))
    }, []);

    const decreaseQuantity = (productClicked) => {
        const index = cartProducts.findIndex(element => element.product.id === productClicked.product.id);
        cartProducts[index].quantity = cartProducts[index].quantity - 1;
        if (cartProducts[index].quantity === 0) {
            removeFromCart(productClicked);
        }
        setCartProducts(cartProducts.slice());
        sessionStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        }

    const increaseQuantity = (productClicked) => {
        const index = cartProducts.findIndex(element => element.product.id === productClicked.product.id);
        cartProducts[index].quantity = cartProducts[index].quantity + 1;
        setCartProducts(cartProducts.slice());
        sessionStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        }

    const removeFromCart = (productClicked) => { // MOZILLA --> findIndex()
        const index = cartProducts.findIndex(element => element.product.id === productClicked.product.id);
        cartProducts.splice(index,1);
        if (cartProducts.length === 1 && cartProducts[0].product.id === 1212121212) {
            deleteParcelMachine();
        }
        setCartProducts(cartProducts.slice());
        sessionStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        toast.success('Toode edukalt kustutatud!', {
            position: "bottom-right",
            theme:'dark'
            });
        }

    const clearAll = () => {
        setCartProducts([]);
        deleteParcelMachine();
            sessionStorage.setItem("cartProducts",JSON.stringify([]));   
        }

    const [selectedPM, setSelectedPM] = useState(sessionStorage.getItem("parcelMachine"));
    const parcelMachineRef = useRef();
    
    const addParcelMachine = () => {
        console.log(parcelMachineRef.current.value);
        cartProducts.push({product:{id: 1212121212, name: "Pakiautomaadi tasu",
                             price: 3.5, imgSrc: require("../assets/locker.png")}, 
                             quantity:1 });
        setSelectedPM(parcelMachineRef.current.value);
        sessionStorage.setItem("parcelMachine", parcelMachineRef.current.value);
    }

    const deleteParcelMachine = () => {
        setSelectedPM(null);
        cartProducts.pop();
        sessionStorage.removeItem("parcelMachine")
    }
          
              // [{product: {TOODE}, quantity: 1}, {product: {TOODE}, quantity: 5}]
 return (
    <div>
        <button className="cartProduclClearAll" onClick={()=> clearAll()}>Clear All</button> 
        { cartProducts.map(element =>
        <div  key={element.id} className="cartProduct">
            <img className="cartProductImg" src={element.product.imgSrc} alt=""/>
            <div className="cartProductName">{element.product.name}</div>
            <div className="cartProductPrice">{element.product.price} €</div>
            {element.product.id !== 1212121212  && <img  className="cartProductBtn" 
                onClick={()=> decreaseQuantity(element)} src={require('../assets/minus.png')} alt="" />}
            <div className="cartProductQuant">{element.quantity} tk</div>
            {element.product.id !== 1212121212  && <img className="cartProductBtn" 
                onClick={()=> increaseQuantity(element)} src={require('../assets/plus.png')} alt="" />}
            <div >{element.product.price * element.quantity} 
                <img className="cartProductTotal" src={require('../assets/euro.png')} alt=""/></div>
            <img className="cartProductDel" onClick={()=> removeFromCart(element)} src={require('../assets/trash.png')} alt="" />
            <br /><br />
        </div>
        ) }
        <ToastContainer/>
        { selectedPM === null && cartProducts.length > 0 && 
        <select onChange={addParcelMachine} ref={parcelMachineRef}>
            {parcelMachines.filter(element => element.A0_NAME === "EE").map(element => <option>{element.NAME}</option>)}
        </select>
        }
        { selectedPM !== null &&  < div>{selectedPM} <button onClick={deleteParcelMachine}>-</button></div>   }   
    </div>)
}

export default Cart;