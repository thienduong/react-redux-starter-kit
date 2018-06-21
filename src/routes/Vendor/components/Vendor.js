
import React from 'react'
class Vendor extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    let vendorElement = this.props.vendors.map((item, index) => <div key={index}> {item.name}</div>)

    return (
      <div>
        <div>{vendorElement}</div>
        <button className='btn btn-primary' onClick={this.props.getVendors}>
          Increment
        </button>
      </div>
    )
  }
}
export default Vendor
