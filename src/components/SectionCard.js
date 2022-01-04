

function SectionCard ({title}) {

    return (
        <div className= "sections">
                <h3>{title}</h3>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
         </div>
    )
}

export default SectionCard;