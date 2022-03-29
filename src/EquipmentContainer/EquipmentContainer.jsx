import { useState, useEffect } from 'react';
import NewEquipComponent from './NewEquipComponent/NewEquipComponent';
import SingleEquipComponent from './SingleEquipComponent.jsx/SingleEquipComponent';


const EquipmentContainer = () => {
    const [equips, setEquips] = useState([])
    const [newEquipServerError, setNewEquipServerError] = useState("")
    const createNewEquip = async (newEquip) => {
        try{
            const apiResponse = await fetch("https://snowshelves2.herokuapp.com/equips", {
                method: "POST",
                body: JSON.stringify(newEquip),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await apiResponse.json()
            console.log(parsedResponse)
            if (parsedResponse.success) {
                setEquips([parsedResponse.data, ...equips])
            } else {
                setNewEquipServerError(parsedResponse.data)
            }
        }catch(err){
            console.log(err)
        }
    }
    const deleteEquip = async (idToDelete) => {
        try {
            const apiResponse = await fetch(`https://snowshelves2.herokuapp.com/equips/${idToDelete}`, {
                method: "DELETE"
            })
            const parsedResponse = await apiResponse.json()
            if (parsedResponse.success) {
                const newEquips = equips.filter(equip => equip._id !== idToDelete)
                setEquips(newEquips)
            } else {
               
            }
            console.log(parsedResponse)
        } catch (err) {
           console.log(err)
        }
        console.log("deleting item ID" + idToDelete)
    }
    const getEquips = async () => {
        try {
            const equips = await fetch('https://snowshelves2.herokuapp.com/equips')
            const parsedEquips = await equips.json();
            setEquips(parsedEquips.data)
        } catch (err) {
            console.log(err)
        }
    }
    const updateEquip = async (idToUpdate ,equipToUpdate) => {
        try{
            const apiResponse = await fetch(`https://snowshelves2.herokuapp.com/equips/${idToUpdate}`, {
                method: "PUT",
                body: JSON.stringify(equipToUpdate),
                headers: {
                    "Content-type": "application/json"
                }
            })
            const parsedResponse = await apiResponse.json();
            if(parsedResponse.success){
                const newEquips = equips.map(equip => equip._id === idToUpdate ? equipToUpdate : equip)
                setEquips(newEquips)
            }else{
        
            }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getEquips()
    }, [])
    return (
        <div>
            <h2>Gear here!</h2>
            <NewEquipComponent
                newEquipServerError={newEquipServerError}
                createNewEquip={createNewEquip}></NewEquipComponent>
            {equips.reverse().map((equip) => {
                return <SingleEquipComponent key={equip._id} equip={equip} deleteEquip={deleteEquip} updateEquip={updateEquip}></SingleEquipComponent>
            })}
        </div>
    )
}

export default EquipmentContainer;