import axios from 'axios'



const TOKEN = 'cmpc3hcajyh3e5ksz6xho9t77flp4pesa300js9y8w9v6xptzj0vlk0halesk27hgqslukjxpepzkmaz6jpfj8zw0x5fwsajezvb'

const instance = axios.create({
  baseURL: 'https://api.leeloo.ai/api/v1/',
  headers: {
    'X-Leeloo-AuthToken': TOKEN
  }
})

export const getUsers = (offset = 0) => {
  return (
    instance
      .get(`accounts?limit=10&offset=${offset}`)
      .catch(err => {
        alert(`Ups, we have some problems. ${err}`)
        console.log(err)
      })
      .then(res => {
        console.log(res.data)
        return res.data
      })
  )
}

export const getUserInfo = (userId) => {
  return (
    instance
      .get(`accounts/${userId}?include=orders`)
      .then(res => res.data.included.orders)
  )
}

