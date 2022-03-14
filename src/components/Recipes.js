
import SectionCard from './SectionCard';
import EachRecipe from './EachRecipe';

function Recipes ({returnHome}) {

    return (
        <div className = "recipes">
            <div className="col-sm-12">
                <SectionCard title = "Cook It - Recipes"/>
            </div>
            <div className="col-sm-12">
                <SectionCard title = "Return Home" changeSection = {returnHome} />
            </div>
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