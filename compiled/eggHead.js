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

var App = React.createClass({displayName: "App",
  mount: function(){
    // render the Button component from earlier
    React.render(React.createElement(Button, null), document.getElementById('inc')); 
  },
  unmount: function(){
    // unmount
    React.unmountComponentAtNode(document.getElementById('inc'));
  },
  render: function(){
    return (   
      React.createElement("div", null, 
        React.createElement("button", {onClick: this.mount}, "Mount"), 
        React.createElement("button", {onClick: this.unmount}, "Unmount"), 
        React.createElement("div", {id: "inc"})
      )
    )
  }
});

// React.render(<Button/>, document.getElementById('egghead'));
React.render(React.createElement(App, null), document.getElementById('egghead'));