import AnimalItem from "../animalItem/AnimalItem";
import animals from "../../data/animals"



const AnimalList = ({animals}) => {
    return ( 
        <>
            {animals.map((animal) =>{
                return(
                    <AnimalItem
                    emoji={animal.emoji}
                    name={animal.name}
                    species={animal.species}
                    habitat={animal.habitat}
                    diet={animal.diet}
                    lifespan={animal.lifespan}
                    funFacts={animal.funFacts}
                    />
                    )
                }
        )}
        </>
    );
}

export default AnimalList;