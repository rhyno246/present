// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
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