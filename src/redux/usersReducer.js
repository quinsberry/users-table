import { getUsers, getUserInfo } from '../api/api'

const GET_ALL_USERS = 'users/GET_ALL_USERS'
const GET_USER_ORDERS_INFO = 'users/GET_USER_ORDERS_INFO'
const GET_TOTAL_USERS = 'users/GET_TOTAL_USERS'
const SET_PAGE_NUMBER = 'users/SET_PAGE_NUMBER'
const SET_ERROR = 'users/SET_ERROR'
const FETCHING_TOGGLE = 'users/FETCHING_TOGGLE'


const initialState = {
  users: [],
  userOrdersInfo: null,
  totalUsers: null,
  pageNumber: 1,
  error: null,
  isFetching: false
}

const dataReducer = (state = initialState, action) => {
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


const fetchingToggle = () => {
  return {
    type: FETCHING_TOGGLE
  }
}

const setAllUsers = (payload) => {
  return {
    type: GET_ALL_USERS,
    payload
  }
}

const setTotalUsers = (payload) => {
  return {
    type: GET_TOTAL_USERS,
    payload
  }
}

const setUserInfo = (payload) => {
  return {
    type: GET_USER_ORDERS_INFO,
    payload
  }
}

const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload
  }
}

export const setPageNumber = (payload) => {
  return {
    type: SET_PAGE_NUMBER,
    payload
  }
}

export const getUsersTC = (offset) => {
  return async dispatch => {
    dispatch(fetchingToggle())
    const fetchedUsers = await getUsers(offset)

    if (fetchedUsers.status === 0) {
      dispatch(setError(fetchedUsers.error))
      return
    }

    dispatch(setAllUsers(fetchedUsers.data))
    dispatch(setTotalUsers(fetchedUsers.meta.totalCount))
    dispatch(fetchingToggle())
  }
}

export const getUserOrdersInfoTC = (userId) => {
  return async dispatch => {
    dispatch(fetchingToggle())
    const fetchedUserInfo = await getUserInfo(userId)
    dispatch(setUserInfo(fetchedUserInfo))
    dispatch(fetchingToggle())
  }
}

export default dataReducer