import React, { useState } from "react"

const SingleEquipComponent = (props) => {
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    const [showing, setShowing] = useState(false)
    const toggleShowing = () => {
        setShowing(!showing)
    }
    const [updateEquip, setUpdateEquip] = useState({
        productBrand: props.equip.productBrand,
        productModel: props.equip.productModel,
        quantity: props.equip.quantity,
        _id: props.equip._id 
    })
  
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setUpdateEquip({
            ...updateEquip,
            [e.target.name]: e.target.value
        })
    }
    const submitUpdateEquip = (e) => {
        e.preventDefault();
        props.updateEquip(props.equip._id, updateEquip)
        setShowing(false)
    }

    return (
        <div className="index-single-item">
            <h1>{props.equip.type}</h1>
            <h2>{props.equip.productBrand}</h2>
            <h3>{props.equip.productModel}</h3>
            {props.equip.quantity > 0
                ?
                <div className="index-single-item-details">
                    <p>Quantity in stock: {props.equip.quantity}</p>
                </div>
                : 
                <p>Out of Stock!</p>
            }
            <button onClick={() => {
                props.deleteEquip(props.equip._id)
            }}>Delete</button>
            {
                showing ?
                    <div id="edit-item-form">
                        <button onClick={toggleShowing}>X</button>
                        <form onSubmit={submitUpdateEquip}>
                            {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                            Type: <input onChange={handleInputChange} type="text" name="type" value={updateEquip.type} />
                            Brand: <input onChange={handleInputChange} type="text" name="productBrand" value={updateEquip.productBrand} />
                            Model: <input onChange={handleInputChange} type="text" name="productModel" value={updateEquip.productModel} />
                            Quantity: <input onChange={handleInputChange} type="number" name="quantity" value={updateEquip.quantity} />
                            <br /><br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    :
                    <button onClick={toggleShowing}>Edit</button>
            }
            <>
            </>
        </div>
    )
}

export default SingleEquipComponent;