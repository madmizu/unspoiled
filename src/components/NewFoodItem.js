import { useState } from 'react';


function NewFoodItem ({ addMoreItems, newPurchaseInstance, createNewItem, itemsPurchased, setItemsPurchased, setRendering} ) {
    const [formData,setFormData] = useState({
        item_name:'',
        quantity:'',
        unit_of_measure:'',
        spoil_date:''
    })

    function handleChange (e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    async function handleAddItem (e) {
        e.preventDefault()
        setRendering("purchases")
        itemsPurchased.push(formData)
        setItemsPurchased(itemsPurchased)
        await displayNewItems()
    }

    function displayNewItems () {
        return new Promise(resolve => {
            setTimeout(()=> {
                resolve(setRendering("newItems"));
            }, 1);
        })
    }

    function handleSubmitPurchase (e) {
        console.log("clicked")
        for (let i=0; i<itemsPurchased.length; i++) {
        createNewItem(itemsPurchased[i])  
        }
        setItemsPurchased([])
        setRendering("purchased")

    }

    return (
        <div>


        <form onSubmit={handleAddItem}>
            <div className="newItems">
                <h5>Add Items Purchased: </h5>
                <div className="form-group col-xs-3">   
                    <label>Item Name</label>
                    <input type="string" name="item_name" value={formData.item_name} onChange={handleChange}/>
                </div>
                <div className="form-group col-xs-3">
                    <label>Quantity</label>
                    <input type="number" name="quantity" value={formData.quantity} onChange={handleChange}/>
                </div>
                <div className="form-group col-xs-3">
                    <label>Unit of Measure</label>
                    <select type="string" name="unit_of_measure" value={formData.unit_of_measure} onChange={handleChange}>
                        <option>Select a Unit</option>
                        <option>Whole Item</option>
                        <option>Box</option>
                        <option>Bag</option>
                        <option>Jar</option>
                        <option>Can</option>
                        <option>Bottle</option>
                        <option>Package</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group col-xs-3">
                    <label>Spoil Date </label>
                    <input type="date" name="spoil_date" value={formData.spoil_date} onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group col-sm-4">
                <button type="submit" className="btn btn-secondary">Add Item to Purchase</button>
            </div>
        </form>
        <div className="form-group col-sm-4">
            <button type="click" className="btn btn-dark"  onClick={(e)=>handleSubmitPurchase(e)}>Submit Purchase</button>
        </div>
    </div>
    )
}

export default NewFoodItem;