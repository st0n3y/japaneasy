var React = require('react');

var ResourcePanel = React.createClass({

  render: function() {
    console.log(this.props);

    return (
      <div className="info-pane">
        <div className='resource-image'>
          <img src={this.props.image.url} />
        </div>
        <div className="title-and-description">
          <h3 className="resource-title">
            {this.props.title}
          </h3>
          {this.props.children}
        </div>
        <br/>
      </div>
    );
  }

});

module.exports = ResourcePanel;