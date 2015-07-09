var Button = React.createClass({displayName: "Button",
  getInitialState: function(){
    return {val:0};
  },
  // increment state val count
  update: function(){
    this.setState({val: this.state.val + 1});
  }

});