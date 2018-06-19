import React from 'react'
class Category extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    let catElement = this.props.categories.map((item, index) => <div key={index}> {item.name}</div>)

    return (
      <div>
        <div>{catElement}</div>
        <button className='btn btn-primary' onClick={this.props.getList}>
          Increment
        </button>
      </div>
    )
  }
}
export default Category
