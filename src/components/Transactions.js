import SectionCard from './SectionCard';

function Transactions ({returnHome}) {

    return (
        <div className = "transactions">
            <SectionCard title = "Return Home" changeSection = {returnHome} />
            <br />
            Bought It
        </div>
    )
}

export default Transactions;