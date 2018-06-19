import axios from 'axios'
export const GET_CATEGORY_LIST_SUCCESS = 'GET_CATEGORY_LIST_SUCCESS'

export function getList () {
  return (dispatch, getState) => {
    axios.get('/api/categories').then(function (response) {
      dispatch(getCategorySuccess(response.data.categoryList))
    }).catch(function (error) {
      console.log(error)
    }
    )
  }
}
export function getCategorySuccess (categories) {
  return {
    type: GET_CATEGORY_LIST_SUCCESS,
    categories
  }
}

export const actions = {
  getList
}
const ACTION_HANDLERS = {
  [GET_CATEGORY_LIST_SUCCESS]    : (state, action) => ({ ...state, categories: action.categories }),
}
const initialState = {
  categories: [],
  state: 0
}
export default function categoryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
