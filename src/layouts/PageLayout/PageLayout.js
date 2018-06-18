import React from 'react'
import { IndexLink, Link } from 'react-router'
import Header from './Header.js'
import Navigation from './Navigation.js'
import PropTypes from 'prop-types'
import './PageLayout.scss'

// export const PageLayout = ({ children }) => (
//   <div className='container text-center'>
//     <h1>React Redux Starter Kit</h1>
//     <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
//     {' · '}
//     <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
//     {' · '}
//     <Link to='/products' activeClassName='page-layout__nav-item--active'>Products</Link>
//     <div className='page-layout__viewport'>
//       {children}
//     </div>
//   </div>
// )

export const PageLayout = ({ children }) => (
  <div className='core-layout skin-blue sidebar-mini wysihtml5-supported'>
    <div id='dashboard-container'>
      <div className='wrapper'>
        <Header />
        <Navigation />
        <div className='content-wrapper'>
          {children}
        </div>
      </div>
    </div>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
