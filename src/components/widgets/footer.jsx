import React from 'react';

function Footer(props) {
   return <React.Fragment>
   <footer className="footer">
      <div className="container-fluid">
        <div className="row text-muted">
          <div className="col-6 text-left">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="text-muted" href="/">Support</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="/">Help Center</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="/">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="/">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-6 text-right">
            <p className="mb-0">
              © 2020 - <a href="index-2.html" className="text-muted">AppStack</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
 
   </React.Fragment>
}

export default Footer;