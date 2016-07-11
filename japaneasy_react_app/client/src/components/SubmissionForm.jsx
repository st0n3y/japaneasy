var React = require('react');

var SubmissionForm = React.createClass({

  render: function() {
    return (
      <form className="submissionForm" onSubmit={this.handleSubmit}>
        <p>Title</p>
        <input 
          type="text" 
          placeholder="Type here..." 
        />
        <p>Description</p>
        <input 
          type="text" 
          placeholder="Type here..." 
        />
        <input type="submit" value="Submit"/>
    </form>
    );
  }

});

module.exports = SubmissionForm;