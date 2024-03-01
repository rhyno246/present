import axios from 'axios'

export const getHotPost = async () =>  {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/news');
        return response.data
    } catch (error) {
        console.log(error)
    }
}
