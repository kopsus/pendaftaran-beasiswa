import axios from "axios"
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

// get data api
export async function getData(resource, header) {
  const req = await fetch(`${baseURL}/${resource}`, header)
  const res = await req.json()
  return res
}

// post data api
export async function postData(data, resource, header) {
  try {
    const res = await axios.post(`${baseURL}/${resource}`, data, header)
    return res.data
  } catch (error) {
    throw error
  }
}
