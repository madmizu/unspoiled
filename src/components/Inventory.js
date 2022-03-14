import SectionCard from './SectionCard';
import GroceryItem from './GroceryItem';

function Inventory ({returnHome, itemsToRender, body, handleItemDelete}) {

    console.log(itemsToRender)
    return (
        <div className = "inventory">
            <div className="col-sm-12">
                <SectionCard title = {body === "inventory" ? "Have It - Inventory" : "Need It - Shopping List"}/>
            </div>
            <div className="col-sm-12">
                <SectionCard title = "Return Home" changeSection = {returnHome} />
            </div>
                <br />
            <table className="table" id="inventoryTable">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        {body === "inventory" ? <th scope="col">Spoil Date</th> : null}
                        <th scope="col">Item Name</th>
                        <th scope="col">Quantity</th> 
                        <th scope="col">Recipes</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsToRender.map(item => 
                        <GroceryItem item={item} key={item.id} body={body} handleDelete={handleItemDelete}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Inventory;