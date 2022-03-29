import React, { useState } from "react";
import SingleEquipComponent from "../SingleEquipComponent.jsx/SingleEquipComponent";

//function for creating a new item 
const NewEquipComponent = (props) => {
    const [showing, setShowing] = useState(false)
    //setting initial "state" to false so you dont display something unless you want to 
    const toggleShowing = () => {
        setShowing(!showing)
    }
    //to toggle the "state" of showing
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    const [newEquip, setNewEquip] = useState({
        productBrand: "",
        productModel: "",
        quantity: 0,
    })
    //setting the "state" of a new item. defining the components that will make up a new item
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setNewEquip({
            ...newEquip,
            [e.target.name]: e.target.value
        })
    }
    const submitNewEquip = (e) => {
        e.preventDefault()
        let validSubmission = true;
        if (newEquip.productBrand.length < 2) {
            setIsValidState({
                valid: false,
                message: "Name needs to be longer"
            })
            validSubmission = false;
        }
        if(validSubmission){
            props.createNewEquip(newEquip)
            setNewEquip({
                productBrand: "",
                productModel: "",
                quantity: 0
            })
            setIsValidState({
                valid: true,
                message: ""
            })
            setShowing(false)
        }
    }
    
    return (
        <>
            {
                showing
                    ?
                    <div id="new-item-form">
                        <button onClick={toggleShowing}>X</button>
                        <form onSubmit={submitNewEquip}>
                            {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                            {props.NewItemServerError ? <p className="form-error">{props.newItemServerError}</p> : null}
                            Brand: <input onChange={handleInputChange} type="text" name="productBrand" value={newEquip.productBrand} />
                            Model: <input onChange={handleInputChange} type="text" name="productModel" value={newEquip.productModel} />
                            Quantity: <input onChange={handleInputChange} type="number" name="quantity" value={newEquip.quantity} />
                            <br /><br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    :
                    <button onClick={toggleShowing}>Create new item</button>
            }
        </>
    )
}

export default NewEquipComponent
