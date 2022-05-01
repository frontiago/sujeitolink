import "./error.css"
import {Link} from 'react-router-dom'
import {FiChevronLeft} from 'react-icons/fi'

export default function Error(){
    return (
        <div className="container-error">
            <img src="/notfound.png" alt="not found 404" />
            <h1>Página não encontrada</h1>
            <Link to="/"><FiChevronLeft size={22} /> Voltar para o inicio</Link>
        </div>
    )
}