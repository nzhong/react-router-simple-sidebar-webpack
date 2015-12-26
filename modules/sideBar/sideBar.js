var React = require('react');
var Link = require('react-router').Link
var Select = require('react-select');

var options = [
    { value: '1xy86vuz17gf', label: 'One of the longest string you will ever see in a dropdown' },
    { value: '2xy86vuz17gf', label: 'Two is always better than one, or is it really. now that is a question' }
];

module.exports = React.createClass({

  logChange: function(val) {
      console.log("Selected: " + val);
  },

  linkOnClick: function() {
    this.props.history.pushState(null, `/3`);
  },

  renderOption: function(option) {
  		return <div className="sidebar-dropdow-option-wrap">{option.label} ?</div>;
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
              value=""
              options={options}
              optionRenderer={this.renderOption}
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
