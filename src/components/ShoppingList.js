import SectionCard from './SectionCard';
import GroceryItem from './GroceryItem';

function ShoppingList ({returnHome}) {

    return (
        <div className = "inventory">
             <SectionCard title = "Return Home" changeSection = {returnHome} />
                <br />
            <table className="table" id="shoppingListTable">
                <thead>
                    <tr>
                        <th scope="col"></th>
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

export default ShoppingList;