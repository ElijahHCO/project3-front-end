import React, { useState } from "react";

const NewEquipComponent = (props) => {
    const [showing, setShowing] = useState(false)
    const toggleShowing = () => {
        setShowing(!showing)
    }
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    const [newEquip, setNewEquip] = useState({
        equiptype:"",
        productBrand: "",
        productModel: "",
        quantity: 0,
    })
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
                            Type: <input onChange={handleInputChange} type="text" name="type" value={newEquip.type} />
                            Brand: <input onChange={handleInputChange} type="text" name="productBrand" value={newEquip.productBrand} />
                            Model: <input onChange={handleInputChange} type="text" name="productModel" value={newEquip.productModel} />
                            Quantity: <input onChange={handleInputChange} type="number" name="quantity" value={newEquip.quantity} />
                            <br /><br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    :
                    <button onClick={toggleShowing}>Add Equipment</button>
            }
        </>
    )
}

export default NewEquipComponent
