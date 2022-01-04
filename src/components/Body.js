import SectionCard from "./SectionCard.js"

function Body () {

    return (
        <div className = "body">
            <div className = "cards">
                <SectionCard title = "Bought It"/>
                <SectionCard title = "Have It"/>
                <SectionCard title = "Need It"/>
                <SectionCard title = "Cook It"/>
            </div>
        </div>
    )
}

export default Body;