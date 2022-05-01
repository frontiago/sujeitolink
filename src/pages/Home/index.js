import {useState} from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'
import api from '../../services/api'
import {saveLink} from '../../services/storeLinks'

export default function Home(){
    const [link, setLink] = useState('')
    const [showModal, setShowmodal] = useState(false)
    const [data, setData] = useState({})

    async function handleShortLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: link
            })            
            
            setData(response.data)
            setShowmodal(true)            
            
            saveLink('@encurtaLink', response.data)
            setLink('')

        } catch {
            alert("Parece que algo deu errado")
            setLink('')
        }
    }

    return (
        <div className="container-home">            
            <div className="logo">                
            <img src="logo.jpg" alt="Logo Link" />
                <h1>Sujeito<strong>Link</strong></h1>
                <span>Cole seu link para encurtar</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={20} color="#fff" />
                    <input onChange={(e) => setLink(e.target.value)} value={link} placeholder="Cole o seu link aqui..." />    
                </div>
                <button onClick={handleShortLink}>Encurtar Link</button>
            </div>            
            
            <Menu />
            {showModal && (<LinkItem closeModal={ () => setShowmodal(false) } content={data} />) }
        </div>
    )
}