import { useDispatch, useSelector } from "react-redux";
import ItemCategoryCard from "./ItemCategoryCard";
import { clearItems } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const emptyCartHandler = ()=>{
        dispatch(clearItems());
    }
    return(
        <div className="my-4 mx-auto p-4 w-2/3">
            <button className="p-2 m-2 rounded-md bg-red-400" onClick={emptyCartHandler}>Empty Cart</button>
            {
                cartItems.map((cartItem)=> <ItemCategoryCard key = {cartItem.card.info.id} data={cartItem}/>)
            }
           
        </div>
    )
}

export default Cart;