import React from 'react';

function SideNav(props) {
   return <React.Fragment>
<nav id="sidebar" className="sidebar">
    <div className="sidebar-content js-simplebar">
      <a className="sidebar-brand" href="index-2.html">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20" xmlSpace="preserve">
          <path d="M19.4,4.1l-9-4C10.1,0,9.9,0,9.6,0.1l-9,4C0.2,4.2,0,4.6,0,5s0.2,0.8,0.6,0.9l9,4C9.7,10,9.9,10,10,10s0.3,0,0.4-0.1l9-4
        C19.8,5.8,20,5.4,20,5S19.8,4.2,19.4,4.1z" />
          <path d="M10,15c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
        c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,15,10.1,15,10,15z" />
          <path d="M10,20c-0.1,0-0.3,0-0.4-0.1l-9-4c-0.5-0.2-0.7-0.8-0.5-1.3c0.2-0.5,0.8-0.7,1.3-0.5l8.6,3.8l8.6-3.8c0.5-0.2,1.1,0,1.3,0.5
        c0.2,0.5,0,1.1-0.5,1.3l-9,4C10.3,20,10.1,20,10,20z" />
        </svg>
        <span className="align-middle mr-3"> Nimblevend</span>
      </a>
      <ul className="sidebar-nav">
        <li className="sidebar-header">
    Store management
        </li>
        <li className="sidebar-item active">
          <a href="#dashboards" className="sidebar-link">
            <i className="align-middle" data-feather="home" /> <span className="align-middle">Dashboard</span>
    
          </a>
            </li>
        <li className="sidebar-item">
          <a href="#pages" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="wind" /> <span className="align-middle">Sales</span>
          </a>
          <ul id="pages" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="pages-profile.html">Profile</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-settings.html">Settings</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-clients.html">Clients</a></li>
            <li className="sidebar-item">
              <a href="#projects" data-toggle="collapse" className="sidebar-link collapsed">
                Projects
              </a>
              <ul id="projects" className="sidebar-dropdown list-unstyled collapse">
                <li className="sidebar-item">
                  <a className="sidebar-link" href="pages-projects-list.html">List</a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="pages-projects-detail.html">Detail <span className="badge badge-sidebar-primary">New</span></a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-invoice.html">Invoice</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-pricing.html">Pricing</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-tasks.html">Tasks</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-chat.html">Chat <span className="badge badge-sidebar-primary">New</span></a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-blank.html">Blank Page</a></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a href="#auth" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="users" /> <span className="align-middle">Auth</span>
            <span className="badge badge-sidebar-secondary">Special</span>
          </a>
          <ul id="auth" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-in.html">Sign In</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-sign-up.html">Sign Up</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-reset-password.html">Reset Password</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-404.html">404 Page</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="pages-500.html">500 Page</a></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a href="#documentation" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="book-open" /> <span className="align-middle">Documentation</span>
          </a>
          <ul id="documentation" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="docs-introduction.html">Introduction</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="docs-installation.html">Getting Started</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="docs-customization.html">Customization</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="docs-plugins.html">Plugins</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="docs-changelog.html">Changelog</a></li>
          </ul>
        </li>
        <li className="sidebar-header">
          Tools &amp; Components
        </li>
        <li className="sidebar-item">
          <a href="#ui" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="grid" /> <span className="align-middle">UI Elements</span>
          </a>
          <ul id="ui" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="ui-alerts.html">Alerts</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-buttons.html">Buttons</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-cards.html">Cards</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-carousel.html">Carousel</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-embed-video.html">Embed Video</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-general.html">General <span className="badge badge-sidebar-primary">10+</span></a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-grid.html">Grid</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-modals.html">Modals</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-tabs.html">Tabs</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="ui-typography.html">Typography</a></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a href="#icons" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="heart" /> <span className="align-middle">Icons</span>
            <span className="badge badge-sidebar-primary">1500+</span>
          </a>
          <ul id="icons" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="icons-feather.html">Feather</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="icons-font-awesome.html">Font Awesome</a></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a href="#forms" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="check-square" /> <span className="align-middle">Forms</span>
          </a>
          <ul id="forms" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="forms-layouts.html">Layouts</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="forms-basic-inputs.html">Basic Inputs</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="forms-input-groups.html">Input Groups</a></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="tables-bootstrap.html">
            <i className="align-middle" data-feather="list" /> <span className="align-middle">Tables</span>
          </a>
        </li>
        <li className="sidebar-header">
          Plugin &amp; Addons
        </li>
        <li className="sidebar-item">
          <a href="#form-plugins" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="check-square" /> <span className="align-middle">Form Plugins</span>
          </a>
          <ul id="form-plugins" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="forms-advanced-inputs.html">Advanced Inputs</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="forms-editors.html">Editors</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="forms-validation.html">Validation</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="forms-wizard.html">Wizard</a></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a href="#datatables" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="list" /> <span className="align-middle">DataTables</span>
          </a>
          <ul id="datatables" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-responsive.html">Responsive Table</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-buttons.html">Table with Buttons</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-column-search.html">Column Search</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-multi.html">Multi Selection</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="tables-datatables-ajax.html">Ajax Sourced Data</a></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a href="#charts" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="pie-chart" /> <span className="align-middle">Charts</span>
            <span className="badge badge-sidebar-primary">New</span>
          </a>
          <ul id="charts" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="charts-chartjs.html">Chart.js</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="charts-apexcharts.html">ApexCharts <span className="badge badge-sidebar-primary">New</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="notifications.html">
            <i className="align-middle" data-feather="bell" /> <span className="align-middle">Notifications</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#maps" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="map-pin" /> <span className="align-middle">Maps</span>
          </a>
          <ul id="maps" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
            <li className="sidebar-item"><a className="sidebar-link" href="maps-google.html">Google Maps</a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="maps-vector.html">Vector Maps</a></li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a className="sidebar-link" href="calendar.html">
            <i className="align-middle" data-feather="calendar" /> <span className="align-middle">Calendar</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#multi" data-toggle="collapse" className="sidebar-link collapsed">
            <i className="align-middle" data-feather="share-2" /> <span className="align-middle">Multi Level</span>
          </a>
          <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-parent="#sidebar">
            <li className="sidebar-item">
              <a href="#multi-2" data-toggle="collapse" className="sidebar-link collapsed">
                Two Levels
              </a>
              <ul id="multi-2" className="sidebar-dropdown list-unstyled collapse">
                <li className="sidebar-item">
                  <a className="sidebar-link" href="/">Item 1</a>
                  <a className="sidebar-link" href="/">Item 2</a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a href="#multi-3" data-toggle="collapse" className="sidebar-link collapsed">
                Three Levels
              </a>
              <ul id="multi-3" className="sidebar-dropdown list-unstyled collapse">
                <li className="sidebar-item">
                  <a href="#multi-3-1" data-toggle="collapse" className="sidebar-link collapsed">
                    Item 1
                  </a>
                  <ul id="multi-3-1" className="sidebar-dropdown list-unstyled collapse">
                    <li className="sidebar-item">
                      <a className="sidebar-link" href="/">Item 1</a>
                      <a className="sidebar-link" href="/">Item 2</a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="/">Item 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <div className="sidebar-cta">
        <div className="sidebar-cta-content">
          <strong className="d-inline-block mb-2">Monthly Sales Report</strong>
          <div className="mb-3 text-sm">
            Your monthly sales report is ready for download!
          </div>
          <a href="https://themes.getbootstrap.com/product/appstack-responsive-admin-template/" className="btn btn-primary btn-block" target="_blank" rel="noreferrer">Download</a>
        </div>
      </div>
    </div>
  </nav>
  
   </React.Fragment>
}

export default SideNav;