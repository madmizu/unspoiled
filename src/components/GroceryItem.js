


function GroceryItem () {

    function deleteItem () {
        return (
            console.log("deleted")
        )
    }
    return (
        <tr>
            <th scope="row" onClick={deleteItem} >X</th>
            {/* {shoppingList ? null: <td>SpoilDate</td>} */}
            <td>Nov 2</td>
            <td>Vegetable</td>
            <td>Carrots</td>
            <td>2 Bags</td>
            <td>Chicken Noodle Soup, Salad, Chicken Pot Pie</td>
 
        </tr>
    )
}
export default GroceryItem;