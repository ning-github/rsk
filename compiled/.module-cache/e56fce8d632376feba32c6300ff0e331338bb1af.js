var Counter = React.createClass({displayName: "Counter",
  getInitialState: function(){
    return {
      count: 0
    }
  },
  incCount: function(){
    console.log('asdf');
    this.setState({
      count: this.state.count + 1
    });
  },
  render: function(){
    return (
      React.createElement("div", {className: "my-component"}, 
        React.createElement("h2", null, " count: ", this.state.count, " "), 
        React.createElement("button", {type: true, onclick: this.incCount}, "click to inc")
      )
    );
  }
});

React.render(React.createElement(Counter, null), document.getElementById('counter'));