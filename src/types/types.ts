import { TRootReducer } from '../redux/store'

export type TAppState = ReturnType<TRootReducer>

type TProperties<T> = T extends { [keys: string]: infer U } ? U : never
export type TInferActions<T extends { [keys: string]: (...args: any[]) => any }> = ReturnType<TProperties<T>>

export type TUser = {
  id: string
  preson_id: string
  name: string
  tags: Array<string> | []
  from: string
  botStatus: string
  lastMessageTime: string
  createdAt: string
}

export type TUserOrder = {
  id: string
  title: string
  price: number
  currency: string
  status: string
  updatedAt: string
}

export type TError = {
  code: string
  message: string
  traceId: string
}