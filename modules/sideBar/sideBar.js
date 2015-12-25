var React = require('react');
var Link = require('react-router').Link

module.exports = React.createClass({

  linkOnClick: function() {
    this.props.history.pushState(null, `/3`);
  },

  render : function() {
    return (
      <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
                <a href="#"> App Name </a>
            </li>
            <li> <Link to={`/about`}>About</Link> </li>
            <li> <a onClick={this.linkOnClick}>3</a> </li>
          </ul>
      </div>
    )
  }

});
