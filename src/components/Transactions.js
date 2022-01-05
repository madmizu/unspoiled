import SectionCard from './SectionCard';
import NewFoodItem from './NewFoodItem';

function Transactions ({returnHome}) {

    function addMoreItems (e) {
        e.preventDefault();
        return (<NewFoodItem />)
    }

    return (
        <div className = "transactions">
            <SectionCard title = "Return Home" changeSection = {returnHome} />
            <br />
            <div class ="newTransactionForm">
                <form class="newFoodForm">
                    Date of Transaction <input type="date" name="transactionDate" placeholder="Enter Date..." /> 
                    <br/> <br/>
                        <NewFoodItem />
                    <div>
                        <button onClick={addMoreItems}>Add More Items</button>
                        <button>Submit Transaction</button>
                    </div>
                    
                </form>
                </div>
            <br/>
            Bought It
        </div>
    )
}

export default Transactions;