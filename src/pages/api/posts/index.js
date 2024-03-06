import axios from 'axios'

export async function getHotPost  ()  {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/news');
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function getPrams() {
    const posts = await getAllPost(["id"]);
    return posts.data.map(post => ({
        params : {
            id: `${post.id}`,
            slug : `${post.category}`,
        }
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
export async function getPostById  (slug , id ) {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/news/${slug}/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function getPostBySlug  (slug ) {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/news/${slug}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}



