import axios from 'axios'

import { TUser, TUserOrder } from '../types/types'



const TOKEN = 'cmpc3hcajyh3e5ksz6xho9t77flp4pesa300js9y8w9v6xptzj0vlk0halesk27hgqslukjxpepzkmaz6jpfj8zw0x5fwsajezvb'

const instance = axios.create({
  baseURL: 'https://api.leeloo.ai/api/v1/',
  headers: {
    'X-Leeloo-AuthToken': TOKEN
  }
})


type TGetUsers = {
  data: Array<TUser>
  meta: {}
  status: number
}

type TGetUserInfo = {
  data: any
  included: {
    orders: Array<TUserOrder>
  }
  status: number
}

export const getUsers = (offset = 0) => {
  return (
    instance
      .get<TGetUsers>(`accounts?limit=10&offset=${offset}`)
      .then(res => res.data)
  )
}

export const getUserInfo = (userId: number) => {
  return (
    instance
      .get<TGetUserInfo>(`accounts/${userId}?include=orders`)
      .then(res => res.data.included.orders)
  )
}

