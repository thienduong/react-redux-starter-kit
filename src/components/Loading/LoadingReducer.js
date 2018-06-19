// ------------------------------------
// Constants
// ------------------------------------
import { browserHistory } from 'react-router'
import { updateAppState } from '../AppReducer'
import { signInSuccess } from '../../routes/SignIn/modules/SignInReducer'

export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

// ------------------------------------
// Actions
// ------------------------------------
var timeOut
export function showLoading () {
  return {
    type: SHOW_LOADING
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function delayShowLoading () {
  return (dispatch) => {
    type: SHOW_LOADING
    timeOut = setTimeout(() => {
      dispatch(delayHideLoading())
    }, 1000)
  }
}
export function hideLoading () {
  return (dispatch) => {
    timeOut = setTimeout(() => {
      dispatch(hideLoading())
    }, 3000)
    timeOut = setTimeout(() => {
      dispatch(delayShowLoading())
    }, 1000)
  }
}

// ------------------------------------
export function delayHideLoading () {
  return {
    type: HIDE_LOADING
  }
}

export const actions = {
  showLoading,
  hideLoading
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SHOW_LOADING]: (state, action) => ({ ...state, isloading: true }),
  [HIDE_LOADING]: (state, action) => ({ ...state, isloading: false })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isloading: false
}
export default function loadingReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
