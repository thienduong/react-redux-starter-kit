import axios from 'axios'
export const GET_VENDOR_LIST_SUCCESS = 'GET_VENDOR_LIST_SUCCESS'

export function getVendors () {
  return (dispatch, getState) => {
    axios.get('/api/vendor').then(function (response) {
      dispatch(getVendorSuccess(response.data.vendorList))
    }).catch(function (error) {
        console.log(error)
      }
    )
  }
}
export function getVendorSuccess (vendors) {
  return {
    type: GET_VENDOR_LIST_SUCCESS,
    vendors
  }
}

export const actions = {
  getVendors
}
const ACTION_HANDLERS = {
  [GET_VENDOR_LIST_SUCCESS]    : (state, action) => ({ ...state, vendors: action.vendors }),
}
const initialState = {
  vendors: [],
  state: 0
}
export default function vendorReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
