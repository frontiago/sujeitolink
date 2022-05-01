import './link-item.css'
import {FiX, FiClipboard} from 'react-icons/fi'

export default function LinkItem({closeModal, content}){

    async function copyLink(){
        await navigator.clipboard.writeText(content.link)
        alert('Link copiado com sucesso')
    }

    return (
        <div className="modal-container">
            <div className="modal-header">
                <h1>Link Encurtado</h1>
                <button onClick={closeModal}>
                    <FiX size={30} color="#000"/>
                </button>
            </div>

            <span>
                {content.long_url}
            </span>

            <button className="modal-link" onClick={copyLink}>
                {content.link}
                <FiClipboard size={25} color="#fff" title="Copy link" />
            </button>
        </div>
    )
}