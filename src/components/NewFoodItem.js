

function NewFoodItem () {

    return(
        <div class="newFoodItem">
            <form class="newFoodForm">
                Item Name 
                    <input
                    type="text"
                    name="groceryItem"
                    placeholder="Enter Name of Item..."
                    /> <em> </em>
                Category 
                    <select>
                        <option>Select a Category</option>
                        <option>Fruit</option>
                        <option>Vegetable</option>
                        <option>Dairy</option>
                        <option>Meat</option>
                        <option>Dry Goods</option>
                        <option>Ready-To-Eat</option>
                        <option>Other</option>
                    </select>
                    <em> </em>
                Quantity Purchased 
                    <input
                    type="integer"
                    name="quantity"
                    placeholder="Enter Quanitity..."
                    /> <em></em>
                Unit of Measure 
                    <select>
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
                    <em></em>
            </form>
        </div>
    )
}

export default NewFoodItem;