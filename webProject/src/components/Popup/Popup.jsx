import React from 'react'
import './Popup.scss'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/cartReducer'
// import {toast} from 'react-hot-toast'

const Popup = ({close ,removeitem}) => {
    const dispatch = useDispatch();
    // const removeItem=()=>{
    //     try {
    //         dispatch(removeFromCart(removeitem))
    //         close()
    //         toast.success(`Item removed`)
    //     } catch (error) {
    //         toast.error(`Failed to remove item`)
    //         console.log(error)
    //     }
    // }
    const removeItem =()=>{
        dispatch(removeFromCart(removeitem))
        close()
    }
    return (
        <div className='popup'>
            <div className="box">
                <p>Do You Want to Remove From Cart</p>
                <div className='btns'>
                    <button onClick={removeItem}>Confirm</button>
                    <button onClick={close}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Popup