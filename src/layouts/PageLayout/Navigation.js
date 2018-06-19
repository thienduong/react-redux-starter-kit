import React from 'react'

class Navigation extends React.Component {
  constructor (props) {
    super(props)
  }

;

  componentDidMount () {
    let _this = this
    $(document).on('click', '.sidebar li a', function (e) {
      // Get the clicked link and the next element
      var $this = $(this)
      var checkElement = $this.next()

      // Check if the next element is a menu and is visible
      if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible'))) {
        // Close the menu
        checkElement.slideUp(500, function () {
          checkElement.removeClass('menu-open')
          // Fix the layout in case the sidebar stretches over the height of the window
          // _this.layout.fix();
        })
        checkElement.parent('li').removeClass('active')
      }
      // If the menu is not visible
      else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
        // Get the parent menu
        var parent = $this.parents('ul').first()
        // Close all open menus within the parent
        var ul = parent.find('ul:visible').slideUp(500)
        // Remove the menu-open class from the parent
        ul.removeClass('menu-open')
        // Get the parent li
        var parent_li = $this.parent('li')

        // Open the target menu and add the menu-open class
        checkElement.slideDown(500, function () {
          // Add the class active to the parent li
          checkElement.addClass('menu-open')
          parent.find('li.active').removeClass('active')
          parent_li.addClass('active')
          // Fix the layout in case the sidebar stretches over the height of the window
          _this.fix()
        })
      }
      // if this isn't a link, prevent the page from being redirected
      if (checkElement.is('.treeview-menu')) {
        e.preventDefault()
      }
    })
  }

  fix () {
    // Get window height and the wrapper height
    var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight()
    var window_height = $(window).height()
    var sidebar_height = $('.sidebar').height()
    // Set the min-height of the content and sidebar based on the
    // the height of the document.
    if ($('body').hasClass('fixed')) {
      $('.content-wrapper, .right-side').css('min-height', window_height - $('.main-footer').outerHeight())
    } else {
      var postSetWidth
      if (window_height >= sidebar_height) {
        $('.content-wrapper, .right-side').css('min-height', window_height - neg)
        postSetWidth = window_height - neg
      } else {
        $('.content-wrapper, .right-side').css('min-height', sidebar_height)
        postSetWidth = sidebar_height
      }

      // Fix for the control sidebar height
      var controlSidebar = $('.control-sidebar')
      if (typeof controlSidebar !== 'undefined') {
        if (controlSidebar.height() > postSetWidth) { $('.content-wrapper, .right-side').css('min-height', controlSidebar.height()) }
      }
    }
  }

;

  render () {
    return (
      <aside className='main-sidebar'>
        {/* <!-- sidebar: style can be found in sidebar.less --> */}
        <section className='sidebar'>
          {/* <!-- Sidebar user panel --> */}
          <div className='user-panel'>
            <div className='pull-left image'>
              <img src='dist/img/user2-160x160.jpg' className='img-circle' alt='User Image' />
            </div>

            <div className='pull-left info'>
              <p>Alexander Pierce</p>
              <a href='#'><i className='fa fa-circle text-success' /> Online</a>
            </div>
          </div>
          {/* <!-- search form --> */}
          <form action='#' method='get' className='sidebar-form'>
            <div className='input-group'>
              <input type='text' name='q' className='form-control' placeholder='Search...' />
              <span className='input-group-btn'>
                <button type='submit' name='search' id='search-btn' className='btn btn-flat'><i
                  className='fa fa-search' /></button>
              </span>
            </div>
          </form>
          {/* <!-- /.search form --> */}
          {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
          <ul className='sidebar-menu'>
            <li className='header'>MAIN NAVIGATION</li>
            <li className='active treeview'>
              <a href='#'>
                <i className='fa fa-dashboard' /> <span>Dashboard</span> <i
                  className='fa fa-angle-left pull-right' />
              </a>
              <ul className='treeview-menu'>
                <li className='active'><a href='index.html'><i className='fa fa-circle-o' /> Dashboard v1</a></li>
                <li><a href='index2.html'><i className='fa fa-circle-o' /> Dashboard v2</a></li>
              </ul>
            </li>
            <li className='treeview'>
              <a href='#'>
                <i className='fa fa-files-o' />
                <span>Layout Options</span>
                <span className='label label-primary pull-right'>4</span>
              </a>
              <ul className='treeview-menu'>
                <li><a href='pages/layout/top-nav.html'><i className='fa fa-circle-o' /> Top Navigation</a></li>
                <li><a href='pages/layout/boxed.html'><i className='fa fa-circle-o' /> Boxed</a></li>
                <li><a href='pages/layout/fixed.html'><i className='fa fa-circle-o' /> Fixed</a></li>
                <li><a href='pages/layout/collapsed-sidebar.html'><i className='fa fa-circle-o' /> Collapsed
                  Sidebar</a></li>
              </ul>
            </li>
            <li>
              <a href='pages/widgets.html'>
                <i className='fa fa-th' /> <span>Widgets</span>
                <small className='label pull-right bg-green'>new</small>
              </a>
            </li>
            <li className='treeview'>
              <a href='#'>
                <i className='fa fa-pie-chart' />
                <span>Charts</span>
                <i className='fa fa-angle-left pull-right' />
              </a>
              <ul className='treeview-menu'>
                <li><a href='pages/charts/chartjs.html'><i className='fa fa-circle-o' /> ChartJS</a></li>
                <li><a href='pages/charts/morris.html'><i className='fa fa-circle-o' /> Morris</a></li>
                <li><a href='pages/charts/flot.html'><i className='fa fa-circle-o' /> Flot</a></li>
                <li><a href='pages/charts/inline.html'><i className='fa fa-circle-o' /> Inline charts</a></li>
              </ul>
            </li>
            <li className='treeview'>
              <a href='#'>
                <i className='fa fa-laptop' />
                <span>UI Elements</span>
                <i className='fa fa-angle-left pull-right' />
              </a>
              <ul className='treeview-menu'>
                <li><a href='pages/UI/general.html'><i className='fa fa-circle-o' /> General</a></li>
                <li><a href='pages/UI/icons.html'><i className='fa fa-circle-o' /> Icons</a></li>
                <li><a href='pages/UI/buttons.html'><i className='fa fa-circle-o' /> Buttons</a></li>
                <li><a href='pages/UI/sliders.html'><i className='fa fa-circle-o' /> Sliders</a></li>
                <li><a href='pages/UI/timeline.html'><i className='fa fa-circle-o' /> Timeline</a></li>
                <li><a href='pages/UI/modals.html'><i className='fa fa-circle-o' /> Modals</a></li>
              </ul>
            </li>
            <li className='treeview'>
              <a href='#'>
                <i className='fa fa-edit' /> <span>Forms</span>
                <i className='fa fa-angle-left pull-right' />
              </a>
              <ul className='treeview-menu'>
                <li><a href='pages/forms/general.html'><i className='fa fa-circle-o' /> General Elements</a></li>
                <li><a href='pages/forms/advanced.html'><i className='fa fa-circle-o' /> Advanced Elements</a></li>
                <li><a href='pages/forms/editors.html'><i className='fa fa-circle-o' /> Editors</a></li>
              </ul>
            </li>
            <li className='treeview'>
              <a href='#'>
                <i className='fa fa-table' /> <span>Tables</span>
                <i className='fa fa-angle-left pull-right' />
              </a>
              <ul className='treeview-menu'>
                <li><a href='pages/tables/simple.html'><i className='fa fa-circle-o' /> Simple tables</a></li>
                <li><a href='pages/tables/data.html'><i className='fa fa-circle-o' /> Data tables</a></li>
              </ul>
            </li>
            <li>
              <a href='pages/calendar.html'>
                <i className='fa fa-calendar' /> <span>Calendar</span>
                <small className='label pull-right bg-red'>3</small>
              </a>
            </li>
            <li>
              <a href='pages/mailbox/mailbox.html'>
                <i className='fa fa-envelope' /> <span>Mailbox</span>
                <small className='label pull-right bg-yellow'>12</small>
              </a>
            </li>
            <li className='treeview'>
              <a href='#'>
                <i className='fa fa-folder' /> <span>Examples</span>
                <i className='fa fa-angle-left pull-right' />
              </a>
              <ul className='treeview-menu'>
                <li><a href='pages/examples/invoice.html'><i className='fa fa-circle-o' /> Invoice</a></li>
                <li><a href='pages/examples/profile.html'><i className='fa fa-circle-o' /> Profile</a></li>
                <li><a href='pages/examples/login.html'><i className='fa fa-circle-o' /> Login</a></li>
                <li><a href='pages/examples/register.html'><i className='fa fa-circle-o' /> Register</a></li>
                <li><a href='pages/examples/lockscreen.html'><i className='fa fa-circle-o' /> Lockscreen</a></li>
                <li><a href='pages/examples/404.html'><i className='fa fa-circle-o' /> 404 Error</a></li>
                <li><a href='pages/examples/500.html'><i className='fa fa-circle-o' /> 500 Error</a></li>
                <li><a href='pages/examples/blank.html'><i className='fa fa-circle-o' /> Blank Page</a></li>
              </ul>
            </li>
            <li className='treeview'>
              <a href='#'>
                <i className='fa fa-share' /> <span>Multilevel</span>
                <i className='fa fa-angle-left pull-right' />
              </a>
              <ul className='treeview-menu'>
                <li><a href='#'><i className='fa fa-circle-o' /> Level One</a></li>
                <li>
                  <a href='#'><i className='fa fa-circle-o' /> Level One <i
                    className='fa fa-angle-left pull-right' /></a>
                  <ul className='treeview-menu'>
                    <li><a href='#'><i className='fa fa-circle-o' /> Level Two</a></li>
                    <li>
                      <a href='#'><i className='fa fa-circle-o' /> Level Two <i
                        className='fa fa-angle-left pull-right' /></a>
                      <ul className='treeview-menu'>
                        <li><a href='#'><i className='fa fa-circle-o' /> Level Three</a></li>
                        <li><a href='#'><i className='fa fa-circle-o' /> Level Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href='#'><i className='fa fa-circle-o' /> Level One</a></li>
              </ul>
            </li>
            <li><a href='documentation/index.html'><i className='fa fa-book' /> <span>Documentation</span></a></li>
            <li className='header'>LABELS</li>
            <li><a href='#'><i className='fa fa-circle-o text-red' /> <span>Important</span></a></li>
            <li><a href='#'><i className='fa fa-circle-o text-yellow' /> <span>Warning</span></a></li>
            <li><a href='#'><i className='fa fa-circle-o text-aqua' /> <span>Information</span></a></li>
          </ul>
        </section>
        {/* <!-- /.sidebar --> */}
      </aside>
    )
  }
}

export default Navigation
