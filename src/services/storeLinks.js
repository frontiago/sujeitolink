// Buscar os links salvos
export async function getLinksSave(key){
    const myLinks = localStorage.getItem(key)


    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// Salvar um link no localStorage
export async function saveLink(key, newLink){
    let linkStored = await getLinksSave(key)

    const hasLink = linkStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('ESSE LINK JÁ EXISTE')
        return;
    }

    linkStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linkStored))

    console.log('LINK SALVO COM SUCESSO!')
}

// Deletar link
export function deleteLink(links, id){
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log('LINK DELETADO COM SUCESSO')
    return myLinks;
}
