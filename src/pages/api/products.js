export default function handler(req, res) {
    if(req.method !== 'GET'){
        return res.status(404).json({ name : 'method not supported' })
    }
    res.status(200).json({ name: "get list of post" });
  }
  

// import axios from 'axios'

// export const getNews = async () => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const getNewsParams = async () => {
//     const newsDetail = await getNews()
//     return newsDetail.map(item => ({
//         params : {
//             newsId : `${ item.id }`
//         }
//     }))
// }

// export const getNewsById = async newsId => {
//     try {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${ newsId }`)
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }