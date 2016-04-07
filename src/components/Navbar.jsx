import React, {Component} from 'react';
import Link from 'react-router/lib/Link'

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      navbarCollapse: 'out',
      active: this.props.current
    }
  }
  handleNavbarCollapse(){
    if(this.state.navbarCollapse == "in"){
      this.setState({navbarCollapse: "out"});
    } else {
      this.setState({navbarCollapse: "in"});
    }
  }
  render(){

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed"onClick={this.handleNavbarCollapse.bind(this)}>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">HTML5 Canvas experiments</a>
              </div>

              <div className={"collapse navbar-collapse "+this.state.navbarCollapse}>
                <ul className="nav navbar-nav">
                  <li className={this.props.current == '/FirstSVG' ? "active" : ""}>
                    <Link to="bouncingBall">
                      FirstSVG
                      <span className="sr-only">{this.props.current == '/FirstSVG' ? "(current)" : ""}</span>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
