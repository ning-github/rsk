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
    console.log(this.state.val);
    return (
      React.createElement("button", {onClick: this.update}, this.state.val)
    )
  }

});

var App = React.createClass

React.render(React.createElement(Button, null), document.getElementById('egghead'));