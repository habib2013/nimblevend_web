import React from 'react';

function DashboardMain(props) {
   return <React.Fragment>
       <main className="content">
      <div className="container-fluid p-0">
        <div className="row mb-2 mb-xl-3">
         
          <div className="col-auto ml-auto text-right mt-n1">
            <span className="dropdown mr-2">
              <button className="btn btn-light bg-white shadow-sm dropdown-toggle" id="day" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="align-middle mt-n1" data-feather="calendar" /> Today
              </button>
              <div className="dropdown-menu" aria-labelledby="day">
                <h6 className="dropdown-header">Settings</h6>
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <a className="dropdown-item" href="/">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">Separated link</a>
              </div>
            </span>
            <button className="btn btn-primary shadow-sm">
              <i className="align-middle" data-feather="filter">&nbsp;</i>
            </button>
            <button className="btn btn-primary shadow-sm">
              <i className="align-middle" data-feather="refresh-cw">&nbsp;</i>
            </button>
          </div>
        </div>
        <div className="row">
        <div className="col-md-4 col-xxl-3 d-flex">
            <div className="card illustration flex-fill">
              <div className="card-body p-0 d-flex flex-fill">
                <div className="row no-gutters w-100">
                  <div className="col-6">
                    <div className="illustration-text p-3 m-1">
                      <h4 className="illustration-text">Welcome Back, Chris!</h4>
                      <p className="mb-0">AppStack Dashboard</p>
                    </div>
                  </div>
                  <div className="col-6 align-self-end text-right">
                    <img src="img/illustrations/social.png" alt="Social" className="img-fluid illustration-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <div className="col-md-4 col-xxl-3 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Visitors</h5>
                  </div>
                  <div className="col-auto">
                    <div className="stat stat-sm">
                      <i className="align-middle" data-feather="users" />
                    </div>
                  </div>
                </div>
                <span className="h1 d-inline-block mt-1 mb-3">0</span>
                <div className="mb-0">
                  <span className="badge badge-soft-success mr-2"> <i className="mdi mdi-arrow-bottom-right" /> 6.25% </span>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xxl-3 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Products view</h5>
                  </div>
                  <div className="col-auto">
                    <div className="stat stat-sm">
                      <i className="align-middle" data-feather="shopping-cart" />
                    </div>
                  </div>
                </div>
                <span className="h1 d-inline-block mt-1 mb-3">3</span>
                <div className="mb-0">
                  <span className="badge badge-soft-danger mr-2"> <i className="mdi mdi-arrow-bottom-right" /> -4.65% </span>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xxl-3 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Orders received</h5>
                  </div>
                  <div className="col-auto">
                    <div className="stat stat-sm">
                      <i className="align-middle" data-feather="activity" />
                    </div>
                  </div>
                </div>
                <span className="h1 d-inline-block mt-1 mb-3">19.312</span>
                <div className="mb-0">
                  <span className="badge badge-soft-success mr-2"> <i className="mdi mdi-arrow-bottom-right" /> 8.35% </span>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xxl-3 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Products view</h5>
                  </div>
                  <div className="col-auto">
                    <div className="stat stat-sm">
                      <i className="align-middle" data-feather="shopping-cart" />
                    </div>
                  </div>
                </div>
                <span className="h1 d-inline-block mt-1 mb-3">3</span>
                <div className="mb-0">
                  <span className="badge badge-soft-danger mr-2"> <i className="mdi mdi-arrow-bottom-right" /> -4.65% </span>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xxl-3 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="row">
                  <div className="col mt-0">
                    <h5 className="card-title">Orders received</h5>
                  </div>
                  <div className="col-auto">
                    <div className="stat stat-sm">
                      <i className="align-middle" data-feather="activity" />
                    </div>
                  </div>
                </div>
                <span className="h1 d-inline-block mt-1 mb-3">19.312</span>
                <div className="mb-0">
                  <span className="badge badge-soft-success mr-2"> <i className="mdi mdi-arrow-bottom-right" /> 8.35% </span>
                  <span className="text-muted">Since last week</span>
                </div>
              </div>
            </div>
          </div>
           
            </div>
        <div className="row">
          <div className="col-12 col-lg-4 d-flex">
           
           </div>
          
          
          <div className="col-12 col-md-7 col-lg-4 col-xxl-6 d-flex">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <div className="card-actions float-right">
                  <div className="dropdown show">
                    <a href="/" data-toggle="dropdown" data-display="static">
                      <i className="align-middle" data-feather="more-horizontal" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="/">Action</a>
                      <a className="dropdown-item" href="/">Another action</a>
                      <a className="dropdown-item" href="/">Something else here</a>
                    </div>
                  </div>
                </div>
                <h5 className="card-title mb-0">Sales / Revenue</h5>
              </div>
              <div className="card-body d-flex w-100">
                <div className="align-self-center chart">
                  <canvas id="chartjs-dashboard-bar" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-5 col-lg-4 col-xxl-2 d-flex">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <div className="card-actions float-right">
                  <div className="dropdown show">
                    <a href="/" data-toggle="dropdown" data-display="static">
                      <i className="align-middle" data-feather="more-horizontal" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="/">Action</a>
                      <a className="dropdown-item" href="/">Another action</a>
                      <a className="dropdown-item" href="/">Something else here</a>
                    </div>
                  </div>
                </div>
                <h5 className="card-title mb-0">Order Activity</h5>
              </div>
              <div className="card-body">
                <ul className="timeline m-3">
                  <li className="timeline-item">
                    <strong>Delivered</strong>
                    <p className="text-sm">2 hours ago</p>
                  </li>
                  <li className="timeline-item">
                    <strong>Pick Up</strong>
                    <p className="text-sm">6 hours ago</p>
                  </li>
                  <li className="timeline-item">
                    <strong>In Transit</strong>
                    <p className="text-sm">1 days ago</p>
                  </li>
                  <li className="timeline-item">
                    <strong>Dispatched</strong>
                    <p className="text-sm">3 days ago</p>
                  </li>
                  <li className="timeline-item">
                    <strong>Order Received</strong>
                    <p className="text-sm">4 days ago</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex-fill">
          <div className="card-header">
            <div className="card-actions float-right">
              <div className="dropdown show">
                <a href="/" data-toggle="dropdown" data-display="static">
                  <i className="align-middle" data-feather="more-horizontal" />
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  <a className="dropdown-item" href="/">Something else here</a>
                </div>
              </div>
            </div>
            <h5 className="card-title mb-0">Top Selling Products</h5>
          </div>
          <table id="datatables-dashboard-products" className="table table-striped my-0">
            <thead>
              <tr>
                <th>Name</th>
                <th className="d-none d-xl-table-cell">Tech</th>
                <th className="d-none d-xl-table-cell">License</th>
                <th className="d-none d-xl-table-cell">Tickets</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AppStack Theme</td>
                <td><span className="badge badge-success">HTML</span></td>
                <td className="d-none d-xl-table-cell">Single license</td>
                <td className="d-none d-xl-table-cell">50</td>
                <td className="d-none d-xl-table-cell">720</td>
              </tr>
              <tr>
                <td>Spark Theme</td>
                <td><span className="badge badge-danger">Angular</span></td>
                <td className="d-none d-xl-table-cell">Single license</td>
                <td className="d-none d-xl-table-cell">20</td>
                <td className="d-none d-xl-table-cell">540</td>
              </tr>
              <tr>
                <td>Milo Theme</td>
                <td><span className="badge badge-warning">React</span></td>
                <td className="d-none d-xl-table-cell">Single license</td>
                <td className="d-none d-xl-table-cell">40</td>
                <td className="d-none d-xl-table-cell">280</td>
              </tr>
              <tr>
                <td>Ada Theme</td>
                <td><span className="badge badge-info">Vue</span></td>
                <td className="d-none d-xl-table-cell">Single license</td>
                <td className="d-none d-xl-table-cell">60</td>
                <td className="d-none d-xl-table-cell">610</td>
              </tr>
              <tr>
                <td>Abel Theme</td>
                <td><span className="badge badge-danger">Angular</span></td>
                <td className="d-none d-xl-table-cell">Single license</td>
                <td className="d-none d-xl-table-cell">80</td>
                <td className="d-none d-xl-table-cell">150</td>
              </tr>
              <tr>
                <td>Spark Theme</td>
                <td><span className="badge badge-success">HTML</span></td>
                <td className="d-none d-xl-table-cell">Single license</td>
                <td className="d-none d-xl-table-cell">20</td>
                <td className="d-none d-xl-table-cell">480</td>
              </tr>
              <tr>
                <td>Libre Theme</td>
                <td><span className="badge badge-warning">React</span></td>
                <td className="d-none d-xl-table-cell">Single license</td>
                <td className="d-none d-xl-table-cell">30</td>
                <td className="d-none d-xl-table-cell">280</td>
              </tr>
              <tr>
                <td>Von Theme</td>
                <td><span className="badge badge-danger">Angular</span></td>
                <td className="d-none d-xl-table-cell">Single license</td>
                <td className="d-none d-xl-table-cell">50</td>
                <td className="d-none d-xl-table-cell">350</td>
              </tr>
              <tr>
                <td>Material Blog Theme</td>
                <td><span className="badge badge-info">Vue</span></td>
                <td className="d-none d-xl-table-cell">Single license</td>
                <td className="d-none d-xl-table-cell">10</td>
                <td className="d-none d-xl-table-cell">480</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  
   </React.Fragment>
}

export default DashboardMain;