import axios from 'axios'

export async function getHotPost  ()  {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/news');
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function getAllPostIds() {
    const posts = await getAllPost();
    return posts.data.map(post => ({
        params: { 
            id: `${post.id}`,
            category : `${post.category}`
        },
    }))
  }

export async function  getAllPost ()  {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/all')
        return response.data
    } catch (error) {
        console.log(error)
    }
}

// 
export async function getPostById  (id , category ) {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/${category}/${ id }`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
