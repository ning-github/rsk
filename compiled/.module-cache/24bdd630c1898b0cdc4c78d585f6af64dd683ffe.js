var Button = React.createClass({displayName: "Button",
  getInitialState: function(){
    return {val:0};
  },
  // increment state val count
  update: function(){
    this.setState({val: this.state.val + 1});
  },
  // render
  render: function(){
    return (
      React.createElement("button", {onClick: this.update})
    )
  }

});