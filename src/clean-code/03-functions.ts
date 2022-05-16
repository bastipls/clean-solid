(() => {

    // función para obtener información de una película por Id
    function getMovieDetailsById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    interface Movie{
        title: string, 
        description: string, 
        rating: number, 
        cast: string[] 
    }

    // Crear una película
    function createMovie(movie:Movie) {
        console.log(movie);
    }

    // Crea un nuevo actor
    async function createActor( fullName: string, birthDate: Date ): Promise<boolean> {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    // Continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
      
        if ( isDead ) return 1500    

        if ( isSeparated ) return 2500;
        
        return (isRetired) ? 3000 : 4000;

    }

})();
