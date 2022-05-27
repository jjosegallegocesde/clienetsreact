

export function PrimerComponente(){

    let nombre="Juan Jose"
    let persona={

        nombre:"Juan",
        edad:32,
        comidaFavorita:"frijolitos"

    }

    return(

        <div>
            <h1 className="text-center">Bienvenidos</h1>
            <ul>
                <li>{persona.nombre}</li>
                <li>{persona.edad}</li>
                <li>{persona.comidaFavorita}</li>
            </ul>

            
            
        </div>
       
    
    )

}