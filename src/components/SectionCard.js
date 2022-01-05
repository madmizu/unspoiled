
function SectionCard ({title, changeSection}) {




    return (
        <div className= "sections" onClick = {changeSection}>
                <h3>{title}</h3>
                {/* <img src="..." class="card-img-top" alt="..."/> */}
         </div>
    )
}

export default SectionCard;