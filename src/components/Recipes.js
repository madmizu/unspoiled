
import SectionCard from './SectionCard';
import EachRecipe from './EachRecipe';

function Recipes ({returnHome}) {

    function deleteItem () {
        console.log("removed recipe")
    }

    return (
        <div className = "recipes">
            <SectionCard title = "Return Home" changeSection = {returnHome} />
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">Ingredients Available</th>
                        <th scope="col">Ingredients Missing</th>
                    </tr>
                </thead>
                <tbody>
                <EachRecipe />
                <EachRecipe />
                </tbody>
            </table>
        </div>
    )
}

export default Recipes;