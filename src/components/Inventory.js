import SectionCard from './SectionCard';
import GroceryItem from './GroceryItem';

function Inventory ({returnHome}) {

    return (
        <div className = "inventory">
             <SectionCard title = "Return Home" changeSection = {returnHome} />
                <br />
            <table className="table" id="inventoryTable">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Spoil Date</th>
                        <th scope="col">Category</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Quantity</th> 
                        <th scope="col">Recipes</th>
                    </tr>
                </thead>
                <tbody>
                    <GroceryItem />
                    <GroceryItem />
                    <GroceryItem />
                    <GroceryItem />
                    <GroceryItem />
                    <GroceryItem />
                </tbody>
            </table>
        </div>
    )
}

export default Inventory;