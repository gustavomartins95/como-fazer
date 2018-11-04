const axios = require('axios')
const auth = 'SOzsStnVldJ779MAUsnVy3RgBcFLwm6UMVzFIDo8'
const baseURL = 'https://como-fazer-devpleno-2018.firebaseio.com'

const get = async (key, id) => {
  const content = await axios.get(`${baseURL}/${key}/${id}.json?auth=${auth}`)
  return {
    id: id,
    ...content.data
  }
}

const create = async (key, data) => {
  await axios.post(`${baseURL}/${key}.json?auth=${auth}`, data)
  return true
}

const list = async (key) => {
  const content = await axios.get(`${baseURL}/${key}.json?auth=${auth}`)
  if (content.data) {
    const objetos = Object
      .keys(content.data)
      .map(key => {
        return {
          id: key,
          ...content.data[key]
        }
      })
    return objetos
  }
  return []
}

const update = async (key, id, data) => {
  await axios.put(`${baseURL}/${key}/${id}.json?auth=${auth}`, data)
  return true
}

const apagar = async (key, id) => {
  await axios.delete(`${baseURL}/${key}/${id}.json?auth=${auth}`)
}

module.exports = {
  create,
  get,
  list,
  update,
  apagar
}
