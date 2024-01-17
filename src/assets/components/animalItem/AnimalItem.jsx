import './animalitem.css'
const AnimalItem = ({emoji, name, species, habitat, diet,lifespan,funFacts}) => {
    return ( 
        <>
        <div id="animal-item">
            <div id="animal-info">
            <h2 id="emoji">{emoji}</h2>
            <h2>{name}</h2>
            <h3>{species}</h3>
            <h3>{habitat}</h3>
            <h3>{diet}</h3>
            <h4>{lifespan} years</h4>
            </div>
            <div id="animal-funFacts">
            {funFacts.map((funFact =>
                <li>{funFact}</li>
                ))}
            </div>
        </div>
        </>
    );
}

export default AnimalItem;