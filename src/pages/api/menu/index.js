import axios from 'axios'

export const getMenu = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/category')
        return response.data
    } catch (error) {
        console.log(error)
    }
}
