
function EachRecipe ({}) {

    function deleteItem () {
        console.log("removed recipe")
    }

    return (
                <tr>
                        <th scope="row" onClick={deleteItem}>X</th>
                        <td>Chicken Noodle Soup</td>
                        <td className="availableIngredients">
                            <div className="ingredientScroll">
                                <li>2 Cups: Carrots</li>
                                <li>2 Cups: Celery</li>
                                <li>1 Box: Chicken Broth</li>
                            </div>
                        </td>
                        <td className="missingIngredients">
                            <div className="ingredientScroll">
                                <li>2 TBSP: Salt    
                                <emsp> </emsp><button className="addToList">+</button>
                                </li>
                            </div>
                        </td>
                        <td><button>Edit/Update</button></td>
                </tr>
    )
}

export default EachRecipe;