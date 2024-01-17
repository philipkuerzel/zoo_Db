import AnimalItem from "../animalItem/AnimalItem";

const AnimalList = ({animals}) => {
    return ( 
        <>
            {animals.map((animal) =>{
                return(

                    <AnimalItem
                    emoji={animal.emoji}
                    name={animal.name}
                    species={animal.species}
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