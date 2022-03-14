import SectionCard from './SectionCard';
import NewFoodItem from './NewFoodItem';
import { useState } from 'react';

function Purchases ({returnHome, createNewPurchase, createNewItem, newPurchaseInstance}) {
    const [itemsPurchased, setItemsPurchased] = useState([]);
    const [rendering, setRendering] = useState("purchases");
    const [purchaseData, setPurchaseData] = useState({
        purchase_date:''
    });

    function handlePurchaseDateSubmit (e) {
        e.preventDefault()
        setRendering("newItems")
        createNewPurchase (purchaseData)
    }

    function handlePurchaseDateChange (e) {
        setPurchaseData({...purchaseData, [e.target.name]:e.target.value})
    }


    return (
        <>      
            <div className="col-sm-12">
                <SectionCard title = "Bought It - Add New Purchases"/>
            </div>
            <div className="col-sm-12">
                <SectionCard title = "Return Home" changeSection = {returnHome} />
            </div>
            <br />
            {rendering === "purchased" ? <p>New items have been added to your inventory!</p>: null}
            {rendering === "newItems" ? 
                <div className = "purchases">
                    


                 
                    <h4>Date of Purchase {purchaseData.purchase_date} </h4>
                    {itemsPurchased[0]? 
                        <table className="table" id="inventoryTable">
                            <thead>
                                <tr>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Quantity</th> 
                                    <th scope="col">Spoil Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemsPurchased.map(item => 
                                    <tr key={item.item_name + item.spoil_date}>
                                        <td>{item.item_name}</td>
                                        <td>{item.quantity} x {item.unit_of_measure}</td>
                                        <td>{item.spoil_date}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table> 
                    : null }
                    <NewFoodItem 
                        createNewItem={createNewItem} itemsPurchased={itemsPurchased} setItemsPurchased={setItemsPurchased} setRendering={setRendering} newPurchaseInstance={newPurchaseInstance}/> 
                </div> 
                :
                <div className = "purchases">
                    <form id="newPurchase" onSubmit={handlePurchaseDateSubmit}>
                        <h3>Enter Date of Purchase: </h3>
                        <div className="form-group col-xs-6">
                            <label>Date of Purchase &nbsp;</label>
                            <input type="date" name="purchase_date" value={purchaseData.purchase_date} onChange={handlePurchaseDateChange}/>
                        </div>
                        <div className="form-group col-sm-2"> 
                            <button type="submit" className="btn btn-dark">Submit Transaction</button> 
                        </div>
                </form> 
                </div>
                }
            <br/>
        </>
    )
}

export default Purchases;