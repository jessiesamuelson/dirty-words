import React, {Component} from 'react';
import { Link } from 'react-router';


class Nav extends Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Dirty Words</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="/" activeClassName="active">Home</Link></li>
                <li><Link to="/about" activeClassName="active">About</Link></li>
                <li><Link to="/words" activeClassName="active">Words</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Nav
