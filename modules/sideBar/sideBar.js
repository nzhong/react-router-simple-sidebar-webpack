var React = require('react');
var Link = require('react-router').Link
var Select = require('react-select');

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

module.exports = React.createClass({

  logChange: function(val) {
      console.log("Selected: " + val);
  },

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

            <div id="sidebar-dropdown">
            <Select
              name="form-field-name"
              value="one"
              options={options}
              onChange={this.logChange}
            />
            </div>

            <li> <Link to={`/about`}>About</Link> </li>
            <li> <a onClick={this.linkOnClick}>3</a> </li>
          </ul>
      </div>
    )
  }

});
