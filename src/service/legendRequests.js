import axios from 'axios'

export default  async (method, endpoint, payload = null) => {
  let res
  const token = `${import.meta.env.VITE_LEGEND_AUTH_TOKEN}`

 

  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,   
    headers: { 
      Authorization: `Bearer ${token}`,
    }, 
    
  })
  try {
    res = await instance[method](`/${endpoint}`, payload, {
      headers: {
        Authorization: token,
      },
    })
  } catch (error) {
    if (error.response) {
      res = error.response
    }
  }

  return res
}
