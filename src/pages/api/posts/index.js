export default function handler(req, res) {
    if(req.method !== 'GET'){
        return res.status(404).json({ name : 'method not supported' })
    }
    res.status(200).json({ name: "get list of post" });
  }
  
  
  //proxy server -> http-proxy