import axios from 'axios'

export const getMenu = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/category')
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getNews = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        return response.data
    } catch (error) {
        console.log(error)
    }
}
