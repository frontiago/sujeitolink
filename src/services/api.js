import axios from 'axios'

export const key  = "06c3b4a233c662b42d6d5d7f6605c23f8623e4f8"

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4",
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api