
import imagen from '../Imagen/dentall.jpg'
export default function HeaderApp(){
    return(
        <div>
            <h4 className="Titulo">Dentall</h4>
            <img className="Logo-laboratorio" src={imagen} alt="Logo del laboratorio"></img>
        </div>
    )
}