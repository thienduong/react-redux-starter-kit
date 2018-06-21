import Vendor from '../components/Vendor'
import { getVendors } from '../modules/vendors'
import { connect } from 'react-redux'

const mapDispatchToProps = {
  getVendors : () => getVendors()
}

const mapStateToProps = (state) => {

  // return {
  //   categories : state.category.categories,
  //   state: state.category.state
  // };

  return { ...state.vendors };
  // return state.category;
}

export default connect(mapStateToProps, mapDispatchToProps)(Vendor)
