// export default function handler(req, res) {
//     res.status(200).json({ name: "John Doe" });
//   }

import axios from "axios"

  

export const SignUp = async (data) => {
  try {
      const response = await axios.post('http://localhost:8000/api/v1/users' , data)
      return response.data
  } catch (error) {
      console.log(error)
  }
}

  