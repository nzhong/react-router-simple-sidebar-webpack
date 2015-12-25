var React = require('react');
var SideBar = require('./../sideBar/sideBar');

module.exports = React.createClass({
  render : function() {
    return (
      <div id="wrapper">
        <SideBar {...this.props} />

        <div id="page-content-wrapper">
          <div className="container-fluid">
            {this.props.children}
          </div>
        </div>

      </div>
    )
  }
});
