import { getUsers, getUserInfo } from '../api/api'

import { TAppState, TUser, TUserOrder, TInferActions, TError } from '../types/types'
import { ThunkAction } from 'redux-thunk'

const GET_ALL_USERS = 'users/GET_ALL_USERS'
const GET_USER_ORDERS_INFO = 'users/GET_USER_ORDERS_INFO'
const GET_TOTAL_USERS = 'users/GET_TOTAL_USERS'
const SET_PAGE_NUMBER = 'users/SET_PAGE_NUMBER'
const SET_ERROR = 'users/SET_ERROR'
const FETCHING_TOGGLE = 'users/FETCHING_TOGGLE'

type TInitialState = typeof initialState



const initialState = {
  users: [] as Array<TUser>,
  userOrdersInfo: null as Array<TUserOrder>,
  totalUsers: null as number,
  pageNumber: 1,
  error: null as TError,
  isFetching: false
}

const dataReducer = (state = initialState, action: TActions): TInitialState => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload
      }
    case GET_USER_ORDERS_INFO:
      return {
        ...state,
        userOrdersInfo: action.payload.length ? action.payload : null,
      }
    case GET_TOTAL_USERS:
      return {
        ...state,
        totalUsers: action.payload
      }
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case FETCHING_TOGGLE:
      return {
        ...state,
        isFetching: !state.isFetching
      }
    default:
      return state

  }
}

type TActions = TInferActions<typeof actions>

export const actions = {
  fetchingToggle: () => ({ type: FETCHING_TOGGLE } as const),
  setAllUsers: (payload: Array<TUser>) => ({ type: GET_ALL_USERS, payload } as const),
  setTotalUsers: (payload: number) => ({ type: GET_TOTAL_USERS, payload } as const),
  setUserInfo: (payload: Array<TUserOrder> | []) => ({ type: GET_USER_ORDERS_INFO, payload } as const),
  setError: (payload: TError) => ({ type: SET_ERROR, payload } as const),
  setPageNumber: (payload: number) => ({ type: SET_PAGE_NUMBER, payload } as const)
}



type TThunk = ThunkAction<Promise<void>, TAppState, unknown, TActions>

export const getUsersTC = (offset: number): TThunk => {
  return async dispatch => {
    dispatch(actions.fetchingToggle())
    const fetchedUsers = await getUsers(offset)

    if (fetchedUsers.status === 0) {
      dispatch(actions.setError(fetchedUsers.error))
      return
    }

    dispatch(actions.setAllUsers(fetchedUsers.data))
    dispatch(actions.setTotalUsers(fetchedUsers.meta.totalCount))
    dispatch(actions.fetchingToggle())
  }
}

export const getUserOrdersInfoTC = (userId: number): TThunk => {
  return async dispatch => {
    dispatch(actions.fetchingToggle())
    const fetchedUserInfo = await getUserInfo(userId)
    dispatch(actions.setUserInfo(fetchedUserInfo))
    dispatch(actions.fetchingToggle())
  }
}

export const setPageNumberTC = (pageNumber: number): TThunk => {
  return async dispatch => {
    await dispatch(actions.setPageNumber(pageNumber))
  }
}

export default dataReducer