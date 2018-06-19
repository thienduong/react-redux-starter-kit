import Category from '../components/Category'
import { getList } from '../modules/category'
import { connect } from 'react-redux'

const mapDispatchToProps = {
  getList : () => getList()
}

const mapStateToProps = (state) => {
  console.log('category state: ', state);
  // return {
  //   categories : state.category.categories,
  //   state: state.category.state
  // };

  return { ...state.category };
  // return state.category;
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
