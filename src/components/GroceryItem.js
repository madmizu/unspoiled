


function GroceryItem ({item, handleDelete, body}) {

    const section = body === "inventory" ? "inventory" : "shopping-list"
    let i = 0
    function renderRecipes (name) {
        i++
        return <li key={name+i}>{name}</li>
    }

    return (
        <tr>
            <th scope="row" onClick={()=>handleDelete(section, item.id)}>X</th>
            {body === "inventory" ? <td>{item.grocery_item.spoil_date.spoil_date}</td> : null}
            <td>{item.grocery_item.item_name}</td>
            <td>{item.quantity} x {item.unit_of_measure}</td>
            <td>{item.grocery_item.recipe_ingredients.map(item=>item.recipe.recipe_name).map(name=>renderRecipes(name))}
            </td>
        </tr>
    )
}
export default GroceryItem;

// (e)=>handleDelete(id)